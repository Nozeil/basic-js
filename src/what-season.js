const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {

  if (arguments.length === 0) {
    return 'Unable to determine the time of year!';
  }

  try {
    const MONTH = date.getMonth();
    date.setMonth(MONTH);
    
    if (MONTH > 1 && MONTH <= 4) {
      return 'spring';
    } else if (MONTH > 4 && MONTH <= 7) {
      return 'summer';
    } else if (MONTH > 7 && MONTH <= 10) {
      return 'autumn';
    } else {
      return 'winter';
    }
  } catch (error) {
    if (error) {
      throw new Error('Invalid date!');
    }
  }
}

/* () => getSeason('foo'),
() => getSeason({ John: 'Smith' }),
() => getSeason(20192701),
() => getSeason([2019, '27', 0 + '1']),
() => getSeason(() => new Date()) */

module.exports = {
  getSeason
};
