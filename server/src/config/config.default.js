import { config } from 'dotenv'

// 调用dotenv获取环境变量
config()

// 打印出来测试下
console.log(process.env.PORT)

export default process.env
// const Config = {
//     /**
//      *  监听端口
//      */
//     PORT: 5000,
//     /**
//      * MongoDB 数据库地址
//      */
//     MONGODB_URL: "mongodb://localhost:27017/user",
//   };
  
//   export default Config;
  