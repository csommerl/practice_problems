/* https://www.codewars.com/kata/563cf89eb4747c5fb100001b/train/javascript
- input: array of integers
- output: a new array of integers, with the lowest integer removed

rules:
- don't mutate the original array
- if there are multiple elements with the same value,
  remove the one with the earliest index
- return an empty array if an empty array is passed to the function

Algo:
1. create copy of numbers array
2. find index of number that is less than or equal to
   all elements of the copy array
3. remove the element with that index
4. return the copy array
*/

// function removeSmallest(numbers) {
//   let copyOfNumbers = [...numbers];
//   let lowestNumIndex = copyOfNumbers.findIndex((elem1, _, arr) => {
//     return arr.every((elem2) => elem1 <= elem2);
//   });
//   copyOfNumbers.splice(lowestNumIndex, 1);
//   return copyOfNumbers;
// }

function removeSmallest(numbers) {
  let idxOfMin = numbers.indexOf(Math.min(...numbers));
  let copyOfNumbers = [...numbers];
  copyOfNumbers.splice(idxOfMin, 1);
  return copyOfNumbers;
}

console.log(removeSmallest([1,2,3,4,5]));  // [2, 3, 4, 5]
console.log(removeSmallest([5,3,2,1,4])); // [5,3,2,4]
console.log(removeSmallest([2,2,1,2,1])); // [2,2,2,1]
console.log(removeSmallest([]));  // []