//引用express框架
const express=require('express');
//引入path 处理路径
const path=require('path');
//引入body-parse
const bodyparser=require('body-parser');
//引入session模块
const session=require('express-session')
const app=express();

const admin=require('./route/admin');
const home=require('./route/home')

require('./model/connect.js')
require('./model/user.js')

//配置静态资源访问文件
app.use(express.static(path.join(__dirname,'public')));
//配置body-parser模块
app.use(bodyparser.urlencoded({extended:false}))
//配置session
app.use(session({secret:'secret key'}))

//使用模板引擎
//告诉express框架模板引擎所在的位置
app.set('views',path.join(__dirname,'views'));
//告诉express框架的默认后缀名
app.set('view engine','art');
//渲染后缀名为art模板使用哪个模板引擎   
app.engine('art',require('express-art-template'))


//请求拦截
app.use('/admin',(req,res,next)=>{
    //除了没有login以外都需要拦截
    //判断用户是否已经登录过，通过res.session.name
    if(req.url!='/login'&&!req.session.name){
        res.redirect('/admin/login');
    }else{
        next();
    }
})


//为路由匹配路径
app.use('/admin',admin);
app.use('/home',home)

app.listen(80);
console.log('服务器创建成功');
