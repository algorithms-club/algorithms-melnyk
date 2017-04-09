/* global describe it */

const algolib = require('../index');

describe('#unionFind', () => {
  it('should create proper data structure', () => {
    const uf = new algolib.UnionFind();

    uf.connect.should.be.instanceOf(Function);
    uf.isConnected.should.be.instanceOf(Function);
  });

  it('suold #isConnected return false if not connected', () => {
    const uf = new algolib.UnionFind();

    const isElementConnected = uf.isConnected(3, 4);
    isElementConnected.should.be.false();
  });

  it('should #isConnected return true if elements are conected', () => {
    const uf = new algolib.UnionFind();

    uf.connect(1, 4);

    const isElementConnected = uf.isConnected(1, 4);
    isElementConnected.should.be.true();
  });
});
