"use strict";
// Create a function printAfter that calls its argument after printing hello world

function printAfter(out) {
  return function (inside) {
    console.log("hello, world");
    inside();
    return out;
  };
}
const print = () => console.log("Elon Musk");

console.log(printAfter()(print));
