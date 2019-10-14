const fs=require('fs');
//改造现有异步函数api，让其返回promise对象 从而支持异步函数语法
const promisify=require('util').promisify;
//调用这个方法，把你想要改造的API放入这里面
const readFile=promisify(fs.readFile);

async function fn1(){
   let r1=await readFile('./1.txt','utf8');
   let r2=await readFile('./2.txt','utf8');
   let r3=await readFile('./3.txt','utf8');
   console.log(r1);
   console.log(r2);
   console.log(r3);
}
fn1();