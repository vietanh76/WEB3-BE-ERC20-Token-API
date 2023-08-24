import Koa from 'koa';

const app = new Koa();
const port: number = 3000;

app.use(async (ctx: Koa.Context) => {
  ctx.body = 'Hello World';
});

app.listen(port);