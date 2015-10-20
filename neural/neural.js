require('../JavaScript语言精粹');
var synapse=require('./synapse');
var storage=require('./storage');
var space=require('./space');

var neural=(function(){
    var n={
        connect:function(){
            for(var i=0;i<arguments.length;i++){
                this.output.push(synapse.output(this,arguments[i]));
            }
            return this;
        },
        active:function(s,t){
            if(s!==undefined) this.storage.pop(s);
            this.input.active();
            this.output.forEach(function(out){ out.active() })
            if(t!==undefined) return this.storage.dif(t);
            else               return this.value;
        },
        stimulate:function(v){
            this.input.stimulate(v);
            return this;
        },
        setSigmoid:function(type){
            this.input.sigmoid.set(type);
            return this;
        }
    }
    return function(x,y,z){
        var neu=Object.create(n);
        neu.input=synapse.input(neu);
        neu.storage=storage(neu);
        neu.space=space(x,y,z);
        neu.value=0;
        neu.output=[];
        return neu;
    }
}())

module.exports=neural;