"use strict";
// Given an array. Determine whether it consists only from uniques or not.

function uniques(arr) {
  let lngt = arr.length;
  let check = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let d = i + 1; d < arr.length; d++) {
      if (arr[i] === arr[d]) {
        return "Array consists non unique elements";
      }
    }
  }
  return "Array contains unique elements";
}

console.log(uniques([1, 2, 3, 4]));
