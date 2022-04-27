const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {

  let result = [];
  let addition = '';
  let separator = options.separator || '+';
  let additionSeparator = options.additionSeparator || '|';

  if (options.additionRepeatTimes) {
    for (let i = 0; i < options.additionRepeatTimes; i++) {
      if (i !== options.additionRepeatTimes - 1) {
        addition += options.addition + additionSeparator
      } else {
        addition += options.addition;
      }

    }
  } else {
    addition = options.addition || '';
  }

  if (options.repeatTimes) {
    for (let i = 0; i < options.repeatTimes; i++) {
      result.push(str + addition);
    }
  } else {
    if (!addition) {
      result = [str];
    } else {
      result = [str + addition];
    }
    
  }

  return result.join(separator);
}

console.log(
  repeater('TESTstr', { separator: 'ds', addition: 'ADD!', additionSeparator: ')))000' }));

module.exports = {
  repeater
};

//node extended-repeater.js
