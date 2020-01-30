const Koa = require('koa');
const Router = require('koa-router');
const serve = require('koa-static');
const path = require('path');
const fs = require('fs');
const db = require('./db.json');

const app = new Koa();
const router = new Router();
const indexHtml = fs.readFileSync(path.resolve(__dirname, 'front/index.html'), { encoding: 'utf8' });


//app.use(serve(path.resolve(__dirname, '../build/')));

router.get('/', (ctx, next)=> {
	ctx.body=indexHtml;
});

/*
router.get('/', (ctx, next)=> {
	ctx.body = "Ready to Server";
});
*/
router.get('/api', (ctx, next)=> {
    ctx.body = "Ready to recive API"
});

router.get('/api/users', (ctx, next)=> {
	ctx.body = db.users;
});

router.get('/api/users/:userId', (ctx, next)=> {
	const id = parseInt(ctx.params.userId);
	ctx.body = db.users.find((user)=>user.id==id);
});

router.get('/api/threads', (ctx, next)=> {
	ctx.body = db.threads;
});

router.get('/api/threads/:threadId', (ctx, next) => {
	const id = parseInt(ctx.params.threadId);
	ctx.body = db.threads.find((thread)=>thread.id==id);
});

/*
router.get('/api/:name', (ctx, next)=> {
	const {name} = ctx.params;
	ctx.body = name +'인';
});
*/
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
