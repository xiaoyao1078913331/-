// 引入joi模块
const Joi = require("joi");
//引入用户集合
const {
    User,
    validateUser
} = require("../../model/user");

//引入密码加密模块
const bcrypt = require("bcrypt");

module.exports = async (req, res, next) => {
    //定义对象的验证规则

    try {
        await validateUser(req.body)
    } catch (e) {
        //没有通过验证
        //重定向用户添加页面
        // return res.redirect(`/admin/user-edit?message=${e.message}`)
        // JSON.stringify()
        return next(JSON.stringify({
            path: "/admin/user-edit",
            message: e.message
        }));
    };

    //根据邮箱地址查询用户是否存在
    let user = await User.findOne({
        email: req.body.email
    })

    //判断邮箱地址是否被占用
    //如果被占用设置提示信息
    if (user) {
        //重定向用户添加页面
        return next(JSON.stringify({
            path: "/admin/user-edit",
            message: "邮箱地址已被占用！"
        }))
    };

    //给密码进行加密
    //1. 生成一个随机数
    //2. 对密码进行加密
    //3. 替换密码
    //4. 把信息存入数据库中create
    //5. 最后重定向到列表页面
    const lits = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(req.body.password, lits);
    req.body.password = password;
    // res.send(req.body);
    await User.create(req.body);
    res.redirect("/admin/user");
}