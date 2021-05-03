//const assertEqual = require('../assertEqual');
//const tail = require('../tail');
//
//const result = tail(["Hello", "Lighthouse", "Labs"]);
//assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!
//
//// Test Case: Check the original array
//const words = ["Yo Yo", "Lighthouse", "Labs"];
////console.log(words);
////console.log(tail(words));
//assertEqual(words.length, 3); // original array should still have 3 elements!

const assert = require('chai').assert;
const tail = require('../tail');

describe('#tail', () => {
  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
  it("returns [7, 9] for [1, 7, 9]", () => {
    assert.deepEqual(tail([1, 7, 9]), [7, 9]);
  });
});