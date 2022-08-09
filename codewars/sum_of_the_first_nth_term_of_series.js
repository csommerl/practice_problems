/*
Sum of the first nth term of Series
https://www.codewars.com/kata/555eded1ad94b00403000071/train/javascript

Your task is to write a function which returns the sum of following series upto nth term(parameter).

Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
(first member = 1/1)
1, 4, 7, 10

Rules:
- You need to round the answer to 2 decimal places and return it as String.
- If the given value is 0 then it should return 0.00
- You will only be given Natural Numbers as arguments.
*/

function SeriesSum(num) {
  let sum = 0;
  let denominator = 1;

  for (let idx = 0; idx < num; idx++) {
    let seriesMember = 1 / denominator;
    sum += seriesMember;
    denominator += 3;
  }

  return sum.toFixed(2).toString();
}

console.log(SeriesSum(0)); // '0.00'
console.log(SeriesSum(1)); // 1 --> 1 --> "1.00"
console.log(SeriesSum(2)); // 2 --> 1 + 1/4 --> "1.25"
console.log(SeriesSum(5)); // 5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"

/*
PEDAC
input: integer
output: string representing sum of series

1. Declare variable `sum` and initialize with `0`.
2. Declare and initialize `denominator` with `1`.
3. Iterate beginning with an initialization of 0 up to `num`.
  a. Declare and initialize `seriesMember` with 1 divided by denominator.
  b. Add `seriesMember` to `sum`.
  c. Add 3 to `denominator`.
X. Convert `sum` to a fixed point number and coerce into a string and return.
*/