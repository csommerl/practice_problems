/*
input: array of strings, integer k
output: first longest string consisting ot k consecutive strings taken in the array

Example 1
strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2

Concatenate the consecutive strings of strarr by 2, we get:

treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]
trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]
blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]
abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]

Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
The first that came is "folingtrashy" so 
longest_consec(strarr, 2) should return "folingtrashy".

In the same way:
longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"

1. Get consecutive strings.
   - Iterate from 0 to length - k
2. Get longest length consecutive string
*/

function longestConsec(strArr, k) {
  if (k <= 0 || k > strArr.length) return '';
  let consecStrs = getConsecStrs(strArr, k);
  return getLongestElem(consecStrs);
}

function getLongestElem(arr) {
  let longest = arr[0];

  for (let idx = 1; idx < arr.length; ++idx) {
    if (arr[idx].length > longest.length) longest = arr[idx];
  }

  return longest;
}

function getConsecStrs(arr, num) {
  let consecStrs = [];

  for (let idx1 = 0; idx1 <= arr.length - num; ++idx1) {
    let str = '';

    for (let idx2 = idx1; idx2 < idx1 + num; ++idx2) {
      str += arr[idx2];
    }

    consecStrs.push(str);
  }

  return consecStrs;
}

console.log(longestConsec(["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], 2)); // 'folingtrashy'
console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2)); // "abigailtheta"
console.log(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1)); // "oocccffuucccjjjkkkjyyyeehh"
// console.log(longestConsec([], 3)); // ""
console.log(longestConsec(["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv","vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2)); // "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck"
console.log(longestConsec(["wlwsasphmxx","owiaxujylentrklctozmymu","wpgozvxxiu"], 2)); // "wlwsasphmxxowiaxujylentrklctozmymu"
// console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2)); // ""
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3)); // "ixoyx3452zzzzzzzzzzzz"
// console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 15)); // ""
// console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 0)); // ""