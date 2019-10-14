//引入用户集合构造函数
const {
    User
} = require("../../model/user");
//引入密码加密模块
const bcrypt = require("bcrypt")
module.exports = async (req, res, next) => {
    //接收客户端传递过来的请求参数
    const {
        username,
        email,
        role,
        state,
        password
    } = req.body;
    //即将要修改的用户id
    const id = req.query.id;
    //根据id查询用户信息
    const user = await User.findOne({
        _id: id
    })
    //进行密码比对
    let isValid = await bcrypt.compare(password, user.password);
    // 如果isValid为真  那么密码比对成功
    if (isValid) {
        // res.send("密码比对成功")
        //将用户信息更新到数据库中
        await User.updateOne({
            _id: id
        }, {
            username: username,
            email: email,
            role: role,
            state: state
        });
        //将页面重定到用户列表页面
        res.redirect("/admin/user");
    } else {
        //反之 密码比对失败  执行错误处理中间件，并且把错误信息传递过去
        let obj = {
            path: "/admin/user-edit",
            message: "密码比对失败，不能进行用户信息的修改",
            id: id
        };
        next(JSON.stringify(obj));
    }
}

// 2.4用户信息修改
// 1.将要修改的用户ID传递到服务器端
// 2.建立用户信息修改功能对应的路由
// 3.接收客户端表单传递过来的请求参数
// 4.根据id查询用户信息,并将客户端传递过来的密码和数据库中的密码进行比对
// 5.如果比对失败,对客户端做出响应
// 6.如果密码对比成功，将用户信息更新到数据库中