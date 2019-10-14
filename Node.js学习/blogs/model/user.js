const mongoose = require('mongoose');
// 导入第三方 密码加密模块 bcrypt
const bcrypt = require("bcrypt");
//导入第三方模块 joi
const Joi = require("joi")
//创建用户集合规则
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 20
    },
    email: {
        type: String,
        //保证邮箱地址在插入数据库时不重复
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
    },
    //启用状态 0
    //禁用状态 1
    state: {
        type: Number,
        default: 0,
    }
});

//创建集合
const User = mongoose.model("User", userSchema);

async function createUser() {
    const salt = await bcrypt.genSalt(10);
    const pass = await bcrypt.hash("123456", salt)
    const user = await User.create({
        username: "zhangsan",
        email: "zhangsan@123.cn",
        password: pass,
        role: "admin",
        state: 0
    }).then(() => {
        console.log("用户创建成功！")
    }).catch(() => {
        console.log("用户创建失败！")
    })
}
// createUser();

//验证用户信息
const validateUser = user => {
    // 定义对象的验证规则
    const setting = {
        username: Joi.string().min(2).max(12).required().error(new Error("用户名不符合要求")),
        email: Joi.string().email().required().error(new Error("邮箱地址不符合要求")),
        password: Joi.string().regex(/^[a-zA-Z0-9_-]{6,16}$/).required().error(new Error("密码格式错误")),
        role: Joi.string().valid("normal", "admin").required().error(new Error("角色非法")),
        state: Joi.number().valid(0, 1).required().error(new Error("状态不符合"))
    };
    //实施验证
    return Joi.validate(user, setting);
}
module.exports = {
    User,
    validateUser
}