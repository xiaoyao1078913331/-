global.console.log('hello world');

for(var i=0;i<5;i++){
    global.console.log('global是node.js中的global');
    
}

setInterval(()=>{
    global.console.log('我是定时器')
},3000)