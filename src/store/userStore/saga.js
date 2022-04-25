
import { message } from "antd"
import { call, put} from "redux-saga/effects"
import UserAPI from "../../api/user"
import { LOGIN_SUC } from "./action"

// 在rootSaga中完成监听，监听到LOGIN即调用此函数
// action.type: LOGIN 
export function* login(action) {
    // 从action中取出数据
    const { user_name, password } = action.payload
    // 完善错误处理，提取出 副作用函数（异步操作） 操作处理
    try {
        // 完成异步请求，向服务端发送数据，

        // res接收服务端返回的信息
        // res = {code,message,result:{}}
        const res = yield call(UserAPI.login, user_name, password)
        console.log(res)
        // TODO:设置user_ID
        // 更新localStorage的信息
        // TODO:为什么没有用yield call没用？
        localStorage.setItem('user_name', res.result.user_name)
        // yield call(localStorage.setItem, 'user_name', JSON.stringify(res.result.user_name))
        // console.log("test")

        // 处理完副作用函数之后，发送新的action到reducer
        yield put({
            type: LOGIN_SUC,
            payload: { ...res.result }
        })

    } catch {

    }

}

export function* register(action) {
    // 输出一个对象，无误
    console.log(action.payload)
    const {user_name, password,university,email = ""} = action.payload
    try{
        // 调用api接口，进行注册请求
        const res = yield call(UserAPI.register,user_name, password,university,email)
        console.log("test")

        


    }catch{

    }

}