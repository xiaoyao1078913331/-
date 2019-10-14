//引入用户集合构造函数
const { User } = require("../../model/user");
module.exports = async (req, res) => {
    //获取地址栏中的id参数
    const {
        message,
        id
    } = req.query;

    //如果当前传递了id参数
    if (id) {
        //修改操作  需要获取到用户的构造函数
        let user = await User.findOne({
            _id: id
        });
        res.render("admin/user-edit", {
            message: message,
            user: user,
            link: "/admin/user-modify?id=" + id,
            button: "修改"
        })
    } else {
        //添加操作
        res.render("admin/user-edit", {
            message: message,
            link: "/admin/user-edit",
            button: "添加"
        })
    }
}