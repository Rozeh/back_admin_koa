import Koa from 'koa';
import 'dotenv/config'
import routes from './routes';

const app = new Koa();

/* 미들웨어 */
app.use(routes.routes()).use(routes.allowedMethods());

const {PORT} = process.env;

app.listen(PORT, () => {
    console.log('MEDI-DATA SERVER is Listening to port', PORT);
});