// Implement the function uniqueInOrder which takes as argument a sequence
//  and returns a list of items without any elements with the same value next
// to each other and preserving the original order of elements.

// function uniqueInOrder(sequence) {
//   let uniqueValues = [];

//   for (let value of sequence) {
//     let previousUnique = uniqueValues[uniqueValues.length - 1];
//     if (value !== previousUnique) uniqueValues.push(value);
//   }

//   return uniqueValues;
// }

// function uniqueInOrder(sequence) {
//   let uniqueValues = [];

//   for (let idx = 0; idx < sequence.length; idx++) {
//     let currentValue = sequence[idx];
//     let previousUnique = uniqueValues[uniqueValues.length - 1];
//     if (currentValue !== previousUnique) uniqueValues.push(currentValue);
//   }

//   return uniqueValues;
// }

function uniqueInOrder(sequence) {
  let uniqueValues = [sequence[0]];

  for (let idx = 1; idx < sequence.length; idx++) {
    let currentValue = sequence[idx];
    let previousUnique = uniqueValues[uniqueValues.length - 1];
    if (currentValue !== previousUnique) uniqueValues.push(currentValue);
  }

  return uniqueValues;
}


console.log(uniqueInOrder('AAAABBBCCDAABBB')); // ['A', 'B', 'C', 'D', 'A', 'B']
console.log(uniqueInOrder('ABBCcAD'));         // ['A', 'B', 'C', 'c', 'A', 'D']
console.log(uniqueInOrder([1,2,2,3,3]));       // [1,2,3]

