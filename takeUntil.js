const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];


const takeUntil = function(array, callback) {
  //return slice of array
  const output = [];
  
  //go through each array
  for (let values of array) {
    if (!callback(values)) {
      output.push(values);
    }
    
  }
return output;
};



const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');


const results2 = takeUntil(data2, x => x === ',');
console.log(results2);


//////////////////ask question