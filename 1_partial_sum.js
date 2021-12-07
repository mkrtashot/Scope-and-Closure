"use strict";
// Create a function that implements partial sum

function sum(num1) {
  return function (num2) {
    return num1 + num2;
  };
}

const addOne = sum(1);

const addTen = sum(10);
