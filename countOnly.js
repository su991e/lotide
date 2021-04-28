const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`😇😇 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😠😠 Assertion Failed: ${actual} !==  ${expected}`);
  }


};

// arrItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count

//check if any objects' keys are equal to array values
//check if any object's values are true;
//count as if array and object values are equal and object value is true
//return number of equal keys with value of trues


const countOnly = function (allItems, itemsToCount) {
  //final output
  let result = {}; //


  //go through arrays
  for (let a = 0; a < allItems.length; a++) {
    let name = allItems[a]; //declare variable to array values

    //if object value is true AND value of output is not assigned/"object output" is empty
    if (itemsToCount[name] && !result[name]) {
      result[name] = 1; //assign value of 1
      //if object of "output" is assigned
    } else if (result[name]) {
      result[name]++; //add 1 to count
    }
    
  }
  //if there's no return value, it's undefined
  return result;
};
      

     
          
       
 

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
