// 引入数据库
const mongoose=require('mongoose');
//连接数据库
mongoose.connect('mongodb://localhost/blog2',{ useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>{
    console.log('连接数据库成功');
})
.catch(()=>{
    console.log('连接数据库失败');
})