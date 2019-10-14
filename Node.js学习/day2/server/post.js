//引用系统模块
const http = require('http');
//创建web服务器
const app = http.createServer();
//处理请求参数模块
const querystring = require('querystring');

//当客户端发送请求的时候
app.on('request', (req, res) => {
    //post是通过事件的方式接收的
    //data
    //end
    // 当请求参数传输的时候会触发data事件
    // 当参数传递完成的时候触发end事件
    let postXinxi = '';
    req.on('data', parmt => {
        //post方式的请求是把数据一节一节的传递过来的
        postXinxi+=parmt;
    })
    req.on('end',()=>{
        //只要触发了end函数，那么我们的数据就获取完毕了
       console.log(querystring.parse(postXinxi));
       let {username,password}=querystring.parse(postXinxi);
        
        
    });
    res.end('OK');
})
//监听3000端口
app.listen(3000);
console.log('网站服务器启动成功');