// express 框架导入
const express = require('express');
// 导入path 模块
const path = require('path');
//导入 body-parser 模块
const bodyParser = require("body-parser");
// 导入art-template模块
const template = require("art-template")
// 导入dateformat模块
const dateFormat = require("dateformat")
// 导入session
const session = require("express-session");
//导入morgan模块
const morgan=require('morgan')
// 创建服务器
const app = express();

// 静态资源托管
app.use(express.static(path.join(__dirname, 'public')))

//获取系统环境变量  返回值是对象
console.log(process.env.NODE_ENV);


// if(process.env.NODE_ENV=='production'){
//     //当前是开发环境
//     console.log('当前是开发环境');
//     // 在开发环境中将客户发送到服务器的请求信息打印到控制台
//     app.use(morgan('dev'))
    
// }else{
//     //当前是生产环境
//     console.log('当前是生产环境');
    
// }
  
//数据库连接
require('./model/connect');
require("./model/user");

// 模板的配置 模板代码
app.set("views", path.join(__dirname, "views"))
app.set('view engine', "art");
app.engine("art", require("express-art-template"))

// 向模块内部导入dateformat变量
template.defaults.imports.dateFormat = dateFormat;

// 处理post请求参数 模板代码
app.use(bodyParser.urlencoded({
    extended: false
}))

//配置session
app.use(session({
    secret: "secret key",
    saveUninitialized: false,
    cookie: {
        maxAge: 24 * 60 * 60 * 1000
    }
}))

//登录拦截功能
app.use("/admin", require("./middleware/logionGuard"))

//引入路由模块
const home = require('./route/home');
const admin = require('./route/admin');
//设置路由
app.use("/home", home);
app.use("/admin", admin);


// 错误处理中间件
app.use((err, req, res, next) => {
    // 将字符串对象转换为对象类型
    // JSON.parse()
    const result = JSON.parse(err);
    let params = [];
    for (let attr in result) {
        if (attr != 'path') {
            params.push(attr + '=' + result[attr]);
        }
    }
    res.redirect(`${result.path}?${params.join('&')}`);
})

//监听端口
app.listen(80);
console.log("浏览器启用成功！");