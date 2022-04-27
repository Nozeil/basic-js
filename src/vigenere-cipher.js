const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!' AEIHQX SX DLLU
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(notReversed = true) {
    this.notReversed = notReversed;
  }

  encrypt(message, key) {
    this.checkArguments(message, key);
    const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; //'Example of sequence: 1, 2, 3, 4.', 'lilkey'

    let messageArr = message;
    let indexCounter = 0;

    let result = messageArr.split('').map(item => {

      if (item.match(/[a-z]/i)) {

        if (indexCounter === key.length) {
          indexCounter = 0;
        }

        item = item.toUpperCase();

        let itemIndexInAlphabet = ALPHABET.indexOf(item);
        let newAlphabet = ALPHABET.slice(itemIndexInAlphabet) + ALPHABET.slice(0, itemIndexInAlphabet);
        let keyLetterIndexInAlphabet = ALPHABET.indexOf((key[indexCounter]).toUpperCase());

        indexCounter++;

        return newAlphabet[keyLetterIndexInAlphabet];

      } else {
        return item;
      }
    });

    return this.notReversed ? result.join('') : result.reverse().join('');
  }

  decrypt(message, key) {
    this.checkArguments(message, key);
    const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; //'Example of sequence: 1, 2, 3, 4.', 'lilkey'

    let messageArr = message;
    let indexCounter = 0;

    let result = messageArr.split('').map(item => {

      if (item.match(/[a-z]/i)) {

        if (indexCounter === key.length) {
          indexCounter = 0;
        }

        item = item.toUpperCase();

        let itemIndexInAlphabet = ALPHABET.indexOf(key[indexCounter].toUpperCase());
        let newAlphabet = ALPHABET.slice(itemIndexInAlphabet) + ALPHABET.slice(0, itemIndexInAlphabet);
        let keyLetterIndexInAlphabet = newAlphabet.indexOf(item.toUpperCase());

        indexCounter++;

        return ALPHABET[keyLetterIndexInAlphabet];

      } else {
        return item;
      }
    });

    return this.notReversed ? result.join('') : result.reverse().join('');
  }

  checkArguments(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }
  }
}

  module.exports = {
    VigenereCipheringMachine
  };

// node vigenere-cipher.js 