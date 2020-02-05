// ASSERT EQUAL
const assertEqual = function(actual, expected) {
  console.log((actual === expected) ? `🟢🟢🟢 Assertion Passed: ${actual} === ${expected}` : `🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
};

// Create a function head which returns the first item in the array.
const head = arr => arr[0];

// TESTING
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]),undefined);
assertEqual(head("blahblah"),undefined);