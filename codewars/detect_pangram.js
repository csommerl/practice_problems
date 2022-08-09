/*
Detect Pangram
https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/javascript

A pangram is a sentence that contains every single letter of the alphabet at least once.
For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram,
because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram.
Return True if it is, False if not.
Ignore numbers and punctuation.
*/

// function isPangram(str) {
//   let result = true;
//   for (let idx = 97; idx <= 122; idx++) {
//     if (!str.toLowerCase().includes(String.fromCharCode(idx))) {
//       result = false;
//       break;
//     }
//   }
//   return result;
// }

// function isPangram(str) {
//   return 'abcdefghijklmnopqrstuvwxyz'
//     .split('')
//     .every(char => str.toLowerCase().includes(char));
// }

// function isPangram(str) {
//   return 'abcdefghijklmnopqrstuvwxyz'
//     .split('')
//     .every(char => str.toLowerCase().indexOf(char) !== -1);
// }

function isPangram(str) {
  let lowercaseStr = str.toLowerCase();
  return 'abcdefghijklmnopqrstuvwxyz'
    .split('')
    .every(char => lowercaseStr.includes(char));
}

console.log(isPangram("The quick brown fox jumps over the lazy dog"));  // true
console.log(isPangram('curtis')); // false

/*

PEDAC
input: string
output: boolean

1. Loop over every alphabetical character.
2. If any alphabetical character is not contained in the string, return false.
3. Otherwise return true.

*/