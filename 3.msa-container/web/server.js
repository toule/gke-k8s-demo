const Koa = require('koa');
const Router = require('koa-router');
const serve = require('koa-static');
const path = require('path');
const fs = require('fs');

const app = new Koa();
const router = new Router();
const indexHtml = fs.readFileSync(path.resolve(__dirname, 'front/index.html'), { encoding: 'utf8' });

router.get('/', (ctx, next)=> {
	console.log('Front Server Request');
	ctx.body=indexHtml;
});

router.get('/health', (ctx, next)=> {
	console.log('Health Check');
	ctx.body="Ready to Health Check"
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000, ()=> {
	console.log('server is running.. port:3000');
});
