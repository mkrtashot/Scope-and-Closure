"use strict";
// Given an array of integers, find the pair of adjacent elements that has the largest product and return
// that product.

function adjacent(arr) {
  let product;
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    product = arr[i] * arr[i + 1];

    if (result === 0) {
      result = product;
    } else if (product > result) {
      result = product;
    }
  }
  return result;
}

console.log(adjacent([1, -34, 23, 1]));
