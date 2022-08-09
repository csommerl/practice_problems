/*
Given two arrays a and b write a function comp(a, b) (orcompSame(a, b))
that checks whether the two arrays have the "same" elements,
with the same multiplicities (the multiplicity of a member is the number of times it appears).
"Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

a or b might be [] or {} (all languages except R, Shell).

If a or b are nil (or null or None, depending on the language), the problem doesn't make sense so return false.
*/

// function comp(arr1, arr2) {
//   if (arr1 === null || arr2 === null) return false;

//   let sortedArr1 = [...arr1].sort((a, b) => a - b);
//   let sortedArr2 = [...arr2].sort((a, b) => a - b);

//   for (let idx = 0; idx < sortedArr1.length; idx++) {
//     if (sortedArr1[idx] ** 2 !== sortedArr2[idx]) return false;
//   }

//   return true;
// }

function comp(arr1, arr2) {
  if (arr1 === null || arr2 === null) return false;

  let sortedArr1 = [...arr1].sort((a, b) => a - b);
  let sortedArr2 = [...arr2].sort((a, b) => a - b);

  return sortedArr1
    .map(elem => Math.pow(elem, 2))
    .every((elem, idx) => elem === sortedArr2[idx]);
}

let a1 = [121, 144, 19, 161, 19, 144, 19, 11];
let a2 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19];
let b = [132, 14641, 20736, 361, 25921, 361, 20736, 361];

console.log(comp(null, 5)); // false
console.log(comp(a1, a2));  // true
console.log(comp(a1, b)); // false

/*
PEDAC

*/