// Write a function that returns a list of all substrings of a string. Order the returned list by where in the string the substring begins. This means that all substrings that start at index position 0 should come first, then all substrings that start at index position 1, and so on. Since multiple substrings will occur at each position, return the substrings at a given index from shortest to longest.

/*
input: str
output: array containing all substrings

rules:
- a substring is any contiguous portion of a string.
- an empty string should return an empty aray
- the substrings should be ordered based on their starting character, and then sorted shortest to longest

Mental models:
- transofrmation of string to array
- reduction of string (made into array) to array
- Nested iteration with starting idx and ending idx.

1. Create data structure.
   a. Declare arr and initialize to empty array.
2. Populate data structure.
   a. Outer iteration over string: startIdx from 0 through string length - 1 (inclusive)
   b. Inner iteration: endIdx from startIdx + 1 through str length (inclusive)
   c. Get slice of string from startIdx to endIdx, and add to arr.
3. Return data structure / arr.
*/

function iterativeSubstrings(str) {
  const arr = [];

  for (let startIdx = 0; startIdx < str.length; ++startIdx) {
    for (let endIdx = startIdx + 1; endIdx <= str.length; ++endIdx) {
      arr.push(str.slice(startIdx, endIdx));
    }
  }

  return arr;
}

function reduceSubstrings(str) {
  return [...str].reduce((arr, _, startIdx) => {
    for (let endIdx = startIdx + 1; endIdx <= str.length; ++endIdx) {
      arr.push(str.slice(startIdx, endIdx));
    }
    return arr;
  }, []);
}

console.log(substrings('abcde')); // [ "a", "ab", "abc", "abcd", "abcde", "b", "bc", "bcd", "bcde", "c", "cd", "cde", "d", "de", "e" ]