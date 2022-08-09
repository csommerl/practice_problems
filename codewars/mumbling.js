/*
Mumbling
https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/javascript

The parameter of accum is a string which includes only letters from a..z and A..Z.

input: str including only alphabetical characters
output: str such that
  - each character is repeated for the number of times equivalent to its index in the input str + 1
  - the first instance of each character is capitalized, whereas the rest are lower case
  - each character set is separated by a hyphen

1. 
*/

// // declarative
// function accum(str) {
//   return str
//     .split('')  
//     .map((char, idx) => char.toUpperCase() + char.toLowerCase().repeat(idx))
//     .join('-');
// }

// imperatival
function accum(str) {
  let result = '';
  for (let idx = 0; idx < str.length; idx++) {
    let char = str[idx].toLowerCase();
    result += char.toUpperCase() + char.repeat(idx);
    if (idx < str.length - 1) result += '-';
  }
  return result;
}

console.log(accum("ZpglnRxqenU"));  // "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu"
console.log(accum("abcd"));  // "A-Bb-Ccc-Dddd"
console.log(accum("RqaEzty")); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
console.log(accum("cwAt"));  // "C-Ww-Aaa-Tttt"
console.log(accum('')); // ''