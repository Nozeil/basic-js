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

  let result = [];

  let nArr = n.toString().split('');
  let tempArr = n.toString().split('');

  for (let i = 0; i < nArr.length; i++) {
    tempArr.splice(i, 1);
    result.push(+tempArr.join(''));
    tempArr = n.toString().split('');
  }

  return Math.max(...result);

}

deleteDigit(152);

module.exports = {
  deleteDigit
};

//node delete-digit.js