require('../JavaScript语言精粹');
var sigmoid=require('./sigmoid');
var signal=require('./signal');

var synapse=(function(){
    var s= {
        replace: function (v)   { this.value=v },
        stimulate: function (v) { this.value+=v }
    }
    return function(){
        var syn=Object.create(s);
        syn.value=0;
        return syn;
    }
}())
var input=(function(syn){
    var synapse=syn();
    synapse.active=function(){
        this.aim.value=this.sigmoid.func(this.value);
        console.log('【i】 [input]:',this.value,'[value]:',this.aim.value);
        this.value=0;
    }
    return function(neu){
        var syn=Object.create(synapse);
        syn.sigmoid=sigmoid();
        syn.aim=neu;
        return syn;
    }
}(synapse))
var output=(function(syn){
    var synapse=syn();
    synapse.active=function(){
        this.aim.stimulate(this.main.value*this.value);
        console.log('【o】 [weight]:',this.value,'[value]:',this.main.value,'[output]:',this.main.value*this.value);
    }
    return function(main,aim){
        var syn=Object.create(synapse);
        syn.value=signal.number([-1,1]);
        syn.main=main;
        syn.aim=aim;
        return syn;
    }
}(synapse))

exports.input=input;
exports.output=output;