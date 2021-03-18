const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  if(typeof str != 'string') {
    str = String(str);
  }

  let result = [];
  let newresult = [];

  if(!options.separator) {
    options.separator = "+";
  }

  if(options.hasOwnProperty("addition")) {
    if(typeof options.addition != 'string') {
      options.addition = String(options.addition);
    }
    if(!options.additionSeparator) {options.additionSeparator = "|";}
    for(let i = 0; i < options.additionRepeatTimes - 1; i++) {
      newresult.push(options.addition);
      newresult.push(options.additionSeparator);
    }
    newresult.push(options.addition);
    newresult.push(str);
    str = newresult.reverse().join('');
  }

for(let j = 0; j < options.repeatTimes - 1; j++) {
  result.push(str);
  result.push(options.separator);
}
result.push(str);
  
return result.join('');
};