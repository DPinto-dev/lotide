const tail = require('../tail');
const assertEqual = require('../assertEqual');

let result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");

result = result.join('');
assertEqual(result, ["Lighthouse", "Labs"].join(''));

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

// Test Case: array with only one element
assertEqual(tail(["Hello"]).length, 0);

// Test Case: the tail of an empty array should be an empty array
// console.log("tail of [] should be []", tail([]));
assertEqual(tail([]).length, 0);
