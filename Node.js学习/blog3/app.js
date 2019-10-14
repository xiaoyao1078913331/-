const express=require('express');
//引用路径
const path=require('path');

const app=express()
//引用静态资源
app.use(express.static(path.join(__dirname,'public')))

const admin=require('./route/admin')
const home=require('./route/home')

app.use('/admin',admin)
app.use('/home',home);
app.listen(80)