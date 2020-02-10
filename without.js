const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

const assertArraysEqual = (arr1, arr2) => {
  if (eqArrays(arr1, arr2)) {
    console.log("🟢🟢🟢 Assertion Passed: ", arr1, "===", arr2);
  } else {
    console.log("🔴🔴🔴 Assertion Failed: ", arr1, "!==", arr2);
  }
};


// Implement without which will return a subset of a given array, removing unwanted elements.
// const without = (source, itemsToRemove) => {
//   return source.filter(element => !itemsToRemove.includes(element));
// };


const without = (source, itemsToRemove) => {
  let results = [];

//   for (let i = 0; i < source.length; i++){
//     for (let j = 0; j < itemsToRemove.length; j++){
//       if (itemsToRemove[i] !== source[i]) {
//         results.push(source[i]);
//       }
//     }
//   }
//   return results;
// }

for (let  j of itemsToRemove){
  for (let i of source){
    // console.log( j, i)
      if (j !== i && results.indexOf(i) === -1 ) {
        results.push(i);
      }
    }
  }
  return results;
}

  // for (let i of source) {
  //   if (!itemsToRemove.includes(i)) results.push(i);
  // }
  // return results;


// TESTS
// assertArraysEqual(without([1, 2, 3], [1]), [2]); // => fails
// assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); // => passes
// const words = ["hello", "world", "lighthouse"];
// assertArraysEqual(without(words, ["hello"]), [ 'world', 'lighthouse' ]); // => passes

const words2 = ["hello", "world", "lighthouse", "javascript", "vscode"];

let toRem = ["hello", "vscode"];

console.log(without(words2, toRem));