function serializeToJson(form) {
    // 我们需要把这个方法的返回的值转换为 对象的形式。
    // 那么我们要事先准备好一个空的对象。
    var result = {};
    var f = form.serializeArray();
    // 然后对这个数组进行循环遍历。
    f.forEach(function (item) {
        // 相当于 result.name = 
        result[item.name] = item.value
        // 从而获取反回值里面对象的 name属性的值 把这个name属性的值作为对象的属性，把vlaue做为对象属性的值就可以了.
    })
    //然后返回出去
    return result;
}
// 获取表单用户输入的内容 serializeArray() 
// 返回值是一个数组 [] 这个数组会存有多个对象，对象的多少取决于你有多少个表单控件
// 现在的文件中只有两个表单控件  [{name: "emali",value:"用户输入的内容"},{name:"password",value:"用户输入的内容}]

// 用 serializeArray() 这个方法获取表单中用户输入的内容，它返回的是一个数组，这个数组中会存储多个对象，对象的多少取决于表单控件的数量。 调用的方法就是把 需要获取内容的表单 放到 这个方法前面 用一个变量接收就行了