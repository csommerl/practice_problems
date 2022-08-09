// function isPrime(num) {
//   if (num === 2) return true;

//   if (num <= 1 || num % 2 === 0) return false;

//   for (let idx = 3; idx <= Math.sqrt(num); idx += 2) {
//     if (num % idx === 0) return false;
//   }

//   return true;
// }

console.log(isPrime(3));

//Simpler
function isPrime(num) {
  if (num <= 1) return false;

  for (let idx = 2; idx <= Math.sqrt(num); ++idx) {
    if (num % idx) continue;
    return false;
  }

  return true;
}