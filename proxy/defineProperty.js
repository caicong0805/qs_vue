// var a = {};
// // 精细化的操作对象的属性访问
// // 三个参数 目标对象
// // 需要定的属性或方法的名字
// // 目标属性所拥有的特性 descriptor
// Object.defineProperty(a, "b", {
//     value:123,
//     writable:true,
//     configurable:false
// });
// a.b = 234;
// console.log(a.b);
// Object.defineProperty(a, "b", {
//     value:123,
//     writable:true,
//     configurable:true
// });
var a = {}; //被代理或被劫持的
// Object.defineProperty(a , 'b', {
//     value:3445,
//     enumerable:false
// });
// for (key in a){
//     console.log(key);
// }
// console.log(Object.keys(a))

Object.defineProperty(a, "b", {
    set:function(newValue){
        console.log('你要赋值给我，我的值是' + newValue);
        console.log(`以前的值是：${this.value}`);
        this.value = newValue ;
        console.log(`新的值是:${this.value}`)
    },
    get:function(){
        console.log('你取我的值');
        return this.value;
    }
});
a.b = 33;
console.log(a.b);