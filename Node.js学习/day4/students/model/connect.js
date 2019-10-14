//引入mongoose模块
const mongodb=require('mongoose');
mongodb.connect('mongodb://localhost/playground',{ useUnifiedTopology: true } )
.then(()=>{
    console.log('数据库链接成功');
})
.catch(()=>{
    console.log('数据库连接失败');
})