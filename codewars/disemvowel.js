// function disemvowel(str) {
//   let newStr = '';
//   for (let char of str) {
//     if (/[aeiou]/i.test(char)) continue;
//     newStr += char;
//   }
//   return newStr;
// }

function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '');
}

console.log(disemvowel("This website is for losers LOL!")); // "Ths wbst s fr lsrs LL!"