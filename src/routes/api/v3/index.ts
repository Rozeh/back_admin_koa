import Router from '@koa/router';
import auth from './auth';

const v3 = new Router();

v3.use('/auth', auth.routes());

v3.get('/check', ctx => {
    ctx.body = {
        version: 'v3'
    };
});

v3.get('/test', async ctx => {
    ctx.body = {
        user_id: ctx.state.user_id
    };
});

v3.get('/auth', ctx => {
    ctx.body = "<h1>인증모듈</h1>";
});

export default v3;