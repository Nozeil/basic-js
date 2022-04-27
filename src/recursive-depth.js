const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {

  calculateDepth(arr) {
    let depthCounter = 0;
    for (let item of arr) {
      if (Array.isArray(item)) {
        depthCounter = Math.max(depthCounter, this.calculateDepth(item));
      }
    }
    return depthCounter + 1;
  }
}

const depthCalc = new DepthCalculator();
console.log(depthCalc.calculateDepth([1, 2, 3, [1,[1]], 4, 5, [1]]))

module.exports = {
  DepthCalculator
};
