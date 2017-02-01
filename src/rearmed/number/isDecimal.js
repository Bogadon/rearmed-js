"use strict";

(function(){
  Number.prototype.isDecimal = function(){
    if(Number.isInteger){
      return !Number.isInteger(this);
    }else{
      return isFinite(this) && Math.floor(this) !== this;
    }
  }
  Object.defineProperty(Number.prototype, "isDecimal", {enumerable: false});
}(this));