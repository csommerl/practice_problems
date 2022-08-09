/*
Write a function that returns a list of all substrings of a string.
Order the returned list by where in the string the substring begins.
This means that all substrings that start at index position 0 should come first,
  then all substrings that start at index position 1, and so on.
Since multiple substrings will occur at each position,
  return the substrings at a given index from shortest to longest.

You may (and should) use the leadingSubstrings function
  you wrote in the previous exercise:
*/

console.log(substrings('abcde'));
// returns [ "a", "ab", "abc", "abcd", "abcde", "b", "bc", "bcd", "bcde",
// "c", "cd", "cde", "d", "de", "e" ]

// function substrings(str) {
//   return [...str]
//     .map((_, idx) => str.slice(idx))
//     .map(leadingSubstrings)
//     .flat();
// }

/*
1. Create new array.
2. Iterate through str.
   a. Get substr beginning with current idx.
   b. Get leading substrings from that substr.
   c. Add leading substrings to new array.
3. Return new array.
*/

function leadingSubstrings(str) {
  return [...str].map((_, idx) => str.slice(0, idx + 1));
}

function substrings(str) {
  return [...str]
    .reduce((arr, _, idx) => arr.concat(leadingSubstrings(str.slice(idx))), []);
}