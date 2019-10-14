const {
    User
} = require('../../model/user')
module.exports = async (req, res) => {
    //获取将要删除的id
    // res.send(req.query.id);
    await User.findOneAndDelete({
        _id: req.query.id
    });

    //将页面重定向会列表页面
    res.redirect("/admin/user");
}

// 2.5用户信息删除
// 1.在确认删除框中添加隐藏域用以存储要删除用户的ID值
// 2.为删除按钮添自定义属性用以存储要删除用户的ID值
// 3.为删除按钮添加点击事件,在点击事件处理函数中获取自定义属性中存储的ID值并将ID值存储在表单的隐藏域中
// 4.为删除表单添加提交地址以及提交方式
// 5.在服务器端建立删除功能路由
// 6.接收客户端传递过来的id参数
// 7.根据id删除用户