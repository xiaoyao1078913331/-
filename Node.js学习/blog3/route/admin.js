const express=require('express');
//创建路由
const admin=express.Router();

admin.get('/login',(req,res)=>{
    res.send('欢迎来到博客登录页面')
})



module.exports=admin;