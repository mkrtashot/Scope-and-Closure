"use strict";
// Given an array of numbers. Find the sum of numbersʼ quadratic which are even

function quadratic(arr) {
  let num = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      num = arr[i] * arr[i] + num;
    }
  }
  if (num === 0) {
    return "no even number in array";
  } else {
    return num;
  }
}

console.log(quadratic([1, 3, 3, 4]));
