function validBraces(braces) {
  let previousLength = braces.length;

  do {
    previousLength = braces.length;
    braces = braces.replace('()', '').replace('[]', '').replace('{}', '');
  } while (braces.length !== previousLength)

  return braces.length === 0;
}

console.log(validBraces("(){}[]")); // =>  True
console.log(validBraces("([{}])")); // =>  True
console.log(validBraces("(}")); //     =>  False
console.log(validBraces("[(])")); //   =>  False
console.log(validBraces("[({})](]")); //>  False
console.log(validBraces("(({{[[]]}}))")); // true