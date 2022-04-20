
// import cors from '@koa/cors';

import Config from './config/config.default.js';
import app from './app/index.js'

const {
  PORT
} = Config

console.log(PORT)
app.listen(PORT, () => {
  console.log(`server starts successful: http://localhost:${PORT}`);
});
