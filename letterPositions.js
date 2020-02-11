// Receives a string, outputs an object where each letter is a property and their values are arrays with their indexes on the input string.
const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    const letter = sentence[i];
    results[letter] = results[letter] || [];
    results[letter].push(i);
  }
  return results;
};


module.exports = letterPositions;