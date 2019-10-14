//引入集合数据
const {Article}=require('../../model/article')

module.exports=async (req,res)=>{
    const id=req.query.id;

    const result=await Article.findOne({_id:id}).populate('author');

    // res.send(result)
    res.render('home/article',{
        result:result
    })
}