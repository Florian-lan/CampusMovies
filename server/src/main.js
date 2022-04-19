
// import cors from '@koa/cors';
import Config from './config/config.default.js';
import app from './app/index.js'

app.listen(Config.PORT, () => {
  console.log(`server starts successful: http://localhost:${Config.PORT}`);
});
