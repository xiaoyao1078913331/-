// 引入mongoose第三方模块 用来操作数据库
const mongoose = require('mongoose');
// 数据库连接
mongoose.connect('mongodb://localhost/playground', {
        useNewUrlParser: true
    })
    // 连接成功
    .then(() => console.log('数据库连接成功'))
    // 连接失败
    .catch(err => console.log(err, '数据库连接失败'));

//创建集合规则    
const courseSchema = new mongoose.Schema({
    name: String,
    age:Number,
    email:String,
    password:String,
    hobbies:[String]
})

//使用规则创建集合
// 1.集合名称
// 2.集合规则
const User = mongoose.model('user', courseSchema); //courses
//查询用户中的所有集合
// User.find().then(result=>{
//     console.log(result);
    
// })

//通过下划线__id用来查找  返回的是一个数组
// User.find({_id:'5c09f1e5aeb04b22f8460965'}).then(result=>console.log(result))

//findOne()返回的是对象  
// User.findOne({password:'22222',name:'张哥'}).then(result=>console.log(result))


//查询用户集合当中年龄大于20小于50
// User.find({age:{$gt:20,$lt:50}}).then(result=>console.log(result))

//$in 是匹配包含  查询出爱好是足球的信息
// User.find({hobbies:{$in:['足球'],}}).then(result=>console.log(result))

//选择要查询的字段
// User.find().select('name email -_id').then(result=>console.log(result));

// 根据年龄进行升序排序
// User.find().sort('-age').then(result=>console.log(result));

//skip跳过多少条数据  limit限制查询数量
// User.find().skip(2).limit(2).then(result=>console.log(result));




