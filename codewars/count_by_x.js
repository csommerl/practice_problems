/*
https://www.codewars.com/kata/5513795bd3fafb56c200049e/train/javascript

Create a function with two arguments
that will return an array of the first (n) multiples of (x).

Assume both the given number and the number of
times to count will be positive numbers greater than 0.
*/

function countBy(multiplier, countOfMultiples) {
  let count = [];

  for (let idx = 1; idx <= countOfMultiples; idx += 1) {
    count.push(idx * multiplier);
  }

  return count;
}

console.log(countBy(1,10)); // [1,2,3,4,5,6,7,8,9,10]
console.log(countBy(2,5)); // [2,4,6,8,10]