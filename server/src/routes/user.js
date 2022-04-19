import Router from 'koa-router'
import UserController from '../controller/user.controller.js'

const router = new Router(
    {
        prefix: '/users'
    }
)
// controller函数实例化
const userController = new UserController()
// GET 会拼接上prefix -> /users/
router.get('/',(ctx,next)=>{
    ctx.body = "hello users"
})
// 注册接口
router.post('/register', userController.register)

// 登录接口
router.post('/login', userController.login)

export default router