const assertArraysEqual = require('../assertArrayEqual');
const eqArrays = require('../eqArrays');

assertArraysEqual(eqArrays([1, 3, 3], [1, 3, 3]), true);
assertArraysEqual(eqArrays([1, 4, 3], [1, 3, 3]), false);
assertArraysEqual(eqArrays([2, 3, 3], [1, 3, 3]), false);
assertArraysEqual(eqArrays([5, 3, 3], [5, 3, 3]), true);