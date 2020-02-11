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

module.exports = flatten;