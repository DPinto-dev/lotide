const countOnly = require('../countOnly');
const assert = require('chai').assert;

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

describe('#countOnly', () => {
  console.log("This is the firstNames array against all tests are run: \n", firstNames);

  it('returns { Salima: 2, Jason: 1 } when countOnly is called using countOnly(firstNames, { "Jason": true, "Salima": true }',
    () => assert.deepEqual(countOnly(firstNames, { "Jason": true, "Salima": true }), { Salima: 2, Jason: 1 }));
  it('returns an {} if countOnly does not find the requested property',
    () => assert.deepEqual(countOnly(firstNames, {Karima: true}), {}));
  it('returns {Fang: 2} for countOnly(firstNames, {Fang: true})', () => assert.deepEqual(countOnly(firstNames, {Fang: true}), {Fang: 2}));
});