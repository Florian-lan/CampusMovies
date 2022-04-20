import Router from 'koa-router'
import UserController from '../controller/user.controller.js'
import userMiddleware  from '../middleware/user.middleware.js'
import {auth} from '../middleware/auth.middleware.js'

const {
    userValidator,
    userVerify,
    cryptPassword,
    loginVerify
} = userMiddleware

const router = new Router(
    {
        prefix: '/users'
    }
)
// controller函数实例化
const userController = new UserController()
const {
    register,
    login,
    changePassword
} = userController
// GET 会拼接上prefix -> /users/
router.get('/',(ctx,next)=>{
    ctx.body = "hello users"
})
// 注册接口
// 先验证格式(是否为空），再验证是否存在，再交给controller函数处理
// 先不加密TODO
// router.post('/register', userValidator,userVerify,cryptPassword, register)
router.post('/register', userValidator,userVerify,register)


// 登录接口
router.post('/login', userValidator, loginVerify, login)

// 修改密码接口
// auth中间件判断用户是否已经登录
// router.patch('/',auth, cryptPassword,changePassword, (ctx, next)=>{
//     console.log(ctx.state.user)
//     ctx.body = "修改密码成功"
// })
// 先不加密TODO
router.patch('/',auth, changePassword, (ctx, next)=>{
        console.log(ctx.state.user)
        ctx.body = "修改密码成功"
    })
export default router