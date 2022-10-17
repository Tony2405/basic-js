const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit(n) {
  let num = String(n);
  num = num.split('')
  let result = []
for(let i = 0; i < num.length; i++){
  if(num[i] >= num[i+1]){
    result.push(num[i])
  }
}
  if(result.length === num.length - 2){
    return Number(result = result.join('') + num[num.length-1]);
  }
  return Number(result);
}

module.exports = {
  deleteDigit
};
