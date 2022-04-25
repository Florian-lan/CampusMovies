import { message } from 'antd'
import axios from 'axios'
import './style.scss'

// 创建axios请求
const request = axios.create({
    baseURL: 'http://127.0.0.1:8000/',
    headers:{
        'Content-Type':'application/json; charset=UTF-8',
    },
})

// 拦截响应信息并处理
request.interceptors.response.use((response)=>{
    // 从服务端获取的数据
    // response.data = {code,message,result}
    const res = response.data
    // console.log("response")
    console.log(response)

    // 根据服务端返回的信息判断请求是否成功，
    // code是错误信息
    if (res.code === 0){
        console.log("拦截-获取成功")
        // 请求成功，继续返回服务端返回的数据
        return res
    }else{
        message.warn({
            duration: 3,
            content: res.message,
            className: 'my-message',
            style: {
              marginTop: '10vh',
            },
        })
        console.log("拦截-获取失败")
        return res
    }




})

export default request

