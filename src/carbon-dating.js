const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  let numbers = parseFloat(sampleActivity);
  if (numbers == Number){
    let k = 0.693/HALF_LIFE_PERIOD;
   return Math.ceil(years);
  }else{
   return false;
  }
}
