//引入express框架
const express=require('express');
//创建网站服务器
const app=express();
app.get('/index',(req,res,next)=>{
   req.name='肖遥';
   next();
})
app.get('/index',(req,res)=>{
   res.send(req.name);
})
app.listen(3000);
console.log('服务器开启成功');


