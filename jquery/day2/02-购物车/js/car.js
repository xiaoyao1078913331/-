$(function () {
    // 全选 全不选
    $('.checkall').change(function () {
        //并级选择器
        $('.j-checkbox, .checkall').prop('checked', $(this).prop('checked'));

        if ($(this).prop('checked')) {
            $('.cart-item').addClass('check-cart-item');
        } else {
            $('.cart-item').removeClass('check-cart-item');
        }
    });

    // 2.通过复选框被选中的个数等于3，就应该把全选按钮选上，否则全选按钮不选
    $('.j-checkbox').change(function () {
        if ($('.j-checkbox').length === $('.j-checkbox:checked').length) {
            $('.checkall').prop('checked', true);
        } else {
            $('.checkall').prop('checked', false);
        }

        if ($(this).prop('checked')) {
            //让当前的添加
            $(this).parents('.cart-item').addClass('check-cart-item');
        } else {
            $(this).parents('.cart-item').removeClass('check-cart-item');
        }

    });

    // 3.增减商品数量
    getSum();
    $('.increment').click(function () {
        var n = $(this).siblings('.itxt').val();
        // console.log(n);
        n++;
        $(this).siblings('.itxt').val(n);
        // 3.1计算小计模板  当前商品的价格
        var p = $(this).parents('.p-num').siblings('.p-price').html();
        p = p.substr(1);
        // 小计模块
        $(this).parents('.p-num').siblings('.p-sum').html("￥" + (p * n).toFixed(2));
        getSum();
    })

    $('.decrement').click(function () {
        var n = $(this).siblings('.itxt').val();
        if (n == 1) {
            return false;
        }

        n--;
        $(this).siblings('.itxt').val(n);
        // 3.1计算小计模板  当前商品的价格
        var p = $(this).parents('.p-num').siblings('.p-price').html();
        p = p.substr(1);

        // 小计模块
        $(this).parents('.p-num').siblings('.p-sum').html("￥" + (p * n).toFixed(2));
        getSum();
    });

    $('.itxt').change(function () {
        var n = $(this).val();
        var p = $(this).parents('.p-num').siblings('.p-price').html();
        p = p.substr(1);

        // 小计模块
        $(this).parents('.p-num').siblings('.p-sum').html("￥" + (p * n).toFixed(2));
        getSum();
    })
    // 计算总计和总额模块
    function getSum() {
        var count = 0; //计算总件数
        var sum = 0; //计算总价钱
        $('.itxt').each(function (i, ele) {
            count += parseInt($(ele).val());
        })
        $('.p-sum').each(function (i, ele) {
            //如果数字跟字符串相加会返回NaN
            sum += parseFloat($(ele).text().substr(1));
        })
        $('.amount-sum em').text(count);
        $('.price-sum em').text('￥' + sum.toFixed(2));
    }

    //删除商品模块
    $('.p-action a').click(function () {
        $(this).parents('.cart-item').remove();
        getSum();
    })

    $('.remove-batch').click(function () {
        //删除的是小的复选框选中的商品
        $('.j-checkbox:checked').parents('.cart-item').remove();
        getSum();
    })
    $('.clear-all').click(function () {
        $('.cart-item').remove();
        getSum();
    })
})

