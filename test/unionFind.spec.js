'use strict';

const algolib = require('../index');

describe('#unionFind', function() {
  it('should create proper data structure',function() {
    let uf = new algolib.UnionFind();

    uf.connect.should.be.instanceOf(Function);
    uf.isConnected.should.be.instanceOf(Function);
  })

  it('suold #isConnected return false if not connected', function() {
    let uf = new algolib.UnionFind();

    let isElementConnected = uf.isConnected(3,4);
    isElementConnected.should.be.false();
  })

  it('should #isConnected return true if elements are conected', function() {
    let uf = new algolib.UnionFind();

    uf.connect(1,4);

    let isElementConnected = uf.isConnected(1,4);
    isElementConnected.should.be.true();
  })

})