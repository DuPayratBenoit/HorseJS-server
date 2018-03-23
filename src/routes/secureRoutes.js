import Router from 'koa-router';
import jwt from '../middlewares/jwt';

// const ObjectID = mongoose.Types.ObjectId;

const router = new Router();

// Apply JWT middleware to secured router only
router.use(jwt.errorHandler).use(jwt.jwtInstance);

// List all people
router.get('/user', async ctx => {
  ctx.body = 'Get done';
});

// Create new person
router.post('/user', async ctx => {
  ctx.body = 'Post done';
});

export default router;
