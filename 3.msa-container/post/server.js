const Koa = require('koa');
const Router = require('koa-router');
const db = require('./db.json');

const app = new Koa();
const router = new Router();

/*
router.get('/api/:name', (ctx, next)=> {
	const {name} = ctx.params;
	ctx.body = name +'인';
});
*/

router.get('/', (ctx, next)=> {
    console.log("Health Check");
    ctx.body='Ready to Health Check'
});

router.get('/api/post/id', (ctx, next) => {
    const { id } = ctx.request.query; 
    if(id) {
        ctx.body = 'test' + id;
    } else {
        ctx.body = 'Not Id';
    }
});

router.get('/api/posts', (ctx, next) => {
	ctx.body = db.posts;
});

router.get('/api/posts/threads/:threadNum', (ctx, next)=> {
	const threads = parseInt(ctx.params.threadNum);
	ctx.body = db.posts.find((post)=>post.thread==threads);
});

router.get('/api/posts/users/:userNum', (ctx, next)=> {
	const users = parseInt(ctx.params.userNum);
	ctx.body = db.posts.find((post)=>post.user==users);
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000, ()=> {
	console.log('server is running.. port:3000');
});
