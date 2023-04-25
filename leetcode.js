/*
https://leetcode.com/problems/search-insert-position/

input: array

rules
- nums contains distinct values sorted in ascending order.
- if target is in array, return index of array
- if target isn't in array, then return
  - index of length of array, if it's bigger than last element
  - index of 0 if it's smaller than first element
  - index after the next smallest number and before next largest number

Algo
- Set left to 0 and right to length - 1
- Iterate while ?????
  - set mid to (left + ~~((right - left) / 2))
  - if target < midNum, set right to --mid
  - if target > midNum, set left to ++ mid
  - else return mid
- 

[1, 3, 5, 6]

target 8, return 4
l 0 = 1 , 2 = 5 , 3 = 6
r 3 = 6 , 3 = 6 , 3 = 6
m 1 = 3 , 2 = 5 , 3 = 6
stop when l === m, return r + 1

target 2, return 1
l 0 = 1 , 0 = 1
r 3 = 6 , 0 = 1
m 1 = 3 , 0 = 1
stop when l === m, return r + 1

target 5, return 2
l 0 = 1 , 2 = 5
r 3 = 6 , 3 = 6
m 1 = 3 , 2 = 5
return mid when target === mid

target 0, return 0
left  0 = 1 , 0 = 1
right 3 = 6 , 0 = 1
mid   1 = 3 , 0 = 1
return mid/left/right when they equal
*/

let arr1 = [1, 3, 5, 6];
console.log(searchInsert(arr1, 0)); // 0
console.log(searchInsert(arr1, 5)); // 2
console.log(searchInsert(arr1, 2)); // 1
console.log(searchInsert(arr1, 8)); // 4

function searchInsert(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);

    if (target < nums[mid]) {
      right = --mid;
    } else if (target > nums[mid]) {
      left = ++mid;
    } else {
      return mid;
    }
  }
  console.log({left, right});
  return target > nums[left] ? left + 1 : left;
}

let arr2 = [1, 3, 5, 6, 7];
console.log(searchInsert(arr2, 0)); // 0
console.log(searchInsert(arr2, 5)); // 2
console.log(searchInsert(arr2, 2)); // 1
console.log(searchInsert(arr2, 8)); // 5