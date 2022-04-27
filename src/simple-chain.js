const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */

const chainMaker = {

  chain: [],

  getLength() {
    return this.chain.length;
  },
  addLink(value) {

    (arguments.length) ? this.chain.push(`( ${value} )`) : this.chain.push('( )');
    return this;
  },
  removeLink(position) {
    if (typeof (position) !== 'number' || this.chain[position - 1] === undefined) {
      this.chain = [];
      throw new Error("You can\'t remove incorrect link!");
    }

    this.chain.splice((position - 1), 1);
    return this;

  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let result = this.chain.join('~~');
    this.chain = [];
    return result;
  }
};

//'( DEF )~~( 3.14 )~~( 8.963 )~~( [object Object] )'

module.exports = {
  chainMaker
};
