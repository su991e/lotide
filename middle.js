const middle = function(arr) {
  //defining length of array
  let len = arr.length;
  let mid = len / 2;
  let newArr = [];
  //if length of array is 1 or 2
  if (len <= 2) {
    newArr = [];
  } else if (len % 2 === 0) {
     //if length of array is even number
     newArr = [arr[mid -1], arr[mid]];
  } else if (len % 2 === 1) {
    //if length of array is even number
    newArr = [arr[Math.floor(mid)]];
  }
  return newArr;
  //console.log(newArr);
};

module.exports = middle;
