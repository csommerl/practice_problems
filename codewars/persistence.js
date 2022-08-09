/*
Persistent Bugger
https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/train/javascript
Write a function, persistence,
that takes in a positive parameter num
and returns its multiplicative persistence,
which is the number of times you must multiply the digits in num until you reach a single digit.
*/

function persistence(num) {
  let count = 0;

  while (num > 9) {
    num = +(String(num).split('').reduce((accum, digit) => accum * digit, 1));
    count += 1;
  }

  return count;
}

console.log(persistence(39)); // 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
console.log(persistence(999));  // 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
console.log(persistence(4));  // 0 (because 4 is already a one-digit number)

/*
1. Declare `count` and initialize with `0`.
2. While `num` is greater than `9`, multiply digits and increment `count`.
  a.  
3. Return `count`.

Strategies for 2, need to isolate digits to multiply them:
- isolate the digits by coercing to string and then array
- without coercing to string: for loop?
*/