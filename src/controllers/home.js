import pkginfo from '../../package.json';
import spec from '../spec';

/**
 * @swagger
 * /:
 *   get:
 *     tags:
 *       - Public
 *     summary: Show API information.
 *     operationId: showApiInfo
 *     responses:
 *       200:
 *         description: Describe general API information
 */
const welcome = ctx => {
  // BUSINESS LOGIC
  const data = {
    name: pkginfo.name,
    version: pkginfo.version,
    description: pkginfo.description,
    author: pkginfo.author,
  };

  ctx.res.ok(data, 'Hello, API!');
};

const showSwaggerSpec = ctx => {
  ctx.body = spec;
};

export default { welcome, showSwaggerSpec };
