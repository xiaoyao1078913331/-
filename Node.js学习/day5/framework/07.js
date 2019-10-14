const express=require('express')
//创建服务器
const app=express();
//创建路由对象
const home=express.Router();
//将路由对象和请求路径进行匹配
app.use('/home',home)
//创建二级路由
home.get('/index',(req,res)=>{
    res.send('欢迎来到博客首页');
})
home.get('/list',(req,res)=>{
    res.send('欢迎来到列表页面')
})

app.listen(3000);
console.log('服务器创建成功');
