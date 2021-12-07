"use strict";
// Write a function that implements filtering in array

function filterFalsyValues(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

const values = [null, true, {}, { name: "Elon" }, "", NaN, 0];

console.log(filterFalsyValues(values)); // [true, {}, { name: "Elon" }];
console.log(filterFalsyValues(["hello", 1233, []])); // ['hello', 1233, []]
