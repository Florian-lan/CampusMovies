import UserService from "../services/user.service.js"

export default class UserController {
    
    async register(ctx, next) {

        // 1. 获取数据
        // console.log(ctx.request.body)
        const {user_name, password} = ctx.request.body
        // 2. 操作数据库
        const res = await UserService.createUser(user_name,password)
        console.log(res)
        // 3. 返回结果
        // 将body内容返回到客户端
        ctx.body = ctx.request.body

    }
    async login(ctx, next) {
        ctx.body = '登录成功'
    }
}


