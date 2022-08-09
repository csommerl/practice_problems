/*
https://www.codewars.com/kata/5808ff71c7cfa1c6aa00006d/train/javascript
In this kata, you've to count lowercase letters in a given string
and return the letter count in a hash
with 'letter' as key and count as 'value'.
The key must be 'symbol' instead of string in Ruby
and 'char' instead of string in Crystal.
*/

// function letterCount(str) {
//   let count = {};

//   str.split('').forEach(char => {
//     count[char] = count[char] || 0;
//     count[char] += 1;
//   });

//   return count;
// }

// function letterCount(str) {
//   return str
//     .split('')
//     .reduce((countObj, char) => {
//       if (countObj[char]) {
//         countObj[char] += 1;
//       } else {
//         countObj[char] = 1;
//       }
//       return countObj;
//     }, {});
// }

function letterCount(str) {
  return str
    .split('')
    .reduce((countObj, char) => {
      countObj[char] = countObj[char] ? countObj[char] + 1 : 1;
      return countObj;
    }, {});
}

console.log(letterCount('arithmetics'));  // {"a": 1, "c": 1, "e": 1, "h": 1, "i": 2, "m": 1, "r": 1, "s": 1, "t": 2}
