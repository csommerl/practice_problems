// https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/train/javascript

// function reverseWords(str) {
//   let strParts = [''];
//   for (let char of str) {
//     if (/\s/.test(char)) {
//       strParts.push(char);
//     } else if (strParts[strParts.length - 1] === ' ') {
//       strParts.push(char);
//     } else {
//       strParts[strParts.length - 1] += char;
//     }
//   }
//   let reversedParts = [];
//   for (let part of strParts) {
//     reversedParts.push(part.split('').reverse().join(''));
//   }
//   return reversedParts.join('');
// }

function reverseWords(str) {
  return str
    .split(' ')
    .map(word => word.split('').reverse().join(''))
    .join(' ');
}

console.log(reverseWords("This is an example!"));  // "sihT si na !elpmaxe"
console.log(reverseWords("double  spaces"));  // "elbuod  secaps"
console.log(reverseWords('The quick brown fox jumps over the lazy dog.'));  // 'ehT kciuq nworb xof spmuj revo eht yzal .god')
console.log(reverseWords('triple   spaces'));