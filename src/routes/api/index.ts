import Router from '@koa/router';
import v3 from './v3';


const api = new Router();

api.use('/v3', v3.routes() );

api.get('/v3', ctx => {
    ctx.body="버전 3";
});

export default api;