const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`😇😇 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😠😠 Assertion Failed: ${actual} !==  ${expected}`);
  }


};
const findKeyByValue = function (objects, values) {
  let keyss = Object.keys(objects);

  for (let keyNames of keyss) {
    //console.log (objects[val]);
    if (objects[keyNames] === values) {
      //console.log(keyNames);
      return keyNames;
    }
    
  }
  //console.log(undefined);
  return undefined;
};




const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

//findKeyByValue(bestTVShowsByGenre, "The Wire");
//findKeyByValue(bestTVShowsByGenre, "That '70s Show")

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

