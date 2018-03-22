import Koa from 'koa';
import BodyParser from 'koa-bodyparser';
import Cors from 'kcors';
import jwt from 'koa-jwt';

import config from './config';
import apm from './apm';
import errorHandler from './middlewares/errorHandler';
import logMiddleware from './middlewares/log';
import logger from './logger';
import requestId from './middlewares/requestId';
import responseHandler from './middlewares/responseHandler';
import router from './routes';

const app = new Koa();

// Trust proxy
app.proxy = true;

// Set middlewares
app.use(
  BodyParser({
    enableTypes: ['json', 'form'],
    formLimit: '10mb',
    jsonLimit: '10mb',
  })
);
app.use(requestId());
app.use(
  Cors({
    origin: '*',
    allowMethods: ['GET', 'HEAD', 'PUT', 'POST', 'DELETE', 'PATCH'],
    exposeHeaders: ['X-Request-Id'],
  })
);
app.use(responseHandler());
app.use(errorHandler());
app.use(logMiddleware({ logger }));

// Middleware below this line is only reached if JWT token is valid
app.use(jwt({ secret: 'shared-secret' }));
// Unprotected middleware
app.use((ctx, next) => {
  if (ctx.url.match(/^\/public/)) {
    ctx.body = 'unprotected\n';
  } else {
    return next();
  }
});

// Protected middleware
app.use(ctx => {
  if (ctx.url.match(/^\/api/)) {
    ctx.body = 'protected\n';
  }
});

// Bootstrap application router
app.use(router.routes());
app.use(router.allowedMethods());

function onError(err) {
  if (apm.active) apm.captureError(err);
  logger.error({ err, event: 'error' }, 'Unhandled exception occured');
}

// Handle uncaught errors
app.on('error', onError);

// Start server
if (!module.parent) {
  const server = app.listen(config.port, config.host, () => {
    logger.info({ event: 'execute' }, `API server listening on ${config.host}:${config.port}, in ${config.env}`);
  });
  server.on('error', onError);
}

// Expose app
export default app;
