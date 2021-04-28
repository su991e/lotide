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

const without = function(arr, remove) {
  let newAy = []; //assgining new array
  newAy = newAy.concat(arr); //putting values from arr to newAy
  for (let a = 0; a < arr.length; a++) {
    for (let content of remove) {
      if (arr[a] === content) {
        let ind = newAy.indexOf(content); //assigning value of index for element being removed
        newAy.splice(ind, 1);
      }
    }
  }
    return newAy;
    
};



const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);