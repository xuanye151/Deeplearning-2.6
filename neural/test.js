var neural=require('./neural');

var a=neural(),b=neural(),c=neural(),d=neural();
a.connect(c,d); b.connect(c,d);
a.output[0].replace(0.6); a.output[1].replace(0.3);
b.output[0].replace(0.2); b.output[1].replace(0.7);
a.storage.add(0); b.storage.add(0);
a.active(0); b.active(0); c.active(); d.active();