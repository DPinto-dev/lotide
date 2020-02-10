const assertEqual = require('./assertEqual');

// Recursive implementation
const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (Array.isArray(arr1[i])) {
        if (!eqArrays(arr1[i], arr2[i])) {
          return false;
        }      
      } 
      // Base Case is a linear array. If so, check each item 
      else if (arr1[i] !== arr2[i]) { 
        return false;
      } 
    }
  }
  return true;
};

module.exports = eqArrays;