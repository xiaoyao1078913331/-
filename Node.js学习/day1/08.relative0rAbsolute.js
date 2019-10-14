const fs=require('fs');
const path=require('path');
console.log(__dirname); //获取文件绝对路径

fs.readFile(path.join(__dirname,'../demo1.js'),'utf8',(err,doc) =>{
    console.log(err);
    console.log(doc);
    console.log(path.join(__dirname,'./03.module-a.js'));
});

