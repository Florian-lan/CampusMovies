import bcrypt from 'bcryptjs'
import userService from "../services/user.service.js"
import errType from "../constant/err.type.js"

const { getUserInfo } = userService
const {
    userFormatError,
    userAlreadyExist,
    userRegisterError,
    userDoesNotExist,
    userLoginError,
    invalidPassword
} = errType

// 验证器中间件
const userValidator = async (ctx, next) => {
    const { user_name, password } = ctx.request.body
    // 判断合法性
    if (!user_name || !password) {
        console.error('用户名或密码为空', ctx.request.body)
        // 封装错误类型
        ctx.app.emit('error', userFormatError, ctx)
        // ctx.status = 400
        // ctx.body = {
        //     code: '10001',
        //     message: "用户名或密码为空",
        //     // result一般都是存放返回客户端的信息
        //     result: '',
        // }
        return
    }
    // 交由下一个中间件处理
    await next()


}

// 验证用户是否合理
const userVerify = async (ctx, next) => {
    const { user_name } = ctx.request.body
    // 判断合理性
    // 如果用户存在，则不操作
    // 注意：getUserInfo返回的是一个promise对象，为真值，所以一定需要在前面加上await，
    // 否则这个if一定是true
    // if (await getUserInfo({ user_name })) {
    //     ctx.app.emit('error',userAlreadyExist, ctx)
    //     // 409表示冲突的
    //     // ctx.status = 409
    //     // ctx.body = {
    //     //     code: '10002',
    //     //     message: "用户已存在",
    //     //     result: "",
    //     // }
    //     return
    // }
    // 用try catch完善错误处理，增强代码健壮性
    try {
        const res = await getUserInfo({ user_name })
        if (res) {
            // 记录到日志中的错误
            console.error('用户名已经存在', { user_name })
            ctx.app.emit('error', userAlreadyExist, ctx)
            return
        }
    } catch (err) {
        // 提交错误
        ctx.app.emit('error', userRegisterError, ctx)
        // 出现错误后return，不执行下一个中间件
        return
    }
    // 以上函数没问题，则继续执行下一个中间件
    await next()
}

// 异步处理密码
const cryptPassword = async (ctx, next) => {
    const { password } = ctx.request.body
    // 
    const salt = bcrypt.genSaltSync(10)
    // hash保存的是密文，密码+盐
    const hash = bcrypt.hashSync(password, salt)
    // 把密文挂载到body上，把原来的覆盖掉
    ctx.request.body.password = hash
    await next()
}

const loginVerify = async (ctx, next) => {
    // 1. 判断用户是否存在
    const { user_name, password } = ctx.request.body
    try {
        // 从数据库中寻找信息
        const res = await getUserInfo({ user_name })
        // 用户不存在   
        if (!res) {
            console.error(`用户名不存在 ${user_name}`)
            ctx.app.emit('error', userDoesNotExist, ctx)
            return
        }
        // 2. 若用户存在，则判断密码是否匹配
        // 如果不匹配
        if (!bcrypt.compareSync(password, res.password)) {
            ctx.app.emit('error', invalidPassword, ctx)
            return 
        }
    } catch (err) {
        // try捕获到错误，也就是登录失败，直接抛出错误
        console.error(err)
        ctx.app.emit('error', userLoginError, ctx)
        return 
    }


    // 3. 继续执行，await next()

}
export default {
    userValidator,
    userVerify,
    cryptPassword,
    loginVerify
}