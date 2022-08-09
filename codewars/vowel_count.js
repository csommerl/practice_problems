// https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript

// function getCount(str) {
//   const VOWELS = 'aeiouAEIOU';
//   let vowelsCount = 0;
//   for (let char of str) {
//     if (VOWELS.includes(char)) vowelsCount++;
//   }
//   return vowelsCount;
// }

// function getCount(str) {
//   let vowelsCount = str.match(/[aeiou]/gi) || [];
//   return vowelsCount.length;
// }

function getCount(str) {
  return (str.match(/[aeiou]/gi) || []).length;
}

console.log(getCount('aeiou'));