const eqArrays = require('./eqArrays');

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

module.exports = assertArraysEqual;