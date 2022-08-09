// https://www.codewars.com/kata/52efefcbcdf57161d4000091/train/javascript

// function count(str) {
//   let countObj = {};

//   str
//     .split('')
//     .forEach(char => {
//       countObj[char] = countObj[char] || 0;
//       countObj[char] += 1;
//     });

//   return countObj;
// }

function count(str) {
  let countObj = {};
  for (let char of str) {
    countObj[char] = countObj[char] ? countObj[char] += 1 : 1;
  }
  return countObj;
}

console.log(count("aba")); // { a: 2, b: 1 }
console.log(count(""));  // {}