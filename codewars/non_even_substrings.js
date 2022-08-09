/*
Non-even substrings
https://www.codewars.com/kata/59da47fa27ee00a8b90000b4/train/javascript

Given a string of integers, return the number of odd-numbered substrings that can be formed.
For example, in the case of "1341", they are 1, 1, 3, 13, 41, 341, 1341, a total of 7 numbers.

*/


// // this solution doesn't work with large numbers
// function solve(str) {
//   let count = 0;

//   for (let idx1 = 0; idx1 < str.length; idx1++) {
//     for (let idx2 = idx1 + 1; idx2 <= str.length; idx2++) {
//       if (Number(str[idx2 - 1]) % 2 === 1) count += 1;
//     }
//   }

//   return count;
// };

// alternative line 17: if (Number(str.slice(idx1, idx2)) % 2 === 1) count += 1;

function solve(str) {
  let count = 0;

  for (let idx = 0; idx < str.length; idx++) {
    if (+str[idx] % 2 === 1) count += (idx + 1);
  }

  return count;
}

// function solve(str) {
//   let count = 0;

//   str.split('').forEach((char, idx) => {
//     if (+char % 2 === 1) count += (idx + 1);
//   });

//   return count;
// }

/*
PEDAC
input: string of integers
output: integer, representing the number of odd-numbered substrings that can be formed from the original string

A
1. Declare `count` variable and initialize with `0`.
2. Create substrings and test them.
   a. For each character, create substrings beginning 
      with the index of that character for each of the reamining characters/indices.
   b. Coerce each substring into an integer.
   c. Test whether the integer is odd.
   d. If odd, increase `count` by 1.
3. Return `count`.

*/

console.log(solve('0'));  // 0
console.log(solve("")); // 0
console.log(solve("1")); // 1
console.log(solve("1341"));  // 1, 13, 1341, 3, 341, 41, 1 => 7
console.log(solve("1357"));  // 10
console.log(solve("13471")); // 12
console.log(solve("134721"));  // 13
console.log(solve("1347231")); // 20
console.log(solve("13472315"));  // 28
console.log(solve('00000'));  // 0