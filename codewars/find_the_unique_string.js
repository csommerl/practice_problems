/*
Find the unique string
https://www.codewars.com/kata/585d8c8a28bc7403ea0000c3/train/javascript

There is an array of strings. All strings contains similar letters except one. Try to find it!

Strings may contain spaces. Spaces are not significant, only non-spaces symbols matters.
E.g. string that contains only spaces is like empty string.

It’s guaranteed that array contains more than 3 strings.
*/

// // declarative
// function findUniq(arr) {
//   let simplified = arr.map(str => getUniqueChars(str));
  
//   let commonChars = simplified.find((str, idx) => {
//     return str === simplified[idx + 1] || str === simplified[idx + 2];
//   });

//   let uniqueIdx = simplified.findIndex(str => str !== commonChars);

//   return arr[uniqueIdx];
// }

console.log(findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]));  // 'BbBb'
console.log(findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]));  // 'foo'
console.log(findUniq([ 'silvia', 'vasili', 'victor' ])); // 'victor'
console.log(findUniq([ 'Tom Marvolo Riddle', 'I am Lord Voldemort', 'Harry Potter' ]));  // 'Harry Potter'
console.log(findUniq([ '    ', 'a', ' ' ])); // 'a'

// // imperatival
// function findUniq(arr) {
//   let searchStr = getUniqueChars(arr[0]) === getUniqueChars(arr[1]) ? getUniqueChars(arr[0]) : getUniqueChars(arr[2]);
//   return arr.find(str => getUniqueChars(str) !== searchStr);
// }

// imperatival
function findUniq(arr) {
  let searchStr;
  if (getUniqueChars(arr[0]) === getUniqueChars(arr[1])) {
    searchStr = getUniqueChars(arr[0]);
  } else {
    searchStr = getUniqueChars(arr[2]);
  }
  return arr.find(str => getUniqueChars(str) !== searchStr);
}

// perhaps could use filter
function getUniqueChars(str) {
  let allChars = str.toLowerCase().split('');
  let uniqueChars = [];
  allChars.forEach(char => {
    if (!uniqueChars.includes(char)) uniqueChars.push(char);
  })
  return uniqueChars.sort().join('');
}

/*
input: arr of strings
  - such that each array contains more than 3 strings
  - such that each string can contain spaces and even nothing but strings
output: the string that contains different letters from the other strings

rules:
  - spaces count as characters

One general method:
1. Get search string.
2. Find and return string that doesn't match search string.

procedural method:
1. Declare `searchStr1` and initialize with ''.
2. Declare `searchStr2` and initialize with ''.
3. For each character of the first element of `arr`, add to `searchStr1` if not already included.
4. For each character of the second element of `arr`, add to `searchStr2` if not already included.
5. If `searchStr1` is identical with `searchStr2':
  a. Find 

X. If `searchStr1` is not identical with `searchStr2`:
  a. 

declarative method:




map
sort

*/