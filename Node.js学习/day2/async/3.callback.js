function method(callback){
    setTimeout(() => {
        callback({
            mst:'hello world',
        });
    }, 2000);
}
method(data=>{
    console.log(data);
    
});