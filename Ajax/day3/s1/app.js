// 引入express框架
const express = require('express');
// 路径处理模块
const path = require('path');
const proxyServer = require('http-proxy-middleware');
// 接收post请求参数
const formidable = require('formidable');
// 向其他服务器端请求数据的模块
const request = require('request');
// 创建web服务器
const app = express();

// 静态资源访问服务功能
app.use(express.static(path.join(__dirname, 'public')));

app.use(proxyServer({
	target: 'http://localhost:3001',
	pathRewrite: {
		'^/api/': '/'
	}
}));

app.get('/server', (req, res) => {
	request('http://localhost:3001/cross', (err, response, body) => {
		res.send(body);
	})
});

// app.post('/login', (req, res) => {
// 	// 创建表单解析对象
// 	var form = formidable.IncomingForm();
// 	// 解析表单
// 	form.parse(req, (err, fields, files) => {
// 		// 接收客户端传递过来的用户名和密码
// 		const { username, password } = fields;
// 		request({
// 			url: 'http://localhost:3001/login',
// 			method: 'post',
// 			formData: fields
// 		}, (err, response, body) => {
// 			res.header('set-cookie', response.headers["set-cookie"]);
// 			res.send(body);
// 		});
// 	})
// });

// app.get('/checkLogin', (req, res) => {
// 	request({
// 		url: 'http://localhost:3001/checkLogin',
// 		method: 'get',
// 		// headers: req.headers
// 		headers: {
// 			'Cookie': req.headers.cookie
// 		}
// 	}, (err, response, body) => {
// 		res.send(body);
// 	});

// });

// 监听端口
app.listen(3000);
// 控制台提示输出
console.log('服务器启动成功');