if(typeof Object.beget!=='function'){
    Object.create=function(o){
        var F=function(){};
        F.prototype=o;
        return new F();
    };
}
Function.prototype.method=function(name,func){
    if(!this.prototype[name]) this.prototype[name]=func;
    return this;
}

Function.method('curry',function(){
    var s  =Array.prototype.slice,
        args= s.apply(arguments),
        that=this;
    return function(){
        return that.apply(null,args.concat(s.apply(arguments)))
    }
})