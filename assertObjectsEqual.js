const eqObjects = function(object1, object2) {
  let ob1arr = Object.keys(object1);
  let ob2arr = Object.keys(object2);
  

  for (let ob1 of ob1arr) {
    if (!(ob1arr.length === ob2arr.length) || !(object1[ob1] === object2[ob1])) {
      //console.log(false);
      return false;
    }
    
  }
  //console.log(true);
  return true;
};

/////--------------------------------------------------


const assertObjectsEqual = function(actual, expected) {

  const inspect = require('util').inspect;

  let result = eqObjects(actual, expected);

  if (result === true) {
    console.log("✔✔✔ Objects are officially equal!");
  } else {
    console.log("💩💩💩 Oops... Objects are not equal...");
  }
  console.log(`${inspect(actual)} vs ${inspect(expected)} `);
};



const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc); // => false