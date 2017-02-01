"use strict";

(function(){
  var Rearmed = {
    isObjectLike: require('./../core/isObjectLike')
  };

  Array.prototype.smartIncludes = function(x, fromIndex){
    var fromIndex = fromIndex || 0;
    var bool = false;
    for(var i=fromIndex;i<this.length;i++){
      var val = this[i];
      if(Rearmed.isObjectLike(val)){
        if(val.equals(x)){
          bool = true;
          break;
        }
      }else if(val === x){
        bool = true;
        break;
      }
    }
    return bool;
  };
  Object.defineProperty(Array.prototype, "smartIncludes", {enumerable: false});
}(this));