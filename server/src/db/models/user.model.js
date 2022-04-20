import mongoose from "mongoose"
import userSchema from "../schemas/user.schema.js"

// mongoose.model（参数 1:模型名称（首字母大写），参数 2:Schema，参数3:数据库集合名称）
// 如果传入 2个参数的话：这个模型会和模型名称相同的复数的数据库建立连接
// 如果传入 3个参数的话:模型默认操作第三个参数定义的集合名称
export default mongoose.model('User',userSchema);