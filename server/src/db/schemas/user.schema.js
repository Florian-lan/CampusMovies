import mongoose from "mongoose"

// var id = mongoose.Types.ObjectId()

// 设计集合结构（类似于表结构）
const userSchema = new mongoose.Schema({
    // userId:Schema.Types.ObjectId,
    user_name: {
      type: String, // 设置字段类型
      required: true // 约束不能为空
    },
    password:{
      type: String,
      minlength:[6, "The password must contain at least 6 characters"],   // 约束密码最短值
      required: [true, "password is required!"]
    },
    email:{
      type: String
    },
    university:{
      type: String
    }
    
  })

  export default userSchema

