import Router from '@koa/router';
import api from './api';

const routes = new Router();

routes.use('/api', api.routes())

routes.get('/cs', ctx => {
    ctx.body = "<h1>컨텐츠</h1>";
});

export default routes;

