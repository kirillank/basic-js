const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
 if (!Array.isArray(members)){
   return false;
 }else if (members.length==0){
  let res = 'FAIL';
  return res;
 }else{
  let string = [];
  for (let i=0; i<members.length; i++){
    if (typeof members[i] == 'string'){
      string.push(members[i]);
    }
  }
  let words = string.toString();
  let str = words.replace(/\s+/g, '').toUpperCase();
  let mathes = str.match(/\b(\w)/g);
  let Uppper = mathes.sort();
  let acronym = Uppper.join('');
  return acronym;
 }
};
