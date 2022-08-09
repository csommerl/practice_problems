/*
** The goal of this exercise is to convert a string to a new string where
** each character in the new string is
** "(" if that character appears only once in the original string,
** or ")" if that character appears more than once in the original string.
** Ignore capitalization when determining if a character is a duplicate.

"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))(("

*/

function duplicateEncode(str) {
  let newStr = '';

  for (let idx = 0; idx < str.length; idx++) {
    let re = new RegExp(`[${str[idx].toLowerCase()}]`, 'gi');
    let count = str.match(re).length;
    if (count > 1) {
      newStr += ')';
    } else {
      newStr += '(';
    }
  }

  return newStr;
}

console.log(duplicateEncode('din'));  // '((('
console.log(duplicateEncode('recede'));  // '()()()'
console.log(duplicateEncode('Success'));  // ')())())'
console.log(duplicateEncode('(( @'));  // '))(('

module.exports = { duplicateEncode };