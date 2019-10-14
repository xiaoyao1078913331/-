//导入mongoose模块
const express = require('express');

//创建博客展示页面路由
const admin = express.Router();

//渲染登页面路由
admin.get("/login", require("./admin/Rendering-Page"));

//实现登录功能路由
admin.post("/login", require("./admin/login"))

//创建用户列表路由
admin.get("/user", require("./admin/userPage"))

//实现退出登录功能路由
admin.get("/logout", require("./admin/logout"))

//实现用户添加功能
// 1. 创建用户编辑路由
admin.get("/user-edit", require("./admin/user-edit"))
// 2. 创建实现用户添加功能路由
admin.post("/user-edit", require("./admin/user-edit-fn"))

// 实现用户修改功能路由
admin.post("/user-modify", require("./admin/user-modify"))

// 实现用户删除功能路由
admin.get('/delete', require('./admin/user.delete'))

//文章列表页面路由
admin.get('/article', require('./admin/article'))
//文章编辑页面路由
admin.get('/article-edit', require("./admin/article-edit"))
// 实现文章发布功能的路由
admin.post('/article-add',require('./admin/article-add'))
module.exports = admin;