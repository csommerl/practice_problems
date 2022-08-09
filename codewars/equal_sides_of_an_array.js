/*
Equal Sides Of An Array
https://www.codewars.com/kata/5679aa472b8f57fb8c000047/train/javascript

You are going to be given an array of integers.
Your job is to take that array and find an index N where
the sum of the integers to the left of N is equal to
the sum of the integers to the right of N.
If there is no index that would make this happen, return -1.

Input:
An integer array of length 0 < arr < 1000.
The numbers in the array can be any integer positive or negative.

Output:
The lowest index N where the side to the left of N is equal to
the side to the right of N.
If you do not find an index that fits these rules, then you will return -1.
*/

// function findEvenIndex(arr) {
//   return arr.findIndex((_, idx) => {
//     let leftSum = arr.slice(0, idx).reduce((a, b) => a + b, 0);
//     let rightSum = arr.slice(idx + 1).reduce((a, b) => a + b, 0);
//     return leftSum === rightSum;
//   });
// }

function findEvenIndex(arr) {
  const sumArrSlice = (arr, startIdx, endIdx) => {
    return arr.slice(startIdx, endIdx).reduce((a, b) => a + b, 0);
  };

  return arr.findIndex((_, idx) => {
    return sumArrSlice(arr, 0, idx) === sumArrSlice(arr, idx + 1, arr.length);
  });
}

console.log(findEvenIndex([1,2,3,4,3,2,1])); // 3, "The array was: [1,2,3,4,3,2,1] \n");
console.log(findEvenIndex([1,100,50,-51,1,1]));  // 1, "The array was: [1,100,50,-51,1,1] \n");
console.log(findEvenIndex([1,2,3,4,5,6])); // -1, "The array was: [1,2,3,4,5,6] \n");
console.log(findEvenIndex([20,10,30,10,10,15,35]));  // 3, "The array was: [20,10,30,10,10,15,35] \n");