//1.引用系统默认模块
const http=require('http');
//2.创建服务器
const app=http.createServer();
//注册监听的事件，
app.on('request',(req,res)=>{
    res.writeHead(200,{
        'content-type':'text/html;charset=utf8'
    });
    // console.log(res.writeHead());
    
    if(req.url=='/index'){

    }
    res.end('<h1>你是某马的学员</h1>')
})
app.listen(3000);
