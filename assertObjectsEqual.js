//24 - 34
const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) return false; 

  for (key of Object.keys(object1)) {
    if (Array.isArray(object1[key])) return eqArrays(object1[key],object2[key]);
    if (object1[key] !== object2[key]) return false
  }
  return true;
};


const assertObjectsEqual = function(actual, expected) {
  if(eqObjects(actual, expected)){
    // console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`); // Using template literals does not print the object contents correctly, We could use utils.inspect as the lesson suggests, but I chose to break the console.log arguments.
    console.log("🟢🟢🟢 Assertion Passed: ", actual, "===", expected);

  } else {
    console.log("🔴🔴🔴 Assertion Failed: ", actual, "!==", expected);
  }
};




const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
// assertEqual(eqObjects(cd, dc), true) // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
// assertEqual(eqObjects(cd, cd2), false)// => false

assertObjectsEqual(cd, dc); // => Assertion passes eqObjects() === true
assertObjectsEqual(cd, cd2); // => Assertion fails eqObjects() === false

// assertObjectsEqual(eqObjects(cd, dc), true); // => true
// assertObjectsEqual(eqObjects(cd, dc), true); // => true