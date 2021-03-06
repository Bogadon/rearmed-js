(function(){
  "use strict";

  var warn = require('./../core/warn');
  if(Object.prototype.any){
    warn('Object', 'any');
  }

  Object.prototype.any = function(cb){
    var bool = false;

    if(!cb){
      cb = function(){
        return true;
      }
    }

    for(var k in this){
      if(cb(k, this[k])){
        bool = true;
        break;
      }
    }
    return bool;
  };

  Object.defineProperty(Object.prototype, "any", {enumerable: false});
}(this));
