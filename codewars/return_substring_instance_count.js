/*
https://www.codewars.com/kata/5168b125faced29f66000005/train/javascript

function returns the number of times searchText is found within fullText
*/

// function solution(fullText, searchText) {
//   let re = new RegExp(searchText, 'g');
//   let matches = fullText.match(re);
//   return matches ? matches.length : 0;
// }

function solution(fullText, searchText) {
  let matches = fullText.match(new RegExp(searchText, 'g'));
  return matches ? matches.length : 0;
}

console.log(solution('aa_bb_cc_dd_bb_e', 'bb'));  // 2
console.log(solution('aaabbbcccc', 'bbb'));  // 1
console.log(solution('abc', 'd'));  // 0

/*
PEDAC

input: two strings
output: integer

edge cases:
- fullText 'abbbbc' and searchText 'bb': is this 2 matches or 3?
- I'll assume 2

A
1. Declare `matches` variable and initialize with 0
2.

*/