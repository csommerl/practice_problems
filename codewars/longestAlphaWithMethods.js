/*
Find the longest substring in alphabetical order.
Example: the longest alphabetical substring in "asdfaaaabbbbcttavvfffffdf" is "aaaabbbbctt".
There are tests with strings up to 10 000 characters long so your code will need to be efficient.
The input will only consist of lowercase characters and will be at least one letter long.
If there are multiple solutions, return the one that appears first.

input: string
output: substring

rules
- case-insensitive because all characters are lowercase
- the input string will be at least one character long (in that case, that character will be returned)
  - probably no need for a guard clause
- a string's characters are in alphabetical order when
  each character's character code is greater than or equal to the previous character's character code

mental models
- get all substrings => find the substring that appears first in the original string and whose characters are in alphabetical order
- Iterate with longest & current

Data structures
- arr of substrings?
- simple variables of longest so far and current
  - current is reset when the character code is less than the previous

Algorithm
1. Get substrings.
    - nested for loops
2. Filter substrings for those that are alphabetically ordered.
    - is
3. Filter again for the longest.
4. Get the substring with the earliest index. (reduce)
    - autmotically happens

*/

function getSubstrings(str) {
  let substrings = [];

  for (let firstIdx = 0; firstIdx < str.length; ++firstIdx) {
    for (let lastIdx = firstIdx + 1; lastIdx <= str.length; ++lastIdx) {
      substrings.push(str.slice(firstIdx, lastIdx));
    }
  }

  return substrings;
}

function isAlphaOrdered(str) {
  return [...str].every((char, idx) => {
    return idx === 0 || char.charCodeAt(0) >= str.charCodeAt(idx - 1);
  });
}

function longest(str) {
  return getSubstrings(str)
    .filter(isAlphaOrdered)
    .reduce(previousShorterThanCurrentStr);
}

function previousShorterThanCurrentStr(previousStr, currentStr) {
  return previousStr.length < currentStr.length ? currentStr : previousStr;
}

const sampleTests = [
  ['asd', 'as'],
  ['nab', 'ab'],
  ['abcdeapbcdef', 'abcde'],
  ['asdfaaaabbbbcttavvfffffdf', 'aaaabbbbctt'],
  ['dfaaa', 'aaa'],
  ['asdfbyfgiklag', 'fgikl'],
  ['z', 'z'],
  ['zyba', 'z']
];

sampleTests.forEach(sampleTest => {
  console.log(longest(sampleTest[0]));
});

console.log(isAlphaOrdered(''));