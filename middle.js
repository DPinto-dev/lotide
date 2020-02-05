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
  
// TESTS
assertArraysEqual(middle([1, 2, 3]), [2]); // => passes
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => passes
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [5, 6]); // => passes
assertArraysEqual(middle([1, 2]), []); // => passes
