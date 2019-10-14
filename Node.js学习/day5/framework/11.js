const express=require('express')
//创建服务器
const app=express();

app.get('/index/:id/:name/:age',(req,res)=>{
    console.log(req.params);
    res.send(req.params)
})
//监听端口
app.listen(3000)

