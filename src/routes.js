import Router from 'koa-router';
import homeCtrl from './controllers/home';

const router = new Router();
router.get('/', homeCtrl.welcome);
router.get('/spec', homeCtrl.showSwaggerSpec);

export default router;
