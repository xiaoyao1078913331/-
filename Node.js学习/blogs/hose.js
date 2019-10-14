 // 导入第三方 密码加密模块 bcrypt
const bcrypt = require("bcrypt");

async function fun() {
    const salt = await bcrypt.genSalt(10);
    const result = await bcrypt.hash("123456", salt);
    console.log(salt);
    console.log(result);
};
fun();

// genSalt() 接收一个数组作为参数
// 数值越大 生成随机字符串的复杂度越高
// 数值越小 生成随机字符串的复杂度越低
// 默认值 10
// 返回值是一个随机字符串

// hash() 方法 对密码进行加密 跟有两个参数
// 第一个参数 密码的原文
// 第二个参数 生成的随机字符串
// 返回值是加密后的密码