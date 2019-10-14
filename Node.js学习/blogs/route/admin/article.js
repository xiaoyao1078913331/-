//引入文章集合的构造函数
const {
    Article
} = require("../../model/article");
// 导入mongoose-sex-page模块
const pagination = require('mongoose-sex-page')

module.exports = async (req, res) => {
    //接收客户端传递过来的页码
    const page = req.query.page;
    // 标识  表示当前访问的是文章管理页面
    req.app.locals.currentLink = 'article';
    //查询所有文章数据
    let articles = await pagination(Article).find().page(page).size(3).display(5).populate("author").exec();
    // res.send(articles);
    //把数据渲染的页面中
    res.render("admin/article.art", {
        articles: articles
    })
}