//1. 引入joi模块
const Joi = require("joi");
//2. 定义对象的验证规则
const setting = {
    username: Joi.string().min(2).max(5).required().error(new Error("username属性未定义")),
    birth: Joi.number().min(1900).max(3000).required().error(new Error("birth属性未定义"))
}

async function fun() {
    try {
        //3. 实施验证
        await Joi.validate({
            username: "ab",
            birth: 2000
        }, setting).then(() => {
            console.log("信息正确！")
        }).catch(() => {
            console.log("信息错误！")
        })
    } catch (ex) {
        console.log(ex.message);
        return;
    }
    console.log("验证通过！");


}
fun();