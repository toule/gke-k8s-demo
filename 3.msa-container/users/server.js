const Koa = require('koa');
const Router = require('koa-router');
const db = require('./db.json');

const app = new Koa();
const router = new Router();

router.get('/', (ctx, next)=> {
    console.log("Health Check");
    ctx.body='Ready to Health Check'
});

router.get('/api/users', (ctx, next)=> {
	ctx.body = db.users;
});

router.get('/api/users/:userId', (ctx, next)=> {
	const id = parseInt(ctx.params.userId);
	ctx.body = db.users.find((user)=>user.id==id);
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000, ()=> {
	console.log('server is running.. port:3000');
});
