const express = require('express');
//引入user模块
const {
    User
} = require('../model/user');
//创建路由对象
const admin = express.Router();

admin.get('/login', (req, res) => {
    res.render('admin/login');
});

admin.post('/login', async (req, res) => {
    let {
        email,
        password
    } = req.body;
    if (email.trim().length == 0 || password.trim().length == 0) {
        res.status(404).render('admin/error', {
            msg: '用户名或者密码错误'
        })
    }

    const user = await User.findOne({
        email
    });
    console.log(user);
    
    if (user && user.password == password) {
        //在session中保存用户的名称
        req.session.name = user.name;
        //将用户信息保存到locals对象中，
        req.app.locals.username = user //user是数据库查询出来的数据
        //重定向页面
        res.redirect('/admin/user')
    } else {
        res.render('admin/error');
    }




});


admin.get('/error', (req, res) => {
    res.render('admin/error')
})

admin.get('/user', (req, res) => {
    res.render('admin/user', {
        msg: req.session.name
    })
});

//实现退出功能
admin.get('/loginout', (req, res) => {
    //删除session
    req.session.destroy(() => {
        //删除cookie
        res.clearCookie('connect.sid')
        //重定向到登陆页面
        res.redirect('/admin/login');
    })
});


admin.get('/user-edit', (req, res) => {
    res.render('admin/user-edit')
});

admin.post('/user-edit',(req,res)=>{
    res.render('admin/user')
})

admin.get('/article', (req, res) => {
    res.render('admin/article')
});

admin.get('/article-edit', (req, res) => {
    res.render('admin/article-edit')
});
module.exports = admin;