const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

router.get('/', (ctx, next)=> {
    console.log('Health Check');
    ctx.body= "Ready to Health Check"
});

router.get('/api', (ctx, next)=> {
	console.log('api request');
    ctx.body = "Ready to recive API"
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000, ()=> {
	console.log('server is running.. port:3000');
});
