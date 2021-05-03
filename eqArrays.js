const assertEqual = require('./assertEqual');
//compare two arrays of arguments if it's true
const eqArrays = function(ar1, ar2) {


  for (let a = 0; a < ar1.length; a++) {
    if (ar1[a] !== ar2[a]) {
      return false;
    }
  }
  return true;
};

module.exports = eqArrays;

