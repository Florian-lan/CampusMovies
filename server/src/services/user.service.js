import User from '../db/models/user.model.js'

class UserService {
    async createUser(user_name, password) {
        // 插入数据
        // 当键和值名称相同时，可以简写，省略键值对，直接写值
        // User.create(
        //     {
        //       user_name: user_name,
        //       password: password
        //     },
        //     (err, doc) => {
        //       if (err) console.log('保存失败！', err)
        //       else console.log('保存成功', doc)
        //     }
        //   )
        // await表达式：返回值是promise对象的值（成功或失败）
        const res = await User.create({ user_name, password })
        // console.log(aaa)
        return res
    }
    // 这里传入的参数是一个对象，为满足不同的调用对象
    async getUserInfo({ user_name, password }) {
        // console.log(`args: ${args}`)
        // console.log(args)
        // const {user_name,password} = args

        const whereOpt = {}
        // console.log(user_name)
        // console.log(password)

        // 如果存在则赋值
        user_name && Object.assign(whereOpt, { user_name })
        password && Object.assign(whereOpt, { password })

        console.log(whereOpt)
        const res = await User.findOne(whereOpt
            // (err, docs) => {
            //     if (err) console.log(err)
            //     else console.log(docs)
            // }
        )
        // 返回找到的值
        // console.log(res)
        return res ? res : null

    }
}

export default new UserService()
