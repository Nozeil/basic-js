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

  arr.forEach((item, index) => {
    if (item === '--discard-prev') {
      result.pop();
    }
    if (item === '--double-next') {
      result.push(arr[index - 1]);
    }
    if (item !== '--discard-next' && item !== '--discard-prev' && item !== '--double-next' && item !== '--double-prev') {
      result.push(item);
    }
    if (item === '--discard-next') {
      result.pop();
    }
    if (item === '--double-next') {
      result.push(arr[index + 1]);
    }

  });
  return result;
}

/* --discard-next исключает следующий за ней элемент исходного массива из преобразованного массива.
--discard-prev исключает предшествующий ей элемент исходного массива из преобразованного массива.
--double-next дублирует следующий за ней элемент исходного массива в преобразованном массиве.
--double-prev дублирует предшествующий ей элемент исходного массива в преобразованном массиве. */

module.exports = {
  transform
};
