// https://www.codewars.com/kata/5648b12ce68d9daa6b000099/train/javascript

function number(busStops) {
  let riders = 0;

  busStops.forEach(busStop => {
    riders += busStop[0];
    riders -= busStop[1];
  });

  return riders;
}

// function number(busStops) {
//   return busStops.reduce((riders, stop) => {
//     riders += stop[0];
//     riders -= stop[1];
//     return riders;
//   }, 0);
// }

console.log(number([[10,0],[3,5],[5,8]]));  // 5
console.log(number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]])); // 17
console.log(number([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]));  // 21
console.log(number([[0,0]])); // 0

/*
input: array of integer pairs:
[[num of people that gets on bus, num of people that gets off], [x, y], ...]
output: positive integer
*/