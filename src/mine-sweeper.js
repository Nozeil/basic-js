const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  return matrix.map((item, index) => {
    return item.map((el, elIndex) => {

      if (!matrix[index - 1]) {

        el = [item[elIndex + 1],
        item[elIndex - 1],
        matrix[index + 1][elIndex]
        ].filter(e => !!e).length;

      } else if (!matrix[index + 1]) {

        el = [item[elIndex + 1],
        item[elIndex - 1],
        matrix[index - 1][elIndex]].filter(e => !!e).length;

      } else {

        el = [item[elIndex + 1],
        item[elIndex - 1],
        matrix[index - 1][elIndex],
        matrix[index + 1][elIndex]].filter(e => !!e).length;

      }

      if (!el) {
        if (matrix[index - 1]) {
          if (matrix[index - 1][elIndex] || matrix[index - 1][elIndex - 1] || matrix[index - 1][elIndex + 1]) {
            el = 1;
          }
        }
        if (matrix[index + 1]) {
          if (matrix[index + 1][elIndex] || matrix[index + 1][elIndex - 1] || matrix[index + 1][elIndex + 1]) {
            el = 1;
          }
        }
        if (item[elIndex - 1] || item[elIndex + 1]) {
          el = 1;
        }
      }

      return el;
    });
  })
}

module.exports = {
  minesweeper
};
