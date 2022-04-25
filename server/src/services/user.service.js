import User from '../db/models/user.model.js'
import bcrypt from 'bcryptjs'
import { TRUE } from 'node-sass'

class UserService {
    async createUser(user_name, password, university, email) {
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
        
        console.log(user_name, password,university,email)
        const res = await User.create({ user_name, password,university,email})
        console.log(res)
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

        // console.log(whereOpt)
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
    // 考虑复用性所以传参的时候传入一个对象（对象内的属性可增删）
    async updateById({ user_name, password }) {
        // 必须要有id的
        const whereOpt = { user_name }
        const newUser = {}
        // user_name && Object.assign(newUser,{user_name})
        password && Object.assign(newUser, { password })

        console.log(`newUser${newUser}`)
        console.log(whereOpt)

        // 返回更新之后的对象
        const res = await User.findOneAndUpdate(whereOpt, newUser, { returnOriginal: false })

        console.log(`res ${res}`)
        return res ? true : false
        // 判断是否修改成功
        // console.log(bcrypt.compareSync("123321",res.password))

    }
}

export default new UserService()
