// Implement takeUntil which will keep collecting items from a provided array until the callback provided returns a truthy value.
const takeUntil = (arr, cb) => {
  const results = [];
  for (const el of arr) {
    if (cb(el)) return results;
    results.push(el);
  }
  return results;
};

module.exports = takeUntil;
