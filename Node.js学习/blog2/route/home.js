const express=require('express')
const home=express.Router();
home.get('/',(req,res)=>{
    res.send('welcome to 博客index界面')
})
module.exports=home;