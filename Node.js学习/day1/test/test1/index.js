const fs=require('fs');
const path=require('path')
console.log(__dirname);

fs.readFile(path.join(__dirname,'./test01.txt'),'utf8',(err,doc)=>{
    if(err==null){
        fs.writeFile(path.join(__dirname,'./index.html'),doc,(err)=>{
            if(err!=null){
               consoe.log(err);
               return
            }
            console.log('写入成功');
        })
    }
    return false
    
})
