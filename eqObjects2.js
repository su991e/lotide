const eqArrays = function(ar1, ar2) {


  for (let a = 0; a < ar1.length; a++) {
    if (ar1[a] !== ar2[a]) {
    } else {
      return false;
    }
    
  }
  return true;

};

// Returns true if both objects have identical keys with identical values & arrays
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let ob1arr = Object.keys(object1);
  let ob2arr = Object.keys(object2);
  

  for (let ob1 of ob1arr) {
  if (!(ob1arr.length === ob2arr.length)) {
    //console.log(false);
    return false;
  }
  let vals = object1[ob1];
  let vals2 = object2[ob1];
  if ((Array.isArray(object1[ob1])) && (Array.isArray(object2[ob1]))) {
    for (let a = 0; a < object1[ob1].length; a++) {
      if (!(vals.length === vals2.length) || !(vals[a] === vals2[a])) {
        //console.log(false);
        return false;
      }
    }
  }
  if (!(Array.isArray(object1[ob1])) && !(Array.isArray(object2[ob1]))) {
    if (!(object1[ob1] === object2[ob1])) {
      return false;
    }
   
  }

}
  //console.log(true);
  return true;
};


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
//eqObjects(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
//eqObjects(cd, cd2); // => false

//eqArrays(eqObjects(cd, dc), true);

