// https://www.codewars.com/kata/5467e4d82edf8bbf40000155/train/javascript

function descendingOrder(int) {
  return +String(int)
    .split('')
    .map(digit => +digit)
    .sort((a, b) => b - a)
    .join('');
}

/*
input: non-negative integer
output: digits of the input in descending order
*/

console.log(descendingOrder(42145));  // 54421
console.log(descendingOrder(145263)); // 654321
console.log(descendingOrder(123456789));  // 987654321
console.log(descendingOrder(15)); // 51
console.log(descendingOrder(111));  // 111