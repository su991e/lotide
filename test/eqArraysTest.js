
const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

describe('eqArrays', () => {
  it("return true for [1, 2, 3] and [1, 2, 3]", () => {
    assert.isTrue(eqArrays([1, 2, 3], [1, 2, 3]));
  });
  it("return false for [2, 3, 3] and [3, 3, 3]", () => {
    assert.isFalse(eqArrays([2, 3, 3], [3, 3, 3]));
  });
});