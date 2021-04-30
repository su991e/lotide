const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`😇😇 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😠😠 Assertion Failed: ${actual} !==  ${expected}`);
  }


};
//----------------------------------------------------------------------------------------




//----------------------------------------------------------------------------------------
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
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

//------------------------------


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
//eqObjects(ab, ba); //=> true

const abc = { a: "1", b: "2", c: "3" };
//eqObjects(ab, abc); //=> false

//assertEqual(eqObjects(ab, ba), true); //=> true