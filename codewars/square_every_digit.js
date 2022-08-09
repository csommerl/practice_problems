// https://www.codewars.com/kata/546e2562b03326a88e000020/train/javascript

function squareDigits(int) {
  let result = '';
  for (let digit of String(int)) {
    result += Number(digit) ** 2;
  }
  return Number(result);
}

console.log(squareDigits(9119));  // 811181