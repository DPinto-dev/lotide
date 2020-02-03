// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  console.log((actual === expected) ? 
  `🟢🟢🟢 Assertion Passed: ${actual} === ${expected}` : 
  `🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`
  ); 
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Diogo", "Diogo");
assertEqual("Diogo", "diogo");
assertEqual(20, 20);
assertEqual(21, 25);