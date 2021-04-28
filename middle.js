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

const middle = function(arr) {
  //defining length of array
  let len = arr.length;
  let mid = len / 2;
  let newArr = [];
  //if length of array is 1 or 2
  if (len <= 2) {
    return [];
  } else if (len % 2 === 0) {
     //if length of array is even number
     newArr = [arr[mid -1], arr[mid]];
  } else if (len % 2 === 1) {
    //if length of array is even number
    newArr = [arr[Math.floor(mid)]];
  }
  return newArr;
};

middle([1]) // => []

middle([1, 2]) // => []

middle([1, 2, 3]) // => [2]

middle([1, 2, 3, 4, 5]) // => [3]

middle([1, 2, 3, 4]) // => [2, 3]

middle([1, 2, 3, 4, 5, 6]) // => [3, 4]
