//引入数据集合
const {Article} =require('../../model/article');
//引入分页模块
const pagenetion=require('mongoose-sex-page');
//引入template模块
const template=require('art-template');
//引入dateformat模块
const dateformat=require('dateformat');
//给引擎导入变量
template.defaults.imports.dateformat=dateformat;
module.exports=async (req,res)=>{
       const page=req.query.page||1;
        // 查询数据库的数据
       let result= await pagenetion(Article).page(page).size(4).display().find().populate('author').exec();
    //    res.send(result);
    //    return;
        res.render('home/default',{
            result:result
        })
    
}