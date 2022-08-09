/*
Alphabet symmetry
https://www.codewars.com/kata/59d9ff9f7905dfeed50000b0/train/javascript

Consider the word "abode".
We can see that the letter a is in position 1 and b is in position 2.
In the alphabet, a and b are also in positions 1 and 2.
Notice also that d and e in abode occupy the positions they would occupy in the alphabet, which are positions 4 and 5.
Given an array of words, return an array of the number of letters that occupy their positions in the alphabet for each word.

Input will consist of alphabet characters, both uppercase and lowercase. No spaces.

*/

// // basic
// function solve(arr) {
//   const counts = [];

//   arr.forEach(str => {
//     let count = 0;

//     str.split('').forEach((char, idx) => {
//       let alphabeticalPosition = char.toLowerCase().charCodeAt(0) - 97;
//       if (idx === alphabeticalPosition) count += 1;
//     });

//     counts.push(count);
//   });

//   return counts;
// }

// // map
// function solve(arr) {
//   return arr.map(str => {
//     let count = 0;

//     str.split('').forEach((char, idx) => {
//       let alphabeticalPosition = char.toLowerCase().charCodeAt(0) - 97;
//       if (idx === alphabeticalPosition) count += 1;
//     });

//     return count;
//   });
// }

// // map and reduce
// function solve(arr) {
//   return arr.map(str => {
//     return str.split('').reduce((count, char, idx) => {
//       let alphabeticalPosition = char.toLowerCase().charCodeAt(0) - 97;
//       if (idx === alphabeticalPosition) count += 1;
//       return count;
//     }, 0);
//   });
// }

// map, reduce, and alphabetical position function
function solve(arr) {
  const getAlphaPosition = char => char.toLowerCase().charCodeAt(0) - 97;
  return arr.map(str => {
    return str.split('').reduce((count, char, idx) => {
      if (idx === getAlphaPosition(char)) count += 1;
      return count;
    }, 0);
  });
}

console.log(solve(["abode","ABc","xyzD"]));  // [4, 3, 1]
console.log(solve(["abide","ABc","xyz"])); // [4, 3, 0]
console.log(solve(["IAMDEFANDJKL","thedefgh","xyzDEFghijabc"])); // [6, 5, 7]
console.log(solve(["encode","abc","xyzD","ABmD"]));  // [1, 3, 1, 3]

/*
P
input: arr of strings with alphabetical characters
output: arr of integers, corresponding to the strings of the input array

D
create a string with alphabet
could use char codes. A = 97, so that alphabetical position = charCode - 96
what about regex?

A
1. Declare `counts` and initialize with empty array.
2. Populate `counts` by iterating over `arr`.
3. Get `count` for each string by iterating over each string's characters.
  - If the string element's index === `charCode - 96`, 
4. Push `count` to `counts`.
5. Return `counts`.
*/