// const fs=require('fs');
// let promise=new Promise((resolve,reject)=>{
//     fs.readFile('./1.txt','utf8',(err,result)=>{
//         if(err!=null){
//             reject(err);
//         }else{
//             resolve(result);
//         }

//     })
// })
// promise.then((result)=>{
//     console.log(result);
// })
// .catch((err)=>{
//     console.log(err);
    
// })

const fs=require('fs');
let promise=new Promise((resolve,reject)=>{
    fs.readFile('./1.txt','utf8',(err,result)=>{
        if(err!=null){
            reject(err)
        }else{
            resolve(reject)
        }
    })
})
promise.then((result1)=>{
    console.log(result1);
})
.catch((result2)=>{
    console.log(result2);
    
})