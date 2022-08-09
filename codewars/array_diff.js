// https://www.codewars.com/kata/523f5d21c841566fde000009/solutions/javascript

// function arrayDiff(arr1, arr2) {
//   let result = [];

//   for (let idx = 0; idx < arr1.length; idx++) {
//     let elem = arr1[idx];
//     if (arr2.includes(elem)) continue;
//     result.push(elem);
//   }

//   return result;
// }

function arrayDiff(arr1, arr2) {
  return arr1.filter(elem => !arr2.includes(elem));
}

console.log(arrayDiff([1, 2], [1])); // [2]
console.log(arrayDiff([1, 2, 2, 2, 3], [2])); // [1,3]