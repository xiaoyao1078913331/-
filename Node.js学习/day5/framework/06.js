//引入express框架
const express=require('express');

const fs=require('fs')
const promisify=require('util').promisify;
const readFile=promisify(fs.readFile);
//创建网站服务器
const app=express();

app.get('/index',async(req,res,next)=>{
    try {
        await readFile('./aaa.js')
    } catch (error) {
        next(error)
    }
    
})

app.listen(3000);
console.log('服务器开启成功');


