const assertEqual = function(actual, expected) {
  console.log((actual === expected) ? `🟢🟢🟢 Assertion Passed: ${actual} === ${expected}` : `🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
};

// Create a function called countLetters, that takes in a sentence (as a string) and then return a count of each of the letters in that sentence.

const countLetters = str => {
  let returnObj = {};
  for (const letter of str) {
    if (letter !== ' ') returnObj[letter] = (returnObj[letter] || 0) + 1;
  }
  return returnObj;
};


const result = countLetters("lighthouse in the house");
assertEqual(result["h"], 4);
assertEqual(result["o"], 2);