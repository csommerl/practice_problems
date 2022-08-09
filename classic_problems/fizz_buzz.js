/* https://eloquentjavascript.net/02_program_structure.html
Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).


*/


function fizzBuzz() {
  for (let idx = 1; idx <= 100; ++idx) {
    let str = idx % 3 === 0 ? 'Fizz' : '';
    str += idx % 5 === 0 ? 'Buzz' : '';
    str = str.length ? str : String(idx);
    console.log(str);
  }
}

// function fizzBuzz() {
//   for (let idx = 1; idx <= 100; ++idx) {
//     let str = idx % 3 === 0 ? 'Fizz' : '';
//     str += idx % 5 === 0 ? 'Buzz' : '';
//     if (str.length) console.log(str);
//   }
// }

// function fizzBuzz() {
//   const fizzDivisor = 3;
//   const buzzDivisor = 5;
//   const [startIdx, endIdx] = [1, 100];

//   for (let idx = startIdx; idx <= endIdx; ++idx) {
//     let printString = '';
//     if (idx % fizzDivisor === 0) printString += 'Fizz';
//     if (idx % buzzDivisor === 0) printString += 'Buzz';
//     if (printString.length) console.log(printString);
//   }
// }

fizzBuzz();