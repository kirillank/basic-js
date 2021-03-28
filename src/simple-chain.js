const CustomError = require("../extensions/custom-error");
let chainlet =[];
const chainMaker = {
  getLength() {
    chainlet.length();
  },
  addLink(value) {
    if (value === undefined) {
      value = ' '; 
  }
  chainlet.push(String(value));
  return this;
  },
  removeLink(position) {
    if (!Number.isInteger(position)) {
      chainlet = [];
      throw new Error('Error');
    }
  chainlet.splice(position - 1, 1);
  return this;
  },
  reverseChain() {
    chainlet.reverse();
    return this;
  },
  finishChain() {
    const chain = chainlet.join(" )~~( ");
    chainlet.length = 0;
    return '( ' + chain + ' )';
  }
};

module.exports = chainMaker;
