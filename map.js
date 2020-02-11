// Create a map function that takes in an Array and a Callback Function, and returns a new array based on the results of the callback.
const map = (arr, cb) => {
  // console.log("TCL: map -> arr, cb", arr, cb)
  const results = [];
  for (let item of arr) {
    results.push(cb(item));
  }
  return results;
};

module.exports = map;
