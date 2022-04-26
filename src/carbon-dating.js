const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */

/*  assert.equal(dateSample('ACTIVITY OVER 9000'), false);
 assert.equal(dateSample('one'), false);
 assert.equal(dateSample(''), false);
 assert.equal(dateSample(' '), false);
 assert.equal(dateSample(' \n\t\r'), false); */

function dateSample(sampleActivity) {
  console.log(sampleActivity);
  if (typeof (sampleActivity) !== 'string') {
    return false;
  }

  if (sampleActivity <= 0 || sampleActivity > MODERN_ACTIVITY) {
    return false;
  }

  const K = Math.LN2 / HALF_LIFE_PERIOD;
  sampleActivity = +sampleActivity;
  return (!isNaN(sampleActivity)) ? Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) / K) : false;
}

module.exports = {
  dateSample
};
