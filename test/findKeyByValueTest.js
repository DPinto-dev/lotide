const findKeyByValue = require('../findKeyByValue');
const assert = require('chai').assert;

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

describe('#findKeyByValue', () => {
  console.log("This is the bestTVShowsByGenre object against all tests are run: \n", bestTVShowsByGenre);

  it('returns "drama" for findKeyByValue(bestTVShowsByGenre, "The Wire")',
    () => assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"));
  it('returns undefined for findKeyByValue(bestTVShowsByGenre, "That \'70s Show")',
    () => assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show")));
});

