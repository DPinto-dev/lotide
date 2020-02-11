// Function returns an object with how many instances of each string were found in the allItems array of strings.
const countOnly = function(allItems, itemsToCount) {
  const results = {};
  for (const item of allItems) {
    if (Object.keys(itemsToCount).includes(item)) {
      results[item] = (results[item] || 0) + 1;
    }
  }
  return results;
};

module.exports = countOnly;

// const firstNames = [
//   "Karl",
//   "Salima",
//   "Agouhanna",
//   "Fang",
//   "Kavith",
//   "Jason",
//   "Salima",
//   "Fang",
//   "Joe"
// ];


// const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);

// console.log( result1)