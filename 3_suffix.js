"use strict";
// Write a function that returns an anonymous function, which transforms its input by adding a particular suffix at the end.

function add_suffix(suffix) {
  return function (str) {
    str += suffix;
    return str;
  };
}

add_ly = add_suffix("ly");
console.log(add_ly("hopeless"));
console.log(add_ly("total"));

add_less = add_suffix("less");
console.log(add_less("fear"));
console.log(add_less("ruth"));
