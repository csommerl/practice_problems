/*
You're a square!
https://www.codewars.com/kata/54c27a33fb7da0db0100040e/train/javascript

A square number is one that is the product of squaring an integer
input: int
output: boolean

A
1. If int is negative, return false.
2. Declare `product` and initialize with 0.
3. Declare idx and initialize with 0.
4. Iterate over the natural numbers until the product
   of squaring a natural number is less than or equal to int
   a. Assign the square of the idx to product.
   b. If the product is equal to int, return true.
   c. Otherwise, increment idx.
5. Once the product goes over int, break and return false.

while product <= Math.abs(int)

*/

function isSquare(int) {
  if (Math.sign(int) === -1) return false;

  let product = 0;
  let idx = 0;

  while (product <= int) {
    product = Math.pow(idx, 2);
    if (product === int) return true;
    idx += 1;
  }

  return false;
}

// function isSquare(int) {
//   return Math.sqrt(int) ** 2 === int;
// }

console.log(isSquare(-1)); // false
console.log(isSquare(0)); // true
console.log(isSquare(3)); // false
console.log(isSquare(4)); // true
console.log(isSquare(25)); // true
console.log(isSquare(26)); // false