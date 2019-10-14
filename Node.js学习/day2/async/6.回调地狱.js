const fs = require('fs');
fs.readFile('./1.txt', (err, result1) => {
    console.log(result1);
    fs.readFile('./2.txt', (err, result2) => {
        console.log(result2);
        fs.readFile('./3.txt', (err, result3) => {
            console.log(result3);
        })
    })
})