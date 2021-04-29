const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`😇😇 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😠😠 Assertion Failed: ${actual} !==  ${expected}`);
  }


};

//count number of letters in sentence
const countLetters = function(sentence) {
  let output = {}; //declare object for final output
  let word = sentence.split(" ").join(""); //remove white space and comma

  //go through each word in string
  for (let a = 0; a < word.length; a++) {
    let keys = word[a];
    output[keys] = 0;
    for (let words of word) {
      if (keys === words) {
        output[keys] += 1;
      }
    }
  }
  //console.log(output);
  return output;
};

//countLetters("lighthouse in the house");
assertEqual(countLetters("lighthouse in the house")["h"], 4);
