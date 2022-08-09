/*
https://www.codewars.com/kata/5c55ad8c9d76d41a62b4ede3/train/javascript

You are given array of integers,
your task will be to count all pairs in that array and return their count.

Notes:
- Array can be empty or contain only one value; in this case return 0
- If there are more pairs of a certain number, count each pair only once.
  E.g.: for [0, 0, 0, 0] the return value is 2 (= 2 pairs of 0s)
- Random tests: maximum array length is 1000,
  range of values in array is between 0 and 1000.
*/

// // with obj
// function duplicates(arr) {
//   let countsObj = {};

//   arr.forEach(integer => {
//     countsObj[integer] = countsObj[integer] || 0;
//     countsObj[integer] += 1;
//     // countsObj[integer] = countsObj[integer] ? countsObj[integer] + 1 : 1;
//   });

//   let countOfPairs = 0;

//   for (const prop in countsObj) {
//     countOfPairs += Math.floor(countsObj[prop] / 2);
//   }

//   return countOfPairs;
// }

function duplicates(arr) {
  let sortedArr = [...arr].sort((a, b) => a - b);

  let countOfPairs = 0;

  while (sortedArr.length) {
    if (sortedArr[0] === sortedArr[1]) {
      countOfPairs += 1;
      sortedArr.splice(0, 2);
    } else {
      sortedArr.splice(0, 1);
    }
  }

  return countOfPairs;
}

console.log(duplicates([1, 2, 5, 6, 5, 2]));  // 2
console.log(duplicates([1, 2, 2, 20, 6, 20, 2, 6, 2])); // 4
console.log(duplicates([]));  // 0
console.log(duplicates([1]));  // 0
console.log(duplicates([1, 2, 3, 4, 5]));  // 0

/*
PEDAC

P
- input: array of integers
  - each integer is a value between 0 and 1000
  - maximum length of array is 1000
- output: integer representing the count of pairs
- rules:
  - if the array is empty, return 0
  - if the array contains only one value, return 0
  - if there are multiple pairs of an integer (e.g., 4 instances of '3'),
    each instance is to be counted only once

D
- option 1: create a copy of the array and a count variable,
  removing counted elements one-by-one
- option 2: create an object with counts

A
1. Initialize object `countsOfIntegers`
2. Iterate through array, updating `countsOfIntegers`
3. Create `countOfPairs`, initialized with the value of `0`
4. Update `countOfPairs` using `countOfIntegers`
  -  Iterate over each property, counting pairs
5. return `countOfPairs`

*/