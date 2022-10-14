const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(array) {
  
  // remove line with error and write your code here
  let sum = 0;
  
  array.flat(Infinity).forEach(el => {
    if(el === '^^') {
      sum++
    }
  });
  return sum
}

module.exports = {
  countCats
};
