(function(){
  "use strict";

  var warn = require('./../core/warn');
  if(Array.prototype.select){
    warn(Array, 'select');
  }

  Array.prototype.select = function(cb){
    return this.filter(cb);
  };

  Object.defineProperty(Array.prototype, "select", {enumerable: false});
}(this));
