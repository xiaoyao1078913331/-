window.addEventListener('load', function () {
    var focus_l = document.querySelector('.focus-l');
    var focus_r = document.querySelector('.focus-r');
    var focus = document.querySelector('.focus');
    var ol=document.querySelector('.circle');
    focus.addEventListener('mouseover', function () {
        focus_l.style.display = 'block';
        focus_r.style.display = 'block';
        clearInterval(timer);
        timer=null;  //清除定时器
    });
    focus.addEventListener('mouseout', function () {
        focus_l.style.display = 'none';
        focus_r.style.display = 'none';
        timer=setInterval(function(){
        focus_r.click();
    },2000)
    });
    //动态的创建小圆点
    var ul=focus.querySelector('ul');
    var imgLeft=ul.children[0].offsetWidth;
    console.log(imgLeft);
    
    for(var i=0;i<ul.children.length;i++){
        var li=document.createElement('li');
        li.setAttribute('index',i);
        ol.appendChild(li);
        //排他思想
        li.addEventListener('click',function(){
            var index=this.getAttribute('index');
            //把index索引号给num和circle 
            num=index;
            circle=index;
            
            for(var i=0;i<ol.children.length;i++){
               ol.children[i].className='none'
            }
            this.className='current';
            animate(ul,-index*imgLeft);
        })
    }
    // 设置第一个ol
    ol.children[0].className='current';
    var kelon=ul.children[0].cloneNode(true);
    //左侧点击按钮索引
    var num=0;
    ul.appendChild(kelon);
    var circle=0;
    // flag节流
    var flag=true;
    
    // 右边点击切换图片
    focus_r.addEventListener('click',function(){
         if(flag){
             flag=false;  //关闭节流阀
            if(num==ul.children.length-1){
                ul.style.left='0px';
                num=0;
            }num++;
            animate(ul,-num*imgLeft,function(){
                flag=true;
            });
            //让小圆圈跟右侧一起进行运动
            circle++;
            if(circle==ol.children.length){
                circle=0;
            }
           circleChange();
         }
    })

    // 左边点击切换图片
    focus_l.addEventListener('click',function(){
       if(flag){
           flag=false;
        if(num==0){
            num=ul.children.length-1;
            ul.style.left=-num*imgLeft+'px';  
        }
        num--;
        animate(ul,-num*imgLeft,function(){
            flag=true;
        });
        //让小圆圈跟右侧一起进行运动
        circle--;
        

        // 如果circle<0 说明第一张图片，则小圆圈要改为第四个小圆圈
        // if(circle<0){
        //     circle=ol.children.length-1;  //长度为3
        // }
        circle=circle<0?ol.children.length-1:circle;
        circleChange();
       }
    })

    function circleChange(){
        for(var i=0;i<ol.children.length;i++){
            ol.children[i].className='';
        }
        ol.children[circle].className='current';
    }

    // 10自动播放
    var timer=setInterval(function(){  
        focus_r.click();
    },2000)
})