const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

/*router.get('/api', (ctx, next)=> {
	console.log('api request');
    ctx.body = "Ready to recive API"
});
*/
router.get('/', (ctx, next)=> {
    console.log('api request');
    ctx.body = "Ready to recive API"
});

router.get('/health', (ctx, next)=> {
	console.log('Health Check');
	ctx.body= "Ready to Health Check"
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000, ()=> {
	console.log('server is running.. port:3000');
});
