var isObjectLike = require('./isObjectLike');

function equals(obj1, obj2){
  for(var propName in obj1){
    if(obj1.hasOwnProperty(propName) != obj2.hasOwnProperty(propName)){
      return false;
    }else if(typeof obj1[propName] != typeof obj2[propName]){
      return false;
    }
  }
  for(var propName in obj2){
    var val = obj1[propName];
    var other = obj2[propName];
    if(obj1.hasOwnProperty(propName) != obj2.hasOwnProperty(propName)){
      return false;
    }else if(typeof val != typeof other){
      return false;
    }

    if(!obj1.hasOwnProperty(propName)){
      continue;
    }

    if((Array.isArray(val) && Array.isArray(other)) || (isObjectLike(val) && isObjectLike(other))){
      if(!equals(val, other)){
        return false;
      }
    }else if(val != other){
     return false;
    }
  }
  return true;
};

module.exports = equals;
