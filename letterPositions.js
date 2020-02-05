const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

const assertArraysEqual = (arr1, arr2) => {    
  if(eqArrays(arr1, arr2)){
    console.log("🟢🟢🟢 Assertion Passed: ", arr1, "===", arr2);
  } else {
    console.log("🔴🔴🔴 Assertion Failed: ", arr1, "!==", arr2);
  }
};

// Receives a string, outputs an object where each letter is a property and their values are arrays with their indexes on the input string.
const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    const letter = sentence[i];
    results[letter] = results[letter] || [];
    results[letter].push(i);
  }

  return results;
};


// TESTS
let test = "Hello";
assertArraysEqual(letterPositions(test)["H"], [0]);
assertArraysEqual(letterPositions(test)["l"], [2, 3]);

