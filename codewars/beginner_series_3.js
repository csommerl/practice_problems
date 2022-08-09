/*
Beginner Series #3 Sum of Numbers
https://www.codewars.com/kata/55f2b110f61eb01779000053/train/javascript

Given two integers a and b, which can be positive or negative,
find the sum of all the integers between and including them and return it.
If the two numbers are equal return a or b.

Note: a and b are not ordered!
*/

// function getSum(int1, int2) {
//   let sum = 0;

//   let [smaller, bigger] = int1 < int2 ? [int1, int2] : [int2, int1];

//   for (let idx = smaller; idx <= bigger; idx++) sum += idx;

//   return sum;
// }

function getSum(int1, int2) {
  let sum = 0;

  let [min, max] = [Math.min(int1, int2), Math.max(int1, int2)];

  for (let idx = min; idx <= max; idx++) sum += idx;

  return sum;
}

console.log(getSum(1, 0));  // 1 (1 + 0 = 1)
console.log(getSum(1, 2));  // 3 (1 + 2 = 3)
console.log(getSum(0, 1));  // 1 (0 + 1 = 1)
console.log(getSum(1, 1));  // 1 (1 since both are same)
console.log(getSum(-1, 0));  // -1 (-1 + 0 = -1)
console.log(getSum(-1, 2));  // 2 (-1 + 0 + 1 + 2 = 2)

/*
PEDAC
input: two integers (positive or negative, not ordered)
output: integer, representing the sum of all the integers between & including them.

assumptions:
- any given integer is only counted once
- if the two inputs are the same integer, return that same integer

1. Declare and initialize `sum` with 0.
2. Get smaller & bigger
3. Iterate from smaller to bigger, adding to sum.

*/