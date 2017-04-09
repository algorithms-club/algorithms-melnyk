/* global describe it */

const algolib = require('../index.js');

describe('#bubble-sort', () => {
  it('should return empty array when empty array was passed', () => {
    const sortedArr = algolib.bubbleSort([]);

    sortedArr.should.be.eql([]);
  });

  it('should return sorted array if sorted array was passed', () => {
    const sortedArr = algolib.bubbleSort([1, 2, 3, 4]);

    sortedArr.should.be.eql([1, 2, 3, 4]);
  });

  it('should sort array', () => {
    const sortedArr = algolib.bubbleSort([2, 3, 6, 1, 3, 4, 7, 5]);

    sortedArr.should.be.eql([1, 2, 3, 3, 4, 5, 6, 7]);
  });
});
