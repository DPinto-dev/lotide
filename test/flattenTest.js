const assert = require('chai').assert;
const flatten = require('../flatten');

describe('#flatten', () => {
  it('returns [1, 2, 3, 4, 5, 6] for flatten([1, 2, [3, 4], 5, [6]])', () => assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]));
  it("returns ['a', 'b', 'c', 4, 5, 'h', 'i'] for flatten([['a', 'b', 'c'], 4, 5, ['h', 'i']])", 
    () => assert.deepEqual(flatten([['a', 'b', 'c'], 4, 5, ['h', 'i']]), ['a', 'b', 'c', 4, 5, 'h', 'i']));

    console.log(flatten([1, 2, 3, ["a", "b", "c"], 4, 5, 6, 7, ["h", "i"]]));
});