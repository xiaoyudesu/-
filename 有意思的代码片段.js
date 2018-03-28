//出bug找stackoverflow：
try {
    something
} catch (e) {
    window.location.href =
        "http://stackoverflow.com/search?q=[js]+" +
        e.message;
}


//给元素加上边框，用于代码调试
[].forEach.call($$("*"),function(a){
    a.style.outline="1px solid #"+(parseInt(Math.random()*(1<<24))).toString(16);
})


//随机取a-z和0-9的字符串，不限定长度
Math.random().toString(36).substring(2);



//实现标准JSON的深拷贝
var a = {
    a: 1,
    b: { c: 1, d: 2 }
};
var b=JSON.parse(JSON.stringify(a));



//取出一个数组中的最大值和最小值
var numbers = [5, 458 , 120 , -215 , 228 , 400 , 122205, -85411]; 
var maxInNumbers = Math.max.apply(Math, numbers); 
var minInNumbers = Math.min.apply(Math, numbers);


//将argruments对象转换成数组
var argArray = Array.prototype.slice.call(arguments);


//单行写一个评级组件
"★★★★★☆☆☆☆☆".slice(5 - rate, 10 - rate);定义一个变量rate是1到5的值，然后执行上面代码，

//快速转换为boolean值：
!!1   //true


//二维数组

