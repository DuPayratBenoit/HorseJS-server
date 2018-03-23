import jwt from '../middlewares/jwt';
import User from '../models/user';

/**
 * @swagger
 * /:
 *   get:
 *     tags:
 *       - Public
 *     summary: Show API information.
 *     operationId: login
 *     responses:
 *       200:
 *         description: Authentication using jwt
 */
const login = async ctx => {
  const { username, password } = ctx.request.body;

  const user = await User.findOne({ username });
  if (user && user.validPassword(password)) {
    ctx.body = {
      token: jwt.issue({ user: '' }),
    };
  } else {
    ctx.status = 401;
    ctx.body = { error: 'Invalid login' };
  }
};

const register = async ctx => {
  const { username, password } = ctx.request.body;
  const user = new User();
  user.username = username;
  user.password = user.generateHash(password);
  await user.save();
  ctx.body = { message: 'OK' };
};

export default { login, register };
