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
  let counter = 1;
  let result = '';

  str.split('').forEach((item, index, arr) => {
    if (item === arr[index + 1]) {
      counter++;
    } else {
      (counter > 1) ? result += counter + item : result += item;
      counter = 1;
    }
  });

  return result;
}

module.exports = {
  encodeLine
};
