const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let c = 1;
  let result = '';
  for(let i = 0; i < str.length; i++) {
    if(str[i] === str[i + 1]) {
      c += 1;
    }else{
      result += c + str[i]
      c = 1
    }
  }
  return result.replace(/1/g, '')
}

module.exports = {
  encodeLine
};
