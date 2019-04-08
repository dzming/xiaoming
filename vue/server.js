const koa = require('koa');
const static = require('koa-static');
const fs = require('fs');

//实例化koa应用
const app = new koa();

//使用第三方模块koa-static创建静态服务器
app.use(static('./'));

app.use((ctx,next)=>{
	let content =fs.readFileSync('index.html','utf-8');
	ctx.status=200;
	ctx.type='text/html;charset=utf-8'
	ctx.body = content
});

app.listen(1505, () => {
	console.log('服务器启动');
});