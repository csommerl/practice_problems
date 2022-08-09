/*
Money, Money, Money
https://www.codewars.com/kata/563f037412e5ada593000114/train/javascript
*/

function calculateYears(principal, interestRate, taxRate, desired) {
  let sum = principal;
  let years = 0;

  while (sum < desired) {
    let interest = sum * interestRate;
    let tax = interest * taxRate;
    sum = sum + interest - tax;
    years += 1;
  }

  return years;
}

console.log(calculateYears(1000, 0.05, 0.18, 1100)); // 3
console.log(calculateYears(1000,0.01625,0.18,1200)); // 14
console.log(calculateYears(1000,0.05,0.18,1000));  // 0