
// import path from 'path'
// import { fileURLToPath } from 'url'
const fs = require('fs')
const Router = require('koa-router')

const router = new Router()
// // 先找当前文件的路径->找当前文件坐在目录的路径
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename)

console.log(__dirname)
fs.readdirSync(__dirname).forEach((item) => {
    if (item != 'index.cjs') {
        //  导入每个路由文件
        let r = require('./' + item)
        // let r = import('./' + item)
        console.log(item)
        console.log(r)
        // router.use(r.routes())

    }
})

module.exports = router
