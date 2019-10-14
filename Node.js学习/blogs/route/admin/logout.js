module.exports = (req, res) => {
    //删除session   
    req.session.destroy(function () {
        //删除cookie
        res.clearCookie("connect.sid");
          //清空locals里面的内容
          req.app.locals.userInfo = null;
        //重定向到登录页面
        res.redirect("/admin/login");
      
    })
}