const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`😇😇 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😠😠 Assertion Failed: ${actual} !==  ${expected}`);
  }


};
//compare two arrays of arguments if it's true
const eqArrays = function(ar1, ar2) {

  for (let a = 0; a < ar1.length; a++) {
    if (ar1[a] === ar2[a]) {
    } else {
      return false;
    }
    
  }
  return true;

};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([2, 3, 3], [1, 3, 3]), true); // => should fail
assertEqual(eqArrays([2, 3, 3], [5, 3, 3]), true); // => should fail
assertEqual(eqArrays([2, 3, 9], [2, 3, 9]), true); // => should PASS