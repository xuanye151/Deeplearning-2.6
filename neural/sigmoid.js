require('../JavaScript语言精粹');

var sigmoid=(function(){
    var s={
        func:undefined,
        0:function(i){ return i },
        1:function(i){ return 1/(1+Math.exp((-1)*i)) },
        2:function(i){
            var a=Math.exp(i),b=Math.exp((-1)*i);
            return (a-b)/(a+b);
        },
        set:function(type){ this.func=this[type] }
    }
    return function(){
        var sig=Object.create(s);
        sig.set(1)
        return sig;
    }
}())

module.exports=sigmoid;