const eqArrays = function(ar1, ar2) {


  for (let a = 0; a < ar1.length; a++) {
    if (ar1[a] !== ar2[a]) {
      return false;
    } 
    
  }
  return true;

};

const assertArraysEqual = function(actual, expected) {
  let firstAr = [];
  let secAr = [];
  actual = eqArrays(firstAr, secAr);
  
  if (actual === expected) {
    console.log ("✔✔✔ Arrays are officially equal!" );
  }
  else {
    console.log ("💩💩💩 Oops... Arrays are not equal...");
  }

};





assertArraysEqual(eqArrays([1, 3, 3], [1, 3, 3]), true);
assertArraysEqual(eqArrays([1, 4, 3], [1, 3, 3]), false);
assertArraysEqual(eqArrays([2, 3, 3], [1, 3, 3]), false);
assertArraysEqual(eqArrays([5, 3, 3], [5, 3, 3]), true);
