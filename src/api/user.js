// 完成用户相关接口
import request from './request';

class UserAPI {
    static PREFIX = '/users'
    static login(user_name, password) {
        // 向服务端发送post请求
        // 服务端路由进行分发
        return request.post(`${UserAPI.PREFIX}/login`, {
            // 注意这里和服务端的ctx.request.body要对应
            user_name,
            password
        })

    }
    static register(user_name, password,university,email = "") {
        // console.log(user_name, password,university,email)
        // 向服务端发送post请求
        // 服务端路由进行分发
        return request.post(`${UserAPI.PREFIX}/register`, {
            // 注意这里和服务端的ctx.request.body要对应
            user_name,
            password,
            university,
            email,
        })

    }

}

export default UserAPI
