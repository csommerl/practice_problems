/*
input: num
output: boolean

1. Generate fibonnaci sequence while fibonacci number is less than num.
   a. Create variables for first two numbers and fibonnaci, all set to 0.
   b. On each iteration, set fibonacci to sum of num1 and num2.
   c. Set num1 to num2 and num2 to fibonacci.
2. If fibonacci number === num, return true, else return false.
*/

function isFibonnaci(num) {
  if (num === 0) return true;

  let fibArr = [0, 1];

  while (fibArr[fibArr.length - 1] < num) {
    fibArr.push(fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2]);
  }

  return num === fibArr[fibArr.length - 1];
}

// function isFibonnaci(num) {
//   let num1 = 0;
//   let num2 = 1;
//   let fibonacci = 0;

//   if (num === num1 || num === num2) return true;

//   while (fibonacci < num) {
//     fibonacci = num1 + num2;
//     num1 = num2;
//     num2 = fibonacci;
//   }

//   return fibonacci === num;
// }

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
console.log(isFibonnaci(1)); // true
console.log(isFibonnaci(2)); // true
console.log(isFibonnaci(3)); // true
console.log(isFibonnaci(34)); // true
console.log(isFibonnaci(15)); // false
console.log(isFibonnaci(4)); // false