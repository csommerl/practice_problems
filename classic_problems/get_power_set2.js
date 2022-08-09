/*
What is the special trick that helps here, that I couldn't come up with?
- getting copies of the currently existing elements of powerSet
- iterating over the previously added elements of the array to be returned

Rules / Why the below algorithm works:
- With respect to every other element and combination of elements,
  for any given element, the power set will contain
  1. a subarray with that element absent
  2. a subarray with that element present

Algorithm
1. Create powerSet array, containing only one empty array.
2. Iterate through each element of arr.
   a. Create a deepCopy of the existing powerSet array.
   b. For each subarray within deepCopy, add element.
   c. Add each subarray of deepCopy to powerSet array.
3. Return powerSet.
*/

// procedural with helper functions
function getPowerSet(arr) {
  const powerSet = [[]];

  for (let arrIdx = 0; arrIdx < arr.length; ++arrIdx) {
    let elem = arr[arrIdx];
    let deepCopy = getTwoLevelCopy(powerSet);

    for (let deepCopyIdx = 0; deepCopyIdx < deepCopy.length; ++deepCopyIdx) {
      let subArr = deepCopy[deepCopyIdx];
      subArr.push(elem);
      powerSet.push(subArr);
    }
  }

  return powerSet;
}

function getTwoLevelCopy(arr) {
  let twoLevelCopy = [];

  for (let arrIdx = 0; arrIdx < arr.length; ++arrIdx) {
    let subArr = arr[arrIdx];
    let subArrCopy = [];

    for (let subArrIdx = 0; subArrIdx < subArr.length; ++subArrIdx) {
      subArrCopy.push(subArr[subArrIdx]);
    }

    twoLevelCopy.push(subArrCopy);
  }

  return twoLevelCopy;
}

// // procedural
// function getPowerSet(arr) {
//   const powerSet = [[]];

//   for (let arrIdx = 0; arrIdx < arr.length; ++arrIdx) {
//     let elem = arr[arrIdx];
//     let newSets = [];

//     for (let powerSetIdx = 0; powerSetIdx < powerSet.length; ++powerSetIdx) {
//       let newSet = [...powerSet[powerSetIdx]];
//       newSet.push(elem);
//       newSets.push(newSet);
//     }

//     for (let newSetsIdx = 0; newSetsIdx < newSets.length; ++newSetsIdx) {
//       powerSet.push(newSets[newSetsIdx]);
//     }
//   }

//   return powerSet;
// }

// // best declarative:
// // concat needed to avoid modifying the subarrays of powerSet
// function getPowerSet(arr) {
//   const powerSet = [[]];

//   arr.forEach(elem => {
//     [...powerSet]
//       .map(set => set.concat(elem))
//       .forEach(set => powerSet.push(set));
//   });

//   return powerSet;
// }

// // original declarative
// function getPowerSet(arr) {
//   const powerSet = [[]];

//   for (let elem of arr) {
//     let newSets = [...powerSet].map(set => set.concat(elem));
//     newSets.forEach(set => powerSet.push(set));
//   }

//   return powerSet;
// }

console.log(getPowerSet([]));
console.log(getPowerSet([1]));
console.log(getPowerSet([1, 3]));
console.log(getPowerSet([1, 3, 5]));
// console.log(getPowerSet([3, 5, 9, 15]));
// console.log(getPowerSet([3, 5, 9, 15, 26, 27, 28]));