unction Err(type,message){
    this.type=type;
    this.message=message;
    return this;
}
function testConfig(config,initial){
    var res={};
    for(var i in initial){
        if(config[i]!==undefined){
            res[i]=config[i];
        }else{
            if(initial[i][1]===false){
                res[i]=initial[i];
            }else{
                console.error("%cin function testConfig:required argument config.%c%s%c not found in config","color:red","color:orange",i,"color:red");
                res[i]=initial[i];
                throw(new Err("ReferenceError","required arg not found."));
            }
        }
    }
    return res;
}
