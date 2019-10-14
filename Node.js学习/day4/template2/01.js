//引入art-template模板
const template=require('art-template')
//引入path
const path=require('path')
// 导入dateformat模块
const dateformat=require('dateformat')

template.defaults.imports.dateformate=dateformat;

const views=path.join(__dirname,'views','01.art')
const html= template(views,{
    user:[{
        name:'肖遥',
        age:17,
        content:'<h1>我是标题</h1>',
        time:new Date()
    },{
        name:'唐zz',
        age:20,
        content:'<h1>我是标题22</h1>',
        time:new Date()
    }]
})
console.log(html);
