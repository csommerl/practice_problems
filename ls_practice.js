/*
8-2-22 Problem 1
Problem Description
Write a function to find the longest common prefix string
amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:
Input: ["flower","flow","flight"]
Output: "fl"

Example 2:
Input: ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

Note:
All given inputs are in lowercase letters a-z.
*/

function commonPrefix(strArr) {
  if (strArr.includes('')) return '';

  let common = strArr[0];
  let idx = 1;

  while (idx < strArr.length) {
    let currStr = strArr[idx];

    while (!currStr.startsWith(common)) {
      common = common.slice(0, common.length - 1);
      if (common.length === 0) break;
    }

    ++idx;
  }

  return common;
}

console.log(commonPrefix(["flower", "flow", "flight"]) === "fl"); // true
console.log(commonPrefix(["dog", "racecar", "car"])  === ""); // true
console.log(commonPrefix(["interspecies", "interstellar", "interstate"]) === "inters"); // true
console.log(commonPrefix(["throne", "dungeon"]) === ""); // true
console.log(commonPrefix(["throne", "throne"]) === "throne"); // true