import Koa from 'koa';
// 导入路由
import userRouter from '../routes/user.js'
import KoaBody from 'koa-body'
import connectDB from '../db/index.js'






const app = new Koa();

// connectDB(Config.MONGODB_URL);

app
//   .use(cors())
  .use(KoaBody())
  .use(userRouter.routes())
//   .use(todoRouter.routes());

export default app