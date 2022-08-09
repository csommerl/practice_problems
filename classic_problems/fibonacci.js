// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...

// non recursive
function fibonacci(num) {
  let first = 0;
  let second = 0;
  let fib = 0;

  for (let idx = 0; idx <= num; ++idx) {
    if (idx === 1) {
      fib = 1;
      continue;
    }

    first = second;
    second = fib;
    fib = first + second;
  }

  return fib;
}

// // recursive
// function fibonacci(num) {
//   if (num <= 1) {
//     return num;
//   } else {
//     return fibonacci(num - 1) + fibonacci(num - 2);
//   }
// }

console.log(fibonacci(0)); // 0
console.log(fibonacci(1)); // 1
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(5));
console.log(fibonacci(6));
console.log(fibonacci(7));
console.log(fibonacci(8));
console.log(fibonacci(100));