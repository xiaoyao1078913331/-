//引入express框架
const express=require('express');

const fs=require('fs')
//创建网站服务器
const app=express();

app.get('/index',(req,res,next)=>{
    fs.readFile('./01.js','utf8',(err,data)=>{
        if(err!=null){
            
            next(err);
        }else{
            res.send(data)
        }
    })
})

// app.get('/index',(req,res)=>{
//    throw  new Error('程序发生了未知错误');
// })

// 错误处理中间件
// app.use((err,req,res,next)=>{
//     res.status(500).send(err.message)
// })

app.listen(3000);
console.log('服务器开启成功');


