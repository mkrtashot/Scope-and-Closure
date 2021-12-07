"use strict";
// Write a function which remove elements with length <= 3

function filterByLength(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > 3) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
console.log(filterByLength(["kia", "tesla", "bmw", "mercedes"])); // ['tesla','mercedes']
