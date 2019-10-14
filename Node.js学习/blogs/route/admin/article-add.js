//导入formidable模块
const formidable = require("formidable");
//导入path模块
const path = require('path')
//导入文章集合构造函数
const {
    Article
} = require('../../model/article')

module.exports = (req, res) => {
    // 1. 创建表单解析对象
    const form = new formidable.IncomingForm();
    // 2. 配置上传文件路径
    form.uploadDir = path.join(__dirname, "../", "../", "public", "uploads");
    // 3. 保留上传文件的后缀  默认是不保留的
    form.keepExtensions = true;
    // 4. 解析列表
    form.parse(req, async (err, fields, files) => {
        // 1. err是错误对象，如果表单解析失败 那么err里面存的就是错误信息  反之 err里面储存的是null
        // 2. fields 是对象类型  保存普通表单数据
        // 3. files 是对象类型  保存了和上传文件相关的数据
        // res.send(files.cover.path.split("public")[1]);
        // console.log(Article);
        await Article.create({
            title: fields.title,
            author: fields.author,
            publishDate: fields.publishDate,
            cover: files.cover.path.split("public")[1],
            content: fields.content,
        });
        //重定向回文章列表页面
        res.redirect("/admin/article");
    })
    // res.send('ok')
}