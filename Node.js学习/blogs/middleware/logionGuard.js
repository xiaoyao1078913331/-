module.exports = (req, res, next) => {
    //判断用户是否有登录
    //如果没有登录那么就重定向到登录页面
    //如果用户登录了就放行
    if (req.url != "/login" && !req.session.username) {
        res.redirect("/admin/login")
    } else {
        if(req.session.role=='normal'){
           return res.redirect('/home/index')
        }
        next()
    }
};