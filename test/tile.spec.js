/* global describe it */

const algolib = require('../index.js');

describe('#coverByTile', () => {
  it('should count amount of tiles to cover area (integer)', () => {
    const tilesAmount = algolib.coverByTile(5, 3, 2);

    tilesAmount.should.be.eql(6);
  });

  it('should count amount of tiles to cover area (float)', () => {
    const tilesAmount = algolib.coverByTile(0.5, 1.3, 0.2);

    tilesAmount.should.be.eql(21);
  });
});
