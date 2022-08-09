// Given two variables, x, and y,
// swap two variables without using a third variable.

let x = 5;
let y = 10;

y = x + y;
x = y - x;
y = y - x;
console.log({x, y});