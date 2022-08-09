/*
Kebabize
https://www.codewars.com/kata/57f8ff867a28db569e000c4a/train/javascript
*/

// function kebabize(str) {
//   let kebab = '';

//   str
//     .replace(/\d/g, '')
//     .split('')
//     .forEach(char => {
//       if (/[A-Z]/.test(char)) {
//         kebab += kebab.length === 0 ? char.toLowerCase() : `-${char.toLowerCase()}`;
//       } else if (/[a-z]/.test(char)) {
//         kebab += char;
//       }
//     });

//   return kebab;
// }

function kebabize(str) {
  return str
    .replace(/\d/g, '')
    .replace(/^[A-Z]/g, char => char.toLowerCase())
    .replace(/[A-Z]/g, char => `-${char.toLowerCase()}`);
}

console.log(kebabize('camelsHaveThreeHumps')); // camels-have-three-humps
console.log(kebabize('camelsHave3Humps')); // camels-have-humps