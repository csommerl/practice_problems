/*
https://www.codewars.com/kata/553e6558e848c5a3180000bc/train/javascript

input: number, representing a place in the fibonacci sequence
output: number in the place of the fibonacci sequence

rules:
- in the 0 place is 0 => [0]
- in the 1 place is 1 => [0, 1]
- after the 1 place, the number in a place is the sum of the two previous => [0, 1, 1]

Algorithm
1. Create variables.
   a. Declare and initialize `first` to 0.
   b. Declare and initialize `second` to 0.
   c. Declare and initialize `fib` to 0.
2. For loop: from idx 0 up to and including input steps / places.
   a. Guard Clause: If idx is 1, 
   b. Set fib to sum of first and second.
   c. Set first to second.
   d. Set second to fib.
3. Return fib.

Problems
- where to begin and end for loop?
  A: to simplify logic, start with 0 and go up to and including input.
     - by starting with 0, we use the same basic logic for all steps;
       otherwise, if starting with 1 you'd get the same result but with
       different logic.
     - by making it inclusive, we use the same basic logic for all steps;
       otherwise, place 0 would be skipped; and,
       otherwise, the idx would not be the same as the place.

*/

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...

// non recursive
function fibonacci(num) {
  let first = 0;
  let second = 0;
  let fib = 0;

  for (let idx = 0; idx <= num; ++idx) {
    if (idx === 1) {
      fib = 1;
      continue;
    }

    first = second;
    second = fib;
    fib = first + second;
  }

  return fib;
}

// // recursive
// function fibonacci(num) {
//   if (num <= 1) {
//     return num;
//   } else {
//     return fibonacci(num - 1) + fibonacci(num - 2);
//   }
// }

console.log(fibonacci(0)); // 0
console.log(fibonacci(1)); // 1
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(5));
console.log(fibonacci(6));
console.log(fibonacci(7));
console.log(fibonacci(8));
console.log(fibonacci(100));