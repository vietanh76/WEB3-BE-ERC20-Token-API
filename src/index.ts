import dotenv from 'dotenv';
dotenv.config();
import Koa from 'koa';
import router from './routers';

const app = new Koa();
const bodyParser = require('koa-bodyparser');
const port = process.env.PORT;

app.use(bodyParser());
app.use(router());

// Start the server
app.listen(port, () => {
    console.log(`API server is running on port ${port}`);
});
