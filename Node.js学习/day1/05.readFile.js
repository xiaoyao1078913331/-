//1.通过模块的名字fs对模块进行引用
const fs=require('fs');
//2.通过模块内部的readFile读取文件内容
fs.readFile('./03.module-a.js','utf8',(err,doc) =>{
    //如果文件读取出错，err是一个对象，包含错误信息
    //如果文件读取正确err是个null
    if(err==null){
        
        console.log(doc); //doc是读到的内容
    }
})

