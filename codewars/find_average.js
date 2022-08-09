// function find_average(array) {
//   if (array.length) {
//     return array.reduce((accum, num) => accum + num, 0) / array.length;
//   } else {
//     return 0;
//   }
// }

function find_average(array) {
  return array.length ? array.reduce((accum, num) => accum + num, 0) / array.length : 0;
}

console.log(find_average([1,1,1]));
console.log(find_average([1,2,3]));
console.log(find_average([1,2,3,4]));
console.log(find_average([]));