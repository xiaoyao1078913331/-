const express=require('express')
const path=require('path');
const app=express()

// 1.告诉express框架使用什么模板引擎渲染什么后缀的模板文件
    // 1模板后缀
    // 2.使用的模板引擎
app.engine('art',require('express-art-template'))
// 2.告诉express框架模板存放的位置是什么
app.set('views',path.join(__dirname,'views'))
// 3.告诉express框架模板的默认后缀是什么
app.set('view engine','art');

app.locals.user=[{
    name:'zhangsan',
    age:20
},{
    name:'肖遥',
    age:22
}]

app.get('/index',(req,res)=>{
    // 1.拼接模板路径
    // 2.拼接模板后缀
    // 3.哪一个模板和哪一个数据进行拼接
    // 4.将拼接结果响应给了客户端
    res.render('index',{
        msg:'message'
    })

app.get('/list',(req,res)=>{
    res.render('list',{
        msg:'list message'
    })
})
})
app.listen(3000);