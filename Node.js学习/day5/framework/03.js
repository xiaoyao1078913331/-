//引入express框架
const express=require('express');
//创建网站服务器
const app=express();
app.use((req,res,next)=>{
    console.log('请求走了app.user中间件');
    next();
})
app.use('/index',(req,res)=>{
    console.log('请求走了app.index中间键');
    res.send();
})

app.get('/list',(req,res)=>{
    res.send('list')
})

app.get((req,res)=>{
    console.log();
})
app.listen(3000);
console.log('服务器开启成功');


