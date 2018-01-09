function Vue(options){
    this.data = options.data || {};
    this.methods = options.methods || {};
    Object.keys(this.data).forEach(key => {
        this.proxyKeys(key);
    })        
    observe(this.data);
    new Compile(options.el, this);
    // mounted发生的最佳时机
    // 生命周期函数，在相应的时刻发生的事件钩子
    options.mounted.call(this);
}
Vue.prototype = {
    proxyKeys(key){
        var self = this;
        Object.defineProperty(this,key,{
        enumerable:false,configurable:true,
        get:function getter (){
            console.log(`您设置了${key}`)
            return self.data[key];
        },
        set:function setter (newVal){
            console.log(`您设置了${newVal}`);
            self.data[key] = newVal;
    }
    })
    }
}