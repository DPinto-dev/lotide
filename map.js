const assertArraysEqual = require('./assertArraysEqual');

// Create a map function that takes in an Array and a Callback Function, and returns a new array based on the results of the callback.
const map = (arr, cb) => {
  // console.log("TCL: map -> arr, cb", arr, cb)
  const results = [];
  for (let item of arr) {
    results.push(cb(item));
  }
  return results;
}

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);

const nums = [23, 18, 99, 27, 32];
const results2 = map(nums, n => n * n );

const fruits = ['avocado', 'guava', 'mango', 'blueberrie'];
const results3 = map(fruits, f => `I love to eat ${f}s.`);
const expectedResults3 = [ 'I love to eat avocados.',
'I love to eat guavas.',
'I love to eat mangos.',
'I love to eat blueberries.' ];

assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);
assertArraysEqual(results2, [529, 324, 9801, 729, 1024]);
assertArraysEqual(results2, [529, 324, 9801, 729, 1024]);
assertArraysEqual(results3, expectedResults3);