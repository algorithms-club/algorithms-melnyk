'use strict';

let bubbleSort = require('./bubble-sort');
let coverByTile = require('./entry-test/coverByTile');
let UnionFind = require('./unionFind');

let algolib = {
    bubbleSort,
    coverByTile,
    UnionFind,
}

module.exports = algolib;