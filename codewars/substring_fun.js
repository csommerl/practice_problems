/*
Substring Fun
https://www.codewars.com/kata/565b112d09c1adfdd500019c/train/javascript

Complete the function that takes an array of words.
You must concatenate the nth letter from each word
to construct a new word which should be returned as a string,
where n is the position of the word in the list.

Note: Test cases contain valid input only,
i.e. a string array or an empty array; and each word will have enough letters.
*/

// function nthChar(words) {
//   let result = '';

//   for (let idx = 0; idx < words.length; idx++) {
//     result += words[idx][idx];
//   }

//   return result;
// }

function nthChar(words) {
  return words.reduce((accum, word, idx) => accum + word[idx], '');
}

console.log(nthChar([])); // ''
console.log(nthChar(['yoda', 'best', 'has']));  // 'yes'