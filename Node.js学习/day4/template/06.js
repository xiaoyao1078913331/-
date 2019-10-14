//导入模板引擎
const template=require('art-template');
const path=require('path');
const dateFormat=require('dateformat');


const views=path.join(__dirname,'views','06.art')

//导入模板变量  aaa是变量名字
template.defaults.imports.aaa=dateFormat;
const html=template(views,{
   time:new Date(),
 
})
console.log(html);
