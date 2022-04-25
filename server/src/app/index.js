import Koa from 'koa';
// 导入路由
import userRouter from '../routes/user.router.js'
// import router from '../routes/index.cjs'
import KoaBody from 'koa-body'
import connectDB from '../db/index.js'
import Config from '../config/config.default.js'
import errHandle from './errHandle.js'






const app = new Koa();

// 连接数据库
connectDB(Config.MONGODB_URL);

app
//   .use(cors())
  .use(KoaBody())
  .use(userRouter.routes())
//   .use(todoRouter.routes());

// 统一错误处理,对应ctx.app.emit
// (err,ctx) 对应emit时传入的errType和ctx
// 调用errHandle处理
app.on('error',errHandle)

export default app