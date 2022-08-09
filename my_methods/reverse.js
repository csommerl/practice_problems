/*
Method one:
1. create a new array
2. empty elements of original
3. add elements of new array

Method 2
1. Iterate from 0 up to but not including midpoint (array length / 2).
   Start at index 0, increment by 1.
   - midpoint of [] === 0
   - midpoint of [1] === .5
   - midpoint of [1, 2] === 1
2. On each iteration:
   a. Get endIdx = array.length - 1 - startIdx
   b. Get startElem: element at startIdx
   c. Get endElem: element at endIdx
   d. Splice
3. Return arr.

Example: [1, 2, 3, 4, 5, 6]
- midpoint: 3
- first: 0 => 1; last: 5 => 6
- first: 1 => 2; last: 4 => 5
- first: 2 => 3; last: 3 => 4
*/

function myReverse(arr) {
  const midPoint = arr.length / 2;

  for (let idx1 = 0; idx1 < midPoint; ++idx1) {
    let idx2 = arr.length - 1 - idx1;
    let [elem1, elem2] = [arr[idx1], arr[idx2]];
    arr.splice(idx1, 1, elem2);
    arr.splice(idx2, 1, elem1);
  }

  return arr;
}

console.log(myReverse([])); // []
console.log(myReverse([1])); // [1]
console.log(myReverse([1, 2])); // [2, 1]
console.log(myReverse([1, 2, 3])); // [3, 2, 1]
console.log(myReverse([1, 2, 3, 4, 5, 6])); // [6, 5, 4, 3, 2, 1]