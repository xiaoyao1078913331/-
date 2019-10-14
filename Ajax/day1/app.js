

//  app.all('*', function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "X-Requested-With");
//     res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
//     res.header("X-Powered-By", ' 3.2.1')
//         //这段仅仅为了方便返回json而已 
//     res.header("Content-Type", "application/json;charset=utf-8");
//     if(req.method == 'OPTIONS') {
//         //让options请求快速返回
//         res.sendStatus(200); 
//     } else { 
//         next(); 
//     }
// });




// 引入express框架
const express = require('express');
// 路径处理模块
const path = require('path');

const bodyParser = require('body-parser');

const fs = require('fs');
// 创建web服务器
const app = express();

app.use(bodyParser.json());
// app.use(bodyParser.urlencoded())

// 静态资源访问服务功能
app.use(express.static(path.join(__dirname, 'public')));

// 对应01html文件
app.get('/first', (req, res) => {
	res.send('Hello, Ajax');
});

// 对应02html文件
app.get('/responseData', (req, res) => {
	res.send({"name": "zs"});
});

// 对应03html文件
app.get('/get', (req, res) => {
	res.send(req.query);
});

// 对应04html文件
app.post('/post', (req, res) => {
	res.send(req.body);
});

// 对应05html文件
app.post('/json', (req, res) => {
	res.send(req.body);
});

// 对应06html文件
app.get('/readystate', (req, res) => {
	res.send('hello');
});

// 对应07html文件
app.get('/error', (req, res) => {
	//console.log(abc);
	res.status(400).send('not ok');
});

// 对应08html文件
app.get('/cache', (req, res) => {
	fs.readFile('./test.txt', (err, result) => {
		res.send(result);
	});
});

// 监听端口
app.listen(3000);
// 控制台提示输出
console.log('服务器启动成功');