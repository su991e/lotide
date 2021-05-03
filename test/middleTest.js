const middle = require('../middle');
const assertArrayEqual = require('../assertArrayEqual');
const eqArrays = require('../eqArrays');

//middle([1]) // => []

//middle([1, 2]) // => []

//middle([1, 2, 3]) // => [2]
assertArrayEqual(eqArrays(middle([1, 2, 3]), [2]), true);

//middle([1, 2, 3, 4, 5]) // => [3]

//middle([1, 2, 3, 4]) // => [2, 3]

//middle([1, 2, 3, 4, 5, 6]) // => [3, 4]
assertArrayEqual(eqArrays(middle([1, 2, 3, 4, 5, 6]), [3, 4]), true);
