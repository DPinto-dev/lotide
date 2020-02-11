// eqObjects takes in two objects and returns true if both objects have identical keys with identical values.
const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  } else {
    for (const key in object1) {
      // check if it's an object and recursively call the function
      if (typeof object1[key] === 'object' && object1[key] !== null) {
        if (!eqObjects(object1[key], object2[key])) {
          return false;
        }
      } else if (object1[key] !== object2[key]) { // Base Case: single level object
        return false;
      }
    }
  }
  return true;
};

module.exports = eqObjects;