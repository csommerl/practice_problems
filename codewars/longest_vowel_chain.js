/*
Longest vowel chain
https://www.codewars.com/kata/59c5f4e9d751df43cf000035/train/javascript

The vowel substrings in the word 'codewarriors' are o, e, a, io.
The longest of these has a length of 2.
Given a lowercase string that has alphabetic characters only (both vowels and consonants) and no spaces,
return the length of the longest vowel substring.
Vowels are any of aeiou.

*/

// function solve(str) {
//   const VOWELS = 'aeiou';

//   let longestVowelSubstring = '';
//   let currentVowelSubstring = '';

//   str.split('').forEach(char => {
//     if (currentVowelSubstring.length > longestVowelSubstring.length) longestVowelSubstring = currentVowelSubstring;
//     currentVowelSubstring = VOWELS.includes(char) ? currentVowelSubstring + char : '';
//   });

//   if (currentVowelSubstring.length > longestVowelSubstring.length) longestVowelSubstring = currentVowelSubstring;

//   return longestVowelSubstring.length;
// }

function solve(str) {
  const VOWELS = 'aeiou';

  let longestVowelSubstring = 0;
  let currentVowelSubstring = 0;

  str.split('').forEach(char => {
    if (currentVowelSubstring > longestVowelSubstring) longestVowelSubstring = currentVowelSubstring;
    currentVowelSubstring = VOWELS.includes(char) ? currentVowelSubstring + 1 : 0;
  });

  if (currentVowelSubstring > longestVowelSubstring) longestVowelSubstring = currentVowelSubstring;

  return longestVowelSubstring;
}

const print = str => console.log(str);

/*
PEDAC

input: lowercase string consisting of alphabetic characters
output: integer representing the longest vowel substring.

A
1. Declare constant `VOWELS` and initialize with the string value `'aeiou'`.
2. Declare variable `longestVowelSubstring` and initialize with the string value `''`.
3. Declare variable `currentVowelSubstring` and initialize with the string value `''`.
4. Get `longestVowelSubstring`.
   a. Iterate over each `char` in `str`.
   b. If `char` is a vowel, add to `longestVowelSubstring`.
   c. If `char` isn't a vowel, compare `currentVowelSubstring`
      to `longestVowelSubstring`, replace it if longer, and assign '' to `currentVowelSubstring`.
5. Compare `currentVowelSubstring` to `longestVowelSubstring`,
   replace it if longer, and assign '' to `currentVowelSubstring`.
6. Return length of `longestVowelSubstring`.

Can use reduce?

*/

print(solve('codewarriors')); // 2
print(solve('suoidea'));  // 3
print(solve('aeddaaaaa')); // 5
print(solve('eeeeeeeeeebce'));  // 10