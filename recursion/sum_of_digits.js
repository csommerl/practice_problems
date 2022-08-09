/*
https://launchschool.com/exercises/4a471ab8

Write a function that takes one argument, a positive integer,
and returns the sum of its digits.

Do this without using for, while, or do...while loops
instead, use a series of method calls to perform the sum.
*/

console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45

// // non-recursive
// function sum(num) {
//   return String(num)
//     .split('')
//     .reduce((sum, num) => sum + +num, 0);
// }

// recursive
function sum(num) {
  if (num === 0) return num;

  let remainder = num % 10;
  let newNum = (num - remainder) / 10;

  return remainder + sum(newNum);
}