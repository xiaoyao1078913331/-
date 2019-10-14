const {Comment}=require('../../model/comment')
module.exports= async(req,res)=>{


    let {content,uid,cid}=req.body;
    await Comment.create({
        content:content,
        uid:uid,
        cid:cid,
        time:new Date()  
    }).then(()=>{
        console.log('插入成功');
        
    })

    res.redirect('/home/article?id='+uid)
}   