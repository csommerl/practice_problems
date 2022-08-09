/* https://www.codewars.com/kata/53dc54212259ed3d4f00071c/train/javascript
Write a function that takes an array of numbers
and returns the sum of the numbers.
The numbers can be negative or non-integer.
If the array does not contain any numbers then you should return 0.
*/

// // with reduce
// function sum(numbers) {
//   return numbers.reduce((a, b) => a + b, 0);
// }

// // with forEach
// function sum(numbers) {
//   let sum = 0;
//   numbers.forEach(num => {
//     sum += num;
//   });
//   return sum;
// }

// for loop
function sum(numbers) {
  let sum = 0;
  for (let idx = 0; idx < numbers.length; idx += 1) {
    sum += numbers[idx];
  }
  return sum;
}

console.log(sum([1, 5.2, 4, 0, -1])); // 9.2
console.log(sum([])); // 0
console.log(sum([-2.398])); // -2.398