require('../JavaScript语言精粹');

var space=(function(){
    var s={
        replace:function(){
            if(arguments[0]!==undefined) this.x=arguments[0];
            if(arguments[1]!==undefined) this.y=arguments[1];
            if(arguments[2]!==undefined) this.z=arguments[2];
            return this;
        },
        get:function(){
            if(arguments.length==0) return { x:this.x,y:this.y,z:this.z };
            var res={};
            for(var i=0;i<arguments.length;i++){
                var opt=arguments[i];
                res[opt]=this[opt];
            }
            return res;
        },
        compare:function(s){
            if(s.x&& s.x!==this.x) return false;
            if(s.y&& s.y!==this.y) return false;
            if(s.z&& s.z!==this.z) return false;
            return true;
        }
    };
    return function(x,y,z){
        var spa=Object.create(s);
        spa.replace(x,y,z);
        return spa;
    }
}())

module.exports=space;