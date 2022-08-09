/*
Sum without highest and lowest number
https://www.codewars.com/kata/576b93db1129fcf2200001e6/train/javascript
*/

function sumArray(array) {
  if (!array || array.length < 2) return 0;
  return array.reduce((a, b) => a + b, 0) - Math.min(...array) - Math.max(...array);
}

console.log(sumArray([6, 2, 1, 8, 10]));  // 16
console.log(sumArray([1, 1, 11, 2, 3]));  // 6
console.log(sumArray(null));  // 0
console.log(sumArray([]));  // 0
console.log(sumArray([3]));  // 0
console.log(sumArray([5]));  // 0