// https://www.codewars.com/kata/5277c8a221e209d3f6000b56/train/javascript

/*

*/

function validBraces(braces) {
}

function getBraceObj() {
  let braces = '()[]{}';

  let braceObj = {};

  for (let brace of braces) {
    braceObj[brace] = 0;
  }

  return braceObj;
}

console.log(validBraces("(){}[]")); // =>  True
console.log(validBraces("([{}])")); // =>  True
console.log(validBraces("(}")); //     =>  False
console.log(validBraces("[(])")); //   =>  False
console.log(validBraces("[({})](]")); //>  False
console.log(validBraces("(({{[[]]}}))")); // true