
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground', { useNewUrlParser: true})
	.then(() => console.log('数据库连接成功'))
	.catch(err => console.log(err, '数据库连接失败'));

const userSchema = new mongoose.Schema({
     hobbies:[String],
     name:String,
     age:String,
     sex:String,
     email:{
         type:String,
         required:true
     },
     enterDate:{
         type:Date,
         default:Date.now()
     }
});


const User= mongoose.model('student', userSchema);

async function fn(){
    //查询所有  返回的是一个数组对象
    // const result= await User.find()
    // console.log(result);

    // 条件查询
    // const result=await User.find({sex:'0'})
    // console.log(result);
    
    //范围查询
    // const result=await User.find({age: {$gt: 20, $lt: 40}})
    // console.log(result);
    
    // 查询字段
    // const result=await User.find().select('name -_id ');
    // console.log(result);

    //查询字段并排序
    // const result=await User.find().sort('-age');
    // console.log(result);
    

    // 分页查询
    // const result=await User.find().skip(2).limit(3);
    // console.log(result);
    
    // 删除
    // const result=await User.findOneAndDelete({name:'肖爸爸'})
    // console.log(result);
    
    //修改
    const result=await User.updateOne({name:'张哥'},{name:'肖爷爷'})
    console.log(result);
    

    // 插入数据
    // User.create({
    //     name:'肖爸爸',
    //     age:22,
    //     sex:'男',
    //     email:'www.baidu.com',
    //     hobbies:['跳远','滑翔']
    // })
    // .then(()=>{
    //     console.log('插入数据库成功');
        
    // })
    // .catch(()=>{
    //     console.log('插入数据库失败');
        
    // })

   
}
fn();

