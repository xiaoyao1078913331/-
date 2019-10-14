const express = require('express')
//创建服务器
const app = express();

const home=require('./route/home');
const admin=require('./route/admin');

app.use('/home',home);
app.use('/admin',admin);

app.listen(3000)
console.log('服务器创建成功');