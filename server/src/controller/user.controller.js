import UserService from "../services/user.service.js"
import errType from "../constant/err.type.js"
import jwt from 'jsonwebtoken'
import Config from '../config/config.default.js'
const {
    JWT_SECRET
} = Config

const {
    userRegisterError
} = errType
const {
    createUser,
    getUserInfo,
    updateById
} = UserService

export default class UserController {

    async register(ctx, next) {

        // 1. 获取数据
        // console.log(ctx.request.body)
        const { user_name, password } = ctx.request.body

        // 2. 操作数据库
        try {
            const res = await createUser(user_name, password)
            // console.log(res)
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

        } catch (err) {
            console.log(err)
            ctx.app.emit('error', userRegisterError, ctx)
        }


    }
    async login(ctx, next) {
        const { user_name } = ctx.request.body

        // 1. 获取用户信息（在token的payload中需要记录id,user_name）
        try {
            // 把password剔除
            const { password, ...res } = await getUserInfo({ user_name })
            ctx.body = {
                code: 0,
                message: '用户登录成功',
                // 返回客户端的信息
                result: {
                    // 生成token
                    token: jwt.sign(res,JWT_SECRET,{expiresIn:'1d'}),
                },
            }
        } catch (err) {
            console.error('用户登录失败',err)
        }

        // 重复写会被覆盖的
        // ctx.body = `欢迎回来 ${user_name}`
    }

    async changePassword(ctx, next){
        // console.log(ctx.state.user._doc)
        // ctx.state.user._doc包含_id, user_name, password
        // 从当前的user中获取用户名/id
        const {user_name} = ctx.state.user._doc
        // 从请求体中解构出要修改的目标值
        const {password} =  ctx.request.body
        
        // 1. 获取数据
        // 2. 操作数据库
        if (await updateById({user_name,password})){
            ctx.body = {
                code: 0,
                message: "修改密码成功",
                result: "",
            }
        }else{
            ctx.body = {
                code: '10007',
                message:"修改密码失败",
                result: ""
            }
        }
        // 3. 返回结果
    }
}


