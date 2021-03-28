const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(name) {
    if(name===true || arguments.length===0) this.name=true
    else if(name===false) this.name = false;
  }
  encrypt(message, key) {
    if (arguments.length !== 2) {
      return false;
    }
    let end = ""
    message = message.toUpperCase()
    key = key.toUpperCase()
    for (let i = 0, j = 0; i < message.length; i++) {
      let x = message[i], leng = key.length
      if (j > leng - 1) j = 0
      let y = key[j], code
      if (x.charCodeAt() >= 65 && x.charCodeAt() <= 90) {
        if (y.charCodeAt() >= 65 && y.charCodeAt() <= 90) {
          code = x.charCodeAt() + y.charCodeAt() - 65
          if (code > 90) end += String.fromCharCode(code - 26)
          else end += String.fromCharCode(code)
          j++
        } else {
          end += x;
        }
      } else {
        end += x;
      }
    }
    if(this.name===false) return end.split("").reverse().join("")
    else return end
  }    
  decrypt(message, key) {
    if (arguments.length !== 2) {
      return false;
    }
    let end = ""
    message = message.toUpperCase()
    key = key.toUpperCase()
    for (let i = 0, j = 0; i < message.length; i++) {
      let x = message[i]
      if (j + 1 > key.length) j = 0
      let y = key[j], code
      if (x.charCodeAt() >= 65 && x.charCodeAt() <= 90) {
        if (y.charCodeAt() >= 65 && y.charCodeAt() <= 90) {
          code = x.charCodeAt() - y.charCodeAt() + 65
          if (code<65) end += String.fromCharCode(code + 26)
          else end += String.fromCharCode(code)
          j++
        } else {
          end += x;
        }
      } else {
        end += x;
      }
    }
    if(this.name===false) return end.split("").reverse().join("")
    else return end
  }
  
}

module.exports = VigenereCipheringMachine;
