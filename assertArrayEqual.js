const eqArrays = function(ar1, ar2) {


  for (let a = 0; a < ar1.length; a++) {
    if (ar1[a] !== ar2[a]) {
      return false;
    } 
    
  }
  return true;

};

const assertArraysEqual = function(condition) {
  
  if (condition) {
    console.log ("✔✔✔ Arrays are officially equal!" );
  }
  else {
    console.log ("💩💩💩 Oops... Arrays are not equal...");
  }

};





assertArraysEqual(eqArrays([1, 3, 3], [1, 3, 3]));
assertArraysEqual(eqArrays([1, 4, 3], [1, 3, 3]));
assertArraysEqual(eqArrays([2, 3, 3], [1, 3, 3]));
assertArraysEqual(eqArrays([5, 3, 3], [5, 3, 3]));
