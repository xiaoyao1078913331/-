const express=require('express');
//创建路由
const home=express.Router();

home.get('/user',(req,res)=>{
    res.send('欢迎来到博客User页面')
})

module.exports=home;