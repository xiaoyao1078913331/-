const express=require('express');
const path=require('path')
const app=express()

app.use(express.static(path.join(__dirname,'public')))

app.get('/index',(req,res)=>{
    res.send('ok')
})
app.listen(3000)
console.log('服务器开启成功');
