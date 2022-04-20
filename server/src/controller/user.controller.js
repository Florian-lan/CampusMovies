import UserService from "../services/user.service.js"
import errType from "../constant/err.type.js"

const {
    userRegisterError
} = errType
const {
    createUser,
    getUserInfo
} = UserService

export default class UserController {

    async register(ctx, next) {

        // 1. 获取数据
        // console.log(ctx.request.body)
        const { user_name, password } = ctx.request.body

        // 2. 操作数据库
        try {
            const res = await createUser(user_name, password)
            console.log(res)
            // 3. 返回结果
            // 将body内容返回到客户端
            ctx.body = {
                // code为0，表示成功
                code: 0,
                message: "用户注册成功",
                result: {
                    user_name: res.user_name,
                    password: res.password
                }
            }

        } catch(err){
            console.log(err)
            ctx.app.emit('error',userRegisterError, ctx)
        }
        

    }
    async login(ctx, next) {
        const {user_name} = ctx.request.body

        ctx.body = `欢迎回来 ${user_name}`
    }
}


