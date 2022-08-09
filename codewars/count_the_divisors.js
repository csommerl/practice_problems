// function getDivisorsCnt(num) {
//   let count = 0;

//   for (let idx = 1; idx <= Math.sqrt(num); ++idx) {
//     if (num % idx === 0) {
//       count += (num / idx === idx ? 1 : 2);
//     }
//   }

//   return count;
// }

function getDivisorsCnt(num) {
  let count = 0;

  for (let idx = 1; idx <= num; ++idx) {
    if (num % idx === 0) count += 1;
  }

  return count;
}

console.log(getDivisorsCnt(1)); // 1
console.log(getDivisorsCnt(4)); // 3 (1, 2, 4)
console.log(getDivisorsCnt(5)); // 2 (1, 5)
console.log(getDivisorsCnt(10)); // 4
console.log(getDivisorsCnt(11)); // 2
console.log(getDivisorsCnt(12)); // 6 (1, 2, 3, 4, 6, 12)
console.log(getDivisorsCnt(30)); // 8 (1, 2, 3, 5, 6, 10, 15, 30)
console.log(getDivisorsCnt(54)); // 8