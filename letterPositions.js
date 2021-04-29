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
//--------------------------------------------------------------------


const letterPositions = function(sentence) {
  const results = {};

  //go through each word in string
  for (let a = 0; a < sentence.length; a++) {
    let keys = sentence[a];

    if (keys !== " ") {
      if(!results[keys]) {
        results[keys] = [];
        results[keys].push(a);
      } else {
        results[keys].push(a);
      }
      
    }

  } 
  //console.log(results);
  return results;
}



//letterPositions("lighthouse in the house");
assertArraysEqual(eqArrays(letterPositions("lighthouse in the house")["l"], [0]), true)
//eqArrays(letterPositions("lighthouse in the house")["l"], [0])
//letterPositions("lighthouse in the house")

