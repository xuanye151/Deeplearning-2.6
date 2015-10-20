require('../JavaScript语言精粹');
var variable=function(r){
    var d=Math.random();
    if     (r[0]==-1&&r[1]==1)     return (d-0.5)*2;
    else if(r[0]==0&&r[1]==1)     return d;
    else if(r=='binary'){
        if(d>=0.5) return 1
        else       return 0
    }
    else if(typeof r=='number') return r;
}
Array.method('add',function(num,r){
    if(!num) num=1;
    for(var i=0;i<num;i++) this.push(variable(r));
})

var signal=(function(){
    var s={
        number:function(r){
            return variable(r)
        },
        array:function(num,r){
            var a=[];
            a.add(r,num);
            return a;
        }
    };
    return function(){
        var sig=Object.create(s);
        return sig;
    }
}())

module.exports=signal();