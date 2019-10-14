const mongoose=require('mongoose')
const commentSchema=mongoose.Schema({
    cid:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Article'
    },
    uid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    time:{
        type:Date,
    },
    content:{
        type:String
    }
})

const Comment= mongoose.model('comment',commentSchema);

module.exports={
    Comment
}