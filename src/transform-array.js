const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
 let newarr = [];
 let form = 0;
 let array = [];
 if (arr.length === 0 || typeof(arr) !=='object') 
 return arr;
 for ( let key of arr) {
   if (key === "--double-prev"){
    if (arr[form - 1] !== undefined && arr[form - 1] !== "--discarded--") {
      newarr.push(arr[form - 1]);
   }
 }else if (key === "--discard-prev") {
  if (typeof (arr[form - 1]) !== "undefined" && arr[form - 1] !== "--discarded--") {
    newarr.pop();
  }
}else if (key === "--double-next") {
  if (form + 1 !== arr.length) {
    newarr.push(arr[form + 1]);
  }
}else if (key === "--discard-next") {
  if (form + 1 !== arr.length) {
    array.push(arr[form + 1])
    arr[form + 1] = "--discarded--"
  }
}else if (key !== "--discarded--") {
  newarr.push(key);
}
form++
}
form = 0;
for (let key of arr) {
if (key === "--discarded--") {
  arr[form] = array.shift();
}
form++;
}
return newarr;
}
