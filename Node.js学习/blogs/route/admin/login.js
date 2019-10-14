// 导入用户集合构造函数
const {
    User
} = require("../../model/user");
const bcrypt = require("bcrypt");
module.exports = async (req, res) => {
    // 获取请求参数 需要用到解构操作 把email 和 password 解构出来
    const {
        email,
        password
    } = req.body;
    // 判断用户是否有输入邮箱地址或者密码
    if (email.trim().length == 0 || password.trim().length == 0) {
        return res.status(400).render("admin/error", {
            mge: "邮箱地址或者密码错误！"
        });
    }

    let user = await User.findOne({
        email
    })
    //查询到了用户 那么就把客户端传递过来的密码和用户信息当中的密码进行比对
    const passw = await bcrypt.compare(password, user.password)
    // 当user存在的时候并且 用户输入的密码 === 用户集合的中密码
    if (user && passw) {
        //将用户名存储在对象中
        req.session.username = user.username;
        req.session.role=user.role;
        req.app.locals.userInfo = user;
        req.app.locals.username = user.username;
        if(user.role=='admin'){
              // res.send("登录成功！");
            //重定向到用户列表页面
            res.redirect("/admin/user")
        }else{
            res.redirect('/home/index')
        }
      
    } else {
        //没有查询到用户
        res.status(400).render("admin/error", {
            mge: "邮箱地址或者密码错误！"
        })
    }

}