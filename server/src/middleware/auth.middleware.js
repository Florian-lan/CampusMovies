import jwt from 'jsonwebtoken'
import Config from '../config/config.default.js'
import errType from '../constant/err.type.js'
const {
    JWT_SECRET
} = Config
const {
    tokenExpiredError,
    invalidToken
} = errType

export const auth = async (ctx, next) => {

    // 从请求头中提取token
    const { authorization } = ctx.request.header
    const token = authorization.replace('Bearer ', '')
    console.log(token)

    try {
        // 验证token，返回值包含了payload(id,user_name)的信息
        const user = jwt.verify(token, JWT_SECRET)
        console.log("test"+user)
        console.log(user)
        console.log(ctx.request.body)

        ctx.state.user = user
    } catch (err) {
        // token出错：过期、无效等
        switch(err.name) {
            // 报错信息来自官网，这里统一包装处理
            case 'TokenExpiredError':
                console.error('token已过期',err)
                return ctx.app.emit('error',tokenExpiredError,ctx)
            case 'JsonWebTokenError':
                console.error('无效的token',err)
                return ctx.app.emit('error',invalidToken,ctx)
        }

    }
    // 继续执行
    await next()
}

export default {
}