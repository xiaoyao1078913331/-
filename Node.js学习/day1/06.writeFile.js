const fs = require('fs');
const content = '<h3>我正在使用fs.writerFile写入文件内容dddd</h3>';
fs.writeFile('./06err.html', content, (err) => {
    //代表当前是写入失败的
    if (err != null) {
        console.log(err);
        return;
    }
    console.log('文件写入成功');
})
