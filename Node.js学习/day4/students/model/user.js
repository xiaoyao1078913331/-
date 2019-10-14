//引入mongoose模块
const mongodb=require('mongoose');
const studentSchema=new mongodb.Schema({
    name:{
       type:String,
       required:true,
       minlength:2,
       maxlength:10
    },
    age:{
        type:String,
        min:18,
        max:25
    },
    sex:{
        type:String
    },
    email:String,
    hobbies:[String],
    collage:String,
    enterDate:{
        type:Date,
        default:Date.now
    }
})
const Student=mongodb.model('student',studentSchema);
module.exports=Student;
