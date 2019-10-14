$(function () {
    //当我们点击了小li 此时不需要执行，页面滚动时间里面的li的背景选择 添加current
    var flag=true; //节流阀 
    // 1.显示隐藏电梯导航
    var toolTop = $('.recommend').offset().top;
    tooggleTool();

    function tooggleTool() {
        if ($(document).scrollTop() >= toolTop) {
            $('.fixedtool').fadeIn();
        } else {
            $('.fixedtool').fadeOut();
        }
    }

    $(window).scroll(function () {
       
        tooggleTool();
        // 3.页面滚动到某个内容区域，左侧电梯导航栏小li相应添加和删除current类名
        if(flag)(
            $('.floor .w').each(function(i,ele){
                if($(document).scrollTop()>=$(ele).offset().top){
                    console.log(i);
                    $('.fixedtool li').eq(i).addClass('current').siblings().removeClass();
                }
            })
        )

    });
    
    // 2.点击电梯导航页面可以滚动到相应内容区域
    $('.fixedtool li').click(function () {
        flag=false;
        var index = $(this).index();
        // 选取对应索引号的内容区域的盒子  计算他的.offset().top
        var current = $('.floor .w').eq(index).offset().top;
        //页面动画滚动效果
        $('body,html').stop().animate({
            scrollTop: current
        },function(){
            flag=true;
        });
        //点击之后让当前li添加current类名，姐妹移除current类名
        $(this).addClass('current').siblings().removeClass();
    });


})