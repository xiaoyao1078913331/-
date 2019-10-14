 // 简单动画函数封装obj目标对象  target目标位置
 function animate(obj, target,callback) {
    // 当我们不断地点击该按钮，这个元素的速度会越来越快 因为开启了多个定时器
    // 解决方案
    // 在调用动画封装函数之后先清除定时器，那么当前就只有一个定时器在执行
    clearInterval(obj.time);

    obj.time = setInterval(function () {

        var step = (target - obj.offsetLeft) / 10;
         step =step>0? Math.ceil(step): Math.floor(step);
        if (obj.offsetLeft == target) {
            clearInterval(obj.time);
            // 回调函数写在定时器里面
            // if(callback){
            //     callback();
            // }
            callback && callback();
        }
        obj.style.left = obj.offsetLeft + step + 'px';
    }, 15)
}