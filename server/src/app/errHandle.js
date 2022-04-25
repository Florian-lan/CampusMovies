// 错误统一处理
export default (err, ctx) => {
    // err是error类型,constant/err.type -> emit(err)抛出 -> on(err)处理

    let status = 200
    // 应该都交由前端处理错误
    // switch (err.code) {
    //     case '10001':
    //         status = 400
    //         break
    //     case '10002':
    //         status = 409
    //         break
    //     default:
    //         status = 500
    // }
    ctx.status = status
    // ctx.body对应客户端中response.data
    ctx.body = err
    // console.log("errHandle")
    // console.log(err)
}