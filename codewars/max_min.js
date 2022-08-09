// function max(arr) {
//   return Math.max(...arr);
// }

// function min(arr) {
//   return Math.min(...arr);
// }

// function max(arr) {
//   let max = arr[0];
//   arr.forEach(elem => {
//     if (elem > max) max = elem;
//   })
//   return max;
// }

// function min(arr) {
//   let min = arr[0];
//   arr.forEach(elem => {
//     if (elem < min) min = elem;
//   })
//   return min;
// }

// function max(arr) {
//   return [...arr].sort((a, b) => b - a)[0];
// }

// function min(arr) {
//   return [...arr].sort((a, b) => a - b)[0];
// }

function max(arr) {
  return arr.reduce((max, currentVal) => currentVal > max ? currentVal : max, arr[0]);
}

function min(arr) {
  return arr.reduce((min, currentVal) => currentVal < min ? currentVal : min, arr[0]);
}

console.log(min([-52, 56, 30, 29, -54, 0, -110])); // -110
console.log(min([42, 54, 65, 87, 0])); // 0
console.log(max([4,6,2,1,9,63,-134,566])); // 566
console.log(max([5])); // 5