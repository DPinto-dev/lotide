const assertArraysEqual = require('./assertArraysEqual');

// Implement takeUntil which will keep collecting items from a provided array until the callback provided returns a truthy value.
const takeUntil = (arr, cb) => {
  const results = [];
  for (const el of arr) {
    if (cb(el)) return results 
    results.push(el);
  }
  return results;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);

// console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);

assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);