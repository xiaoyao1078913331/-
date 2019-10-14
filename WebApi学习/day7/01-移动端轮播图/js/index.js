window.addEventListener('load', function () {
    // 1.获取元素
    var focus = document.querySelector('.focus');
    var ol = focus.children[1];
    //获取这个UL元素
    var ul = focus.children[0];

    var w = focus.offsetWidth;
    var index = 0;
    // 2.利用定时器自动轮播图片
    var timer = setInterval(function () {
        index++;
        var translateX = -index * w;
        ul.style.transition = 'all .5s';
        ul.style.transform = 'translateX(' + translateX + 'px)'
    }, 2000);

    //等着我们过度完成之后 再去判断  监听过度完成的事件 transitionend
    ul.addEventListener('transitionend', function () {
        if (index >= 3) {
            index = 0;
            ul.style.transition = 'none';
            var translatex = -index * w;
            ul.style.transform = 'translateX(' + translatex + 'px)';

        } else if (index < 0) { //如果索引是负数 把他的位置变成2
            index = 2;
            ul.style.transition = 'none';
            var translatex = -index * w;
            ul.style.transform = 'translateX(' + translateX + 'px)';
        }

        // 小圆点变化
        ol.querySelector('.current').classList.remove('current');
        ol.children[index].classList.add('current');
    });

    var startX = 0;
    var moveX = 0;
    var flag = false;  //如果用户手指移动过 我们再去判断否则不做判断效果
    
    ul.addEventListener('touchstart', function (e) {
        startX = e.targetTouches[0].pageX;
        clearInterval(timer);
    });
    ul.addEventListener('touchmove', function (e) {
        // 计算移动的距离
        moveX = e.targetTouches[0].pageX - startX;
        var translatex = -index * w + moveX;
        ul.style.transition = 'none';
        ul.style.transform = 'translateX(' + translatex + 'px)';
        flag = true;
        e.preventDefault(); //阻止滚动屏幕的行为
    });
    ul.addEventListener('touchend', function (e) {
        //1.如果移动距离大于50像素，我们就播放上一张后者下一张
        //2.moveX可能是正也可能是负数 所以用Math.abs();
        if (flag = true) {
            if (Math.abs(moveX) > 50) {
                //  右滑是上一张
                if (moveX > 0) {
                    index--;
                }
                // 左滑是下一张  
                else {
                    index++;
                }
                var translatex = -index * w;
                ul.style.transition = 'all .5s';
                ul.style.transform = 'translateX(' + translatex + 'px)';
            }
            //小于50像素 回弹
            else {
                var translatex = -index * w;
                ul.style.transition = 'all .5s';
                ul.style.transform = 'translateX(' + translatex + 'px)';
            }
        }

        //手指离开的时候就重新开启
        clearInterval(timer);
        timer = setInterval(function () {
            index++;
            var translateX = -index * w;
            ul.style.transition = 'all .5s';
            ul.style.transform = 'translateX(' + translateX + 'px)'
        }, 2000);

    });

    // 返回顶部模块制作
    var goBack=document.querySelector('.goBack');
    var nav=document.querySelector('nav');
    window.addEventListener('scroll',function(){
        if(this.window.pageYOffset>=nav.offsetLeft){
            goBack.style.display='block';
        }else{
            goBack.style.display='none';
        }
    });
    goBack.addEventListener('click',function(){
        window.scroll(0,0);
    })
})