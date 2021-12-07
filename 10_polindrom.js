"use strict";

function palindrom(word) {
  word = word.split("");
  console.log(word);
  let arr = [];
  for (let i = word.length - 1; i >= 0; i--) {
    arr.push(word[i]);
  }

  word = word.join("");
  arr = arr.join("");

  if (word === arr) {
    return "it is palindrom";
  } else {
    return "it's not polindrom";
  }
}

console.log(palindrom("mamam"));
