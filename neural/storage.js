require('../JavaScript语言精粹');

var storage=(function(){
    var s={
        add:function(){
            for(var i=0;i<arguments.length;i++) this.data.push(arguments[i])
        },
        replace:function(v){
            this.data=v||[]
        },
        get:function(){
            var l=arguments.length;
            if(l==0)      return this.data;
            else if(l==1) return this.data[arguments[0]]
            var res=[];
            for(var i=0;i<l;i++) res.push(this.data[arguments[i]])
            return res;
        },
        pop:function(i){
            var value=this.get(i);
            this.aim.input.replace(value);
        },  //向神经元添加输入
        dif:function(i){
           return this.get(i)-this.aim.value
        }   //获得存储数据与神经元value的差值
    };
    return function(aim){
        var sto=Object.create(s);
        sto.aim=aim;
        sto.data=[];
        return sto;
    }
}())

module.exports=storage;