const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    return Array.isArray(arr) ?
    (arr.length === 0 ?
      1 : Math.max(...arr.map(deep=>this.calculateDepth(deep)))+1) :
    0;
  }
};