import Router from 'koa-router'
import UserController from '../controller/user.controller.js'
import userMiddleware  from '../middleware/user.middleware.js'

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
    login
} = userController
// GET 会拼接上prefix -> /users/
router.get('/',(ctx,next)=>{
    ctx.body = "hello users"
})
// 注册接口
// 先验证格式(是否为空），再验证是否存在，再交给controller函数处理
router.post('/register', userValidator,userVerify,cryptPassword, register)

// 登录接口
router.post('/login', userValidator, loginVerify, login)

export default router