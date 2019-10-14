window.addEventListener('load', function() {
   var arrow_l=document.querySelector('.arrow-l');
   var arrow_r=document.querySelector('.arrow-r');
   var focus=document.querySelector('.focus');

   focus.addEventListener('mouseenter',function(){
        arrow_l.style.display='block';
        arrow_r.style.display='block';
    })
    focus.addEventListener('mouseleave',function(){
        arrow_l.style.display='none';
        arrow_r.style.display='none';
    })
    // 根据图片数量动态创建ol
    var ul=focus.querySelector('ul');
    var ol=document.querySelector('.circle');
    var focusImg=ul.children[0].offsetWidth;
    // console.log(focusImg);
     for(var i=0;i<ul.children.length;i++){
        //  给所有li添加一个索引index
       
        var li=document.createElement('li');
        li.setAttribute('index',i);
        ol.appendChild(li);
        //排他思想
       li.addEventListener('click',function(){
           for(var i=0;i<ol.children.length;i++){
               ol.children[i].className='';
           }
           this.className='current';
           var index=this.getAttribute('index');
           
           //点击每个ol切换图片
           //通过索引号*ul的宽度
           animate(ul,-index*focusImg);
       })
     }
    //  把第一个ol设置高亮
     ol.children[0].className='current';
    //  6.点击右侧按钮进行下一张图片
    
})