const letterPositions = require('../letterPositions.js');
const assert = require('chai').assert;

describe('#letterPositions', () => {
  it('returns [0] for letterPositions("Hello")["H"]',
    () => assert.deepEqual(letterPositions("Hello")["H"], [0]));
  it('returns [2, 3] for letterPositions("Hello")["l"]',
    () => assert.deepEqual(letterPositions("Hello")["l"], [2, 3]));
});

