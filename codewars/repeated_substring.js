/*
Repeated Substring
https://www.codewars.com/kata/5491689aff74b9b292000334/train/javascript

Input: nonempty string consisting of lowercase latin letters
Output: an array such that
  - first element is minimum substring t
  - second element is the maximum number k
  - the entire string is equal to t repeated k times.

A
1. Declare `arr` and initialize with an empty array.
2. Construct increasingly large substrings, testing until condition is met.
    a. Declare minSubstring and initialize.
    b. Get minSubstring length.
    c. Declare `multiple` and initilaize with input string's length divided by minSubstring length.
    d. Test whether minSubstring repeated for multiple times is identical to input string.
    e. If so, populate `arr` and break.
    f. If not, continue.
3. Return `arr`.

*/

// function f(str) {
//   const arr = [];

//   for (let idx = 1; idx <= str.length; idx++) {
//     let minSubstring = str.slice(0, idx);
//     let multiplier = str.length / minSubstring.length;
//     if (minSubstring.repeat(multiplier) === str) {
//       arr.push(minSubstring, multiplier);
//       break;
//     }
//   }

//   return arr;
// }

function f(str) {
  for (let idx = 1; idx <= str.length; idx++) {
    let minSubstring = str.slice(0, idx);
    let multiplier = str.length / minSubstring.length;
    if (minSubstring.repeat(multiplier) === str) {
      return [minSubstring, multiplier];
    }
  }
}


console.log(f('ababab')); // ['ab', 3]
console.log(f('abcde'));  // ['abcde', 1]