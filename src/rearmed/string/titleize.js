"use strict";

(function(){
  String.prototype.titleize = function(onlyFirstLetter){
    return this.split(' ').map(function(str){
      var s = str.charAt(0).toUpperCase();
      if(onlyFirstLetter === false){
        s += str.substr(1).toLowerCase();
      }else{
        s += str.substr(1);
      }
      return s;
    }).join(' ');
  };
  Object.defineProperty(String.prototype, "titleize", {enumerable: false});
}(this));