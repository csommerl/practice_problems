/*
Sum of a sequence
https://www.codewars.com/kata/586f6741c66d18c22800010a/train/javascript

input: three non-negative numbers
output: number that sums according to the rules


rules
- the step num determines which numbers to sum
- include in the sum the begin num
- if the end num is including in the steps, it is included in the sum
- If begin value is greater than the end, function should returns 0


1. Create sum variable and initialize to 0.
2. Loop as follows:
   - Start index at begin
   - continue loop while index is less than or equal to end
   - after each iteration, increment index by step
3. Within the loop body,
   - Add index to sum
4. Return sum.

*/

function sequenceSum(begin, end, step) {
  let sum = 0;

  for (let num = begin; num <= end; num += step) {
    sum += num;
  }

  return sum;
}

console.log(sequenceSum(2, 2, 2)); // 2
console.log(sequenceSum(2, 6, 2)); // 12
console.log(sequenceSum(1, 5, 1)); // 15
console.log(sequenceSum(1, 5, 3)); // 5