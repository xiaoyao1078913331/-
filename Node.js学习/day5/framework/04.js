//引入express框架
const express=require('express');
//创建网站服务器
const app=express();

//网站公告
// app.use((req,res,next)=>{
//     res.send('网站在维护......')
// })

app.use('/admin',(req,res,next)=>{
    let islog=false;
    if(islog){
        next();
    }else{
        res.send('你还没有登录请登录！')
    }
})
app.get('/admin',(req,res)=>{
    res.send('恭喜你，登录成功')
})

app.use((req,res,next)=>{
    
    res.status(404).send('当前访问的页面是不存在的')
})
app.listen(3000);
console.log('服务器开启成功');


