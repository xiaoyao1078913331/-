const mongoose=require('mongoose');
const userSchema=mongoose.Schema({
    name: {
        type: String,
        minlength: 2,
        maxlength: 10,
        required: true
    },
    email: {
        type: String,
        //保证邮箱地址在插入当数据库不重复
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    //admin  超级管理员
    //normal  普通用户
    role: {
        type: String,
        required: true
    },
    //0 启用状态
    //1 禁用状态
    state: {
        type: Number,
        default: 0
    }
})

const User=mongoose.model('User',userSchema);

// User.create({
//     name:'xiaoyao',
//     email:'xy999@qq.com',
//     password:'xy980701',
//     role:'admin',
//     state:0
// })
// .then(()=>{
// console.log('插入数据成功');
// })
// .catch(()=>{
//     console.log('插入数据失败');
// })

module.exports={
    User:User
}