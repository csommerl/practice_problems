// function getElemCounts(arr) {
//   return arr.reduce((counts, elem) => {
//     counts[elem] = counts[elem] ?? 0;
//     counts[elem] += 1;
//     return counts;
//   }, {});
// }

// Problem: what to do to distinguish between strings and numbers?

// initial solution
// function getElemCounts(arr) {
//   return arr.reduce((counts, elem) => {
//     const elemType = typeof elem;

//     counts[elemType][elem] = counts[elemType][elem] ?? 0;
//     counts[elemType][elem] += 1;
//     return counts;
//   },
//   {
//     string: {},
//     number: {}
//   }
//   );
// }

// // attempt
// function getElemCounts(arr) {
//   return arr.reduce((counts, elem) => {
//     const elemType = typeof elem;
//     counts[elemType] = counts[elemType] ?? {};
//     counts[elemType][elem] = counts[elemType][elem] ?? 0;
//     counts[elemType][elem] += 1;
//     return counts;
//   }, {});
// }

// another attempt
function getElemCounts(arr) {
  return arr.reduce((counts, elem) => {
    // get element type
    const elemType = typeof elem;

    // get or create subobject for the data type and create variable
    counts[elemType] = counts[elemType] ?? {};
    const typeSubObj = counts[elemType];

    // get or create count within subobject
    typeSubObj[elem] = typeSubObj[elem] ?? 0;
    typeSubObj[elem] += 1;

    return counts;
  }, {});
}

console.log(getElemCounts([0, '0', '0', 1, '1', 5, 5]));