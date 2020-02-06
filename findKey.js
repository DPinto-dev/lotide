"use strict";
const assertEqual = require('./assertEqual');

const obj = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

const findkey = (obj, cb) => {
  for (const key in obj) {
    if (cb(obj[key])) return key;
  }
};


// TESTS
const result1 = findkey(obj, x => x.stars === 2);
const result2 = findkey(obj, x => x.stars === 3);
assertEqual(result1, "noma");
assertEqual(result2, "Akaleri");