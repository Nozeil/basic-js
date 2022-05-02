const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {

  let result = {};

  domains = domains.map((item) => {

    item = item.split('.').reverse().join('.');
    result['.' + item.slice(0, item.indexOf('.'))] = 0;
    result['.' + item] = 0;
    return item;

  }).forEach((item) => {

    item = item.split('.');
    item.forEach((el, index) => {

      if (('.' + el) in result) {
        result['.' + el]++
      }

      if (('.' + el + '.' + item[index + 1]) in result) {
        result['.' + el + '.' + item[index + 1]]++;
      }
    });

    if (item.length >= 3) {
      result['.' + item.join('.')]++;
    }

  });

  return result;
}

module.exports = {
  getDNSStats
};