// In this little assignment you are given a string of space separated numbers,
// and have to return the highest and lowest number.

function highAndLow(numberString) {
  let numberArray = numberString.split(' ').map(numStr => Number(numStr));  // map isn't needed, since Math.max & Math.min automatically attempt to coerce arguments into numbers
  return `${Math.max(...numberArray)} ${Math.min(...numberArray)}`;
}

console.log(highAndLow("1 2 3 4 5"));  // return "5 1"
console.log(highAndLow("1 2 -3 4 5")); // return "5 -3"
console.log(highAndLow("1 9 3 4 -5")); // return "9 -5"