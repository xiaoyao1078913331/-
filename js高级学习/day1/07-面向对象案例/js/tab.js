var that;
class Tab{
  
    constructor(id){
      that=this;
      this.main=document.querySelector(id);
      this.add=this.main.querySelector('.tabadd');
      //li的父元素
      this.ul=this.main.querySelector('.fisrstnav ul:first-child');
     //   section父元素
     this.fsection=this.main.querySelector('.tabscon');
     
      this.init();
      console.log();
    }

    // 用来遍历元素给他们添加事件
    init(){
        this.updateNode();
        this.add.onclick=this.addTab;
        for(var i=0;i<this.lis.length;i++){
            this.lis[i].index=i;
            this.lis[i].onclick=this.toggleTab;  //不能用（）号
            this.remove[i].onclick=this.removeTab;
            this.span[i].ondblclick=this.editTab;
        }
    }
    
    

    //获取素有的小li和section
    updateNode(){
        this.lis=this.main.querySelectorAll('li');
        this.sections=this.main.querySelectorAll('section');
        //获取叉号
        this.remove=this.main.querySelectorAll('.icon-guanbi');
        //获取span
        this.span=this.main.querySelectorAll('.fisrstnav li span:first-child')
    }

    // 1.切换功能
    toggleTab(){
        that.clearClass();
        this.className='liactive';
        that.sections[this.index].className='conactive';
    }
    //清除所有li 跟section的默认
    clearClass(){
        for(var i=0;i<this.lis.length;i++){
            this.lis[i].className='';
            this.sections[i].className='';
        }
    }

    //2.添加功能
    addTab(){
        // alert(1);
        that.clearClass();
        var random=Math.random();
        var li='<li class="liactive"><span>测试</span><span class="iconfont icon-guanbi"></span></li>';
        var section='<section class="conactive">测试'+random+'</section>';
        that.ul.insertAdjacentHTML('beforeend',li);
        that.fsection.insertAdjacentHTML('beforeend',section);
        that.init();
    }

    // 3.删除功能
    removeTab(e){
        e.stopPropagation(); //阻止冒泡，防止触发li的切换点击事件
        var index=this.parentNode.index;  //拿到父亲的索引号
        console.log(index);
        
        that.lis[index].remove(); //remove()方法可以直接删除指定元素
        that.sections[index].remove();
        //删除之后再执行一次init()方法
        that.init();
        // 当我们删除的不是选中状态的时候原来的li不变
        if(document.querySelector('.liactive')) return;  //不会执行后面的代码
        //当我们删除了选定状态的li时候，让他的前一个li处于选定状态
        index--;
        that.lis[index] && that.lis[index].click();
    }

    // 4.修改功能
    editTab(){
        var str=this.innerHTML;
        //双击禁止选定文字
        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
        this.innerHTML='<input type="text">';
        var input=this.children[0];
        input.value=str;
        input.select();  //文本框里面的文字处于选定状态
        //当我们离开文本框把文本框里面的值给span
        input.onblur=function(){
            
        }
    }
}
new Tab('#tab');