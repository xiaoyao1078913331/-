const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost1/test', { useUnifiedTopology: true })
.then(()=>console.log('数据库连接成功'))
.catch((err)=>console.log(err+'连接失败'));
