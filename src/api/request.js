import { message } from 'antd'
import axios from 'axios'
import './style.scss'

// 创建axios请求
const request = axios.create({
    baseURL: 'http://127.0.0.1:8000/api',
    headers:{
        'Content-Type':'application/json; charset=UTF-8',
    },
})

// 拦截响应信息并处理
request.interceptors.response.use((response)=>{
    const res = response.data
    console.log("response"+response)

    if (res.status === 200){
        console.log("拦截-获取成功")
    }else{
        // TODO:待完成res.msg
        message.warn({
            duration: 1,
            content: "res.msg",
            className: 'my-message',
            style: {
              marginTop: '10vh',
            },

        })
        console.log("拦截-获取失败")
    }




})

export default request

