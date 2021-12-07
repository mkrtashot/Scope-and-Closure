"use strict";
// Determine if a word or phrase is an isogram. An isogram (also known as a "non pattern word") is a
// word or phrase without a repeating letter

function isogram(word) {
  word = word.split("");
  for (let i = 0; i < word.length; i++) {
    for (let d = i + 1; d < word.length; d++) {
      if (word[i] === " ") {
        continue;
      }

      if (word[i] === word[d]) {
        return "Not isogram";
      }
    }
  }
  return "Isogram";
}

console.log(isogram());
