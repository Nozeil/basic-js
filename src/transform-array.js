const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {

  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  let result = [];
  let discarded;

  arr.forEach((item, index) => {

    if (item === '--discard-prev' && !discarded) {
      result.pop();
    }

    if (item === '--double-prev' && result[result.length - 1] && !discarded) {
      result.push(result[result.length - 1]);
    }

    if (item !== '--discard-prev' &&
      item !== '--discard-next' &&
      item !== '--double-next' &&
      item !== '--double-prev' && 
      item !== discarded) {
      result.push(item);
    } else if (item === '--discard-next' && arr[index + 1]) {
      discarded = arr[index + 1];
    }

    if (item === '--double-next' && arr[index + 1]) {
      result.push(arr[index + 1])
    }

  });
  return result;
}

module.exports = {
  transform
};
