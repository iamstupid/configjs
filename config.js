function Err(type,message){
    this.type=type;//type of error
    this.message=message;//message
    return this;
}
function makeConfig(conf){
    var a={};
    var b=conf.split("|");
    for(var i in b){
        var c=b[i].split("=");
        a[c[0]]=JSON.parse(c[1]);
    }
}
function testConfig(config,initial){
    var res={};//create variable of returning
    if(config===undefined){
        config={};//set initialize value= Primitive Object/Dict
    }
    if(typeof config==="string"||config instanceof String){
        config=makeConfig(config);
    }
    for(var i in initial){//enum
        if(config[i]!==undefined){//if defined
            res[i]=config[i];//get it
        }else{//if not
            if(initial[i][1]===false){
                res[i]=initial[i][0];//get initial value
            }else{
                console.error("%cin function testConfig:required argument config.%c%s%c not found in config","color:red","color:orange",i,"color:red");
                //log error message
                res[i]=initial[i][0];//disturb
                throw(new Err("ReferenceError","required arg not found."));//throw error
            }
        }
    }
    return res;//return value
}
