const express=require('express')
const bodyparse=require('body-parser');
//创建服务器
const app=express();
//拦截所有的请求
app.use(bodyparse.urlencoded({extends:false}));
app.post('/add',(req,res)=>{
    res.send(req.body);
})
app.listen(3000)
console.log('服务器创建成功');
