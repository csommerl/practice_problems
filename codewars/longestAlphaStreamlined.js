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
1. Declare longestSubstr and set to ''.
2. Declare currentSubstr and set to ''.
3. Iterate through characters of string (no indices needed => for ... of) (**** trickiness about how to order*****)
    a. If currentSubstr is empty,
        add character and continue to next iteration.
    b. Else if character code of current character is >= character code of last character of currentSubstr,
        add character to currentSubstr and continue to next iteration.
    c. Else if currentSubstr length is longer than longestSubstr, set latter to former
    d. Set currentSubstr to current character
4. If currentSubstr is shorter than longestSubstr, set latter to former.(necessary????****)
5. Return longestSubstr.
*/

function longest(str) {
  let longestSub = '';
  let current = '';

  for (let char of str) {
    current = isAlphaOrdered(current + char) ? current + char : char;
    longestSub = current.length > longestSub.length ? current : longestSub;
  }

  return longestSub;
}

function isAlphaOrdered(str) {
  return [...str].every((char, idx) => {
    return idx === 0 || char.charCodeAt(0) >= str.charCodeAt(idx - 1);
  });
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

sampleTests.forEach(sampleTest => console.log(longest(sampleTest[0])));