const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

assertArraysEqual(middle([1, 2, 3]), [2]); // => passes
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => passes
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [5, 6]); // => passes
assertArraysEqual(middle([1, 2]), []); // => passes
