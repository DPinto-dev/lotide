const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

const assertArraysEqual = (arr1, arr2) => {
  if (eqArrays(arr1, arr2)) {
    console.log("🟢🟢🟢 Assertion Passed: ", arr1, "===", arr2);
  } else {
    console.log("🔴🔴🔴 Assertion Failed: ", arr1, "!==", arr2);
  }
};

//Create a function flatten which will take in an array of arrays and return a "flattened" version of the array.
const flatten = arr => {
  let output = [];
  for (let outer of arr) {
    if (Array.isArray(outer)) {
      output.push(...outer);
    } else output.push(outer);
  }
  return output;
};

// TESTS
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]); // passes
assertArraysEqual(flatten([1, 2, 3, ["a", "b", "c"], 4, 5, 6, 7, ["h", "i"]]), [ 1, 2, 3, 'a', 'b', 'c', 4, 5, 6, 7, 'h', 'i']); // passes

// Created flattenDeep which uses recursion to flatten nested arrays
let flattenDeep = arr => {
  let output = [];
  for (let el of arr) {
    if (Array.isArray(el)) {
      output = output.concat(flattenDeep(el)); //Array.concat()
    } else {
      output.push(el);; //Base Case is that el is not an Array.
    }
  }
  return output;
}


assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]); // passes
assertArraysEqual(flatten([1, 2, 3, ["a", "b", "c"], 4, 5, 6, 7, ["h", "i"]]), [ 1, 2, 3, 'a', 'b', 'c', 4, 5, 6, 7, 'h', 'i']); // passes