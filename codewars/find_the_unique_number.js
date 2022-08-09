/*
Find the Unique Number
https://www.codewars.com/kata/585d7d5adb20cf33cb000235/train/javascript

There is an array with some numbers. All numbers are equal except for one. Try to find it!

It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.

This is the first kata in series:

Find the unique number (this kata)
Find the unique string (https://www.codewars.com/kata/585d8c8a28bc7403ea0000c3)
Find The Unique (https://www.codewars.com/kata/5862e0db4f7ab47bed0000e5)
*/

function findUniq(arr) {
  return arr.find(elem => arr.indexOf(elem) === arr.lastIndexOf(elem));
}

console.log(findUniq([ 1, 1, 1, 2, 1, 1 ])); // 2
console.log(findUniq([ 0, 0, 0.55, 0, 0 ])); // 0.55