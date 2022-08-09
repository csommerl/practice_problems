/*
** In this kata you are required to, given a string,
** replace every letter with its position in the alphabet.
** If anything in the text isn't a letter, ignore it and don't return it.
** "a" = 1, "b" = 2, etc.
*/

// function alphabetPosition(text) {
//   let positions = [];

//   text.split('').forEach(char => {
//     let code = char.toLowerCase().charCodeAt(0) - 96;
//     if (code > 0 && code <= 26) {
//       positions.push(code);
//     }
//   });

//   return positions.join(' ');
// }


function alphabetPosition(text) {
  let positions = '';

  for (let idx = 0; idx < text.length; idx++) {
    let charCode = text.toLowerCase().charCodeAt(idx) - 96;

    if (charCode < 1 || charCode > 26) {
      continue;
    }

    positions += charCode;

    if (idx < text.length - 1) {
      positions += ' ';
    }
  }

  return positions;
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));
// Should return
// "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"