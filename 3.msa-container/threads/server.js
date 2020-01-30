const Koa = require('koa');
const Router = require('koa-router');
const db = require('./db.json');

const app = new Koa();
const router = new Router();

router.get('/', (ctx, next)=> {
    console.log('Health Check');
    ctx.body='Ready to Health Check'
});

router.get('/api/threads', (ctx, next)=> {
	ctx.body = db.threads;
});

router.get('/api/threads/:threadId', (ctx, next) => {
	const id = parseInt(ctx.params.threadId);
	ctx.body = db.threads.find((thread)=>thread.id==id);
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000, ()=> {
	console.log('server is running.. port:3000');
});
