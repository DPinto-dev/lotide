const assertArraysEqual = require('./assertArraysEqual');


// Implement middle which will take in an array and return the middle-most element(s) of the given array.
const middle = arr => {
  let midIndex = Math.floor(arr.length / 2);
  let output = [];
  
  if (arr.length < 3) return [];
  if (arr.length % 2 === 0) {
    output.push(arr[midIndex - 1]);
    output.push(arr[midIndex]);
  } else {
    output.push(arr[midIndex]);
  }
  return output;
};

module.exports = middle;