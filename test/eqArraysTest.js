const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([2, 3, 3], [1, 3, 3]), true); // => should fail
assertEqual(eqArrays([2, 3, 3], [5, 3, 3]), true); // => should fail
assertEqual(eqArrays([2, 3, 9], [2, 3, 9]), true); // => should PASS