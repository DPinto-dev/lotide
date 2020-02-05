// 47
const assertEqual = function(actual, expected) {
  console.log((actual === expected) ? `🟢🟢🟢 Assertion Passed: ${actual} === ${expected}` : `🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
};

// Implement the function findKeyByValue which takes in an object and a value. It should scan the object and return the first key which contains the given value. If no key with that given value is found, then it should return undefined.
const findKeyByValue = function(obj, value) {
  for (let key in obj) {
    if (obj[key] === value) return key;
  }
};

// TESTS
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);