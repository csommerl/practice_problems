/*
Maximum subarray sum
https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c/train/javascript

find the maximum sum of a contiguous subsequence in an array or list of integers:

https://medium.com/@rsinghal757/kadanes-algorithm-dynamic-programming-how-and-why-does-it-work-3fd8849ed73d

1. Declare variable `max` and initialize the input array.
2. 
X. Get the sum of the integers of `max` and return it.

*/

// // brute force
// function maxSequence(arr) {
//   const sum = (a, b) => a + b;

//   let max = 0;

//   for (let startIdx = 0; startIdx < arr.length; startIdx++) {
//     for (let endIdx = startIdx + 1; endIdx <= arr.length; endIdx++) {
//       let subArrSum = arr.slice(startIdx, endIdx).reduce(sum, 0);
//       max = Math.max(subArrSum, max);
//     }
//   }

//   return max;
// }

// Kadane’s Algorithm / Dynamic Programming
function maxSequence(arr) {
  let currentSum = 0;
  let maxSum = 0;

  for (let idx = 0; idx < arr.length; idx++) {
    let currentElem = arr[idx];
    currentSum = Math.max(0, currentSum + currentElem); // will retain all sequential sums until canceled out
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

// console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // should be 6: [4, -1, 2, 1]
console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 6]));  // 7: [4, -1, 2, 1, -5, 6]

/*

*/


/*
Difficulty: how does the algorithm know to keep or discard an early large number when it's followed by negative numbers?
Answer: if the negative numbers after it cancel it out, there's no point in retaining it. Either you go with
the early large number or with what comes after the negative numbers.
*/

// https://pythontutor.com/render.html#mode=display