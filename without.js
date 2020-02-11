// Implement without which will return a subset of a given array, removing unwanted elements.
const without = (source, itemsToRemove) => {
  return source.filter(element => !itemsToRemove.includes(element));
};

module.exports = without;
