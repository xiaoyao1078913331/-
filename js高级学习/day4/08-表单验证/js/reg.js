window.onload=function(){
    var regtel=/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/
    var regqq = /^[1-9]\d{4,}$/; // 10000
    var regnc = /^[\u4e00-\u9fa5]{2,8}$/;
    var regmsg = /^\d{6}$/;
    var regpwd = /^[a-zA-Z0-9_-]{6,16}$/;
    var tel=document.querySelector('#tel'); //手机
    var qq=document.querySelector('#qq'); //
    var nc=document.querySelector('#nc'); //
    var msg=document.querySelector('#msg'); //
    var pwd=document.querySelector('#pwd'); //
    var surepwd=document.querySelector('#surepwd');
    regexp(tel,regtel);
    regexp(qq,regqq);
    regexp(nc,regnc);
    regexp(msg,regmsg);
    regexp(pwd,regpwd);

    function regexp(ele,reg){
        ele.onblur=function(){
            if(reg.test(ele.value)){
                this.nextElementSibling.className='succes';
                this.nextElementSibling.innerHTML=' <i class="success_icon"></i> 恭喜您输入正确';
            }else{
                this.nextElementSibling.className='error';
                this.nextElementSibling.innerHTML=' <i class="error_icon"></i> 格式不正确，请从新输入';
            }
        }
    }

    surepwd.onblur=function(){
         if(this.value==pwd.value){
            this.nextElementSibling.className='succes';
            this.nextElementSibling.innerHTML=' <i class="success_icon"></i> 密码符合';
         }else{
            this.nextElementSibling.className='error';
            this.nextElementSibling.innerHTML=' <i class="error_icon"></i> 两次输入密码不一致';
         }
    }

   
}