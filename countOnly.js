const assertEqual = function(actual, expected) {
  console.log((actual === expected) ? `🟢🟢🟢 Assertion Passed: ${actual} === ${expected}` : `🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
};

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
// Function returns an object with how many instances of each string were found in the allItems array of strings.
const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for (const item of firstNames) {
    /* Three different ways of counting and tallying how many instances of each string from an array:
    ** 1 - LHL Example:
    *  if (results[item]) {
    *    results[item] += 1;
    *  } else {
    *    results[item] = 1;
    *  }
    ** 2 - Same logic, but shorter by using a ternary
    *  results[item] ? results[item]++ : results[item] = 1;
    * 
    * * 3 - Testing if the key exists, if not it'll return undefined -> undefined || 0 will be 0, than 0 + 1 = 1, and that gets stored as value 
    *  results[item] = (results[item] || 0) + 1;
    */
    if (Object.keys(itemsToCount).includes(item)) {
      // LHL example tested for (itemsToCount[item])
      results[item] = (results[item] || 0) + 1;
    }
  }
  return results;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);