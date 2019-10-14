//引入http模块
const http=require('http');
//引入路由模块
const getRouter=require('router')
//引入模板引擎
const template=require('art-template');
//引入模板
const querystring=require('querystring');
//引入path
const path=require('path');

//引入静态资源访问模块
const serveStatic=require('serve-static')
//获取路由对象
const router=getRouter();

const Student=require('./model/user');
// 实现静态资源服务

const serve=serveStatic(path.join(__dirname,'public'))
//配置模板的根目录
template.defaults.root=path.join(__dirname,'views');

// 引入处理日期的第三方模块
const dateformat = require('dateformat');
// 处理日期格式的方法
template.defaults.imports.dateformat = dateformat;

router.get('/add',(req,res)=>{
   let html =template('index.art',{})
    res.end(html)
})
//学生档案信息列表页面
router.get('/list', async(req,res)=>{
  let students=await Student.find();
  console.log(students);
  
   let html=template('list.art',{
    student:students   //模板跟属性绑定 
   })
    res.end(html);
})

//实现学生信息添加功能路由
router.post('/add',(req,res)=>{
    //接受post请求参数
    let forDate='';
    req.on('data',(items)=>{
        forDate+=items;
    })
    req.on('end',async ()=>{  
        console.log(querystring.parse(forDate));
       await Student.create(querystring.parse(forDate));
        res.writeHead(301,{
            Location:'/list'
        })
       res.end();
    })
})
require('./model/connect')

// 创建服务器
const app=http.createServer();
app.on('request',(req,res)=>{
    router(req,res,()=>{})
    serve(req,res,()=>{});
});
app.listen(80);
console.log('服务器创建成功');
