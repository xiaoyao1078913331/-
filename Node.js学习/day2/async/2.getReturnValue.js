function method(){
    setTimeout(() => {
        return {
            mas:'hello node.js'
        }
       
    }, 2000);
}
const msg=method();
console.log(msg);

