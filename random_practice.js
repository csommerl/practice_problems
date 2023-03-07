/*
https://www.codewars.com/kata/5277c8a221e209d3f6000b56/train/javascript
input: string
output: boolean

rules:
- not balanced when:
  a. if at any point there are more closing than opening
  b. number of each is not equal
  c. braces within a brace pair is not equal, e.g., '[(])'

how to deal with c
- for every brace with a matching end brace, the balances of the inner braces
  equal 0
- create strings of each??????

Algo for c (seems inefficient)
- test string as a whole for equal balances
- for each opening brace:
  - get substring through closing brace
  - if no closing brace, return false
  - otherwise, test braces' contents for equal balances

algo
1. Create object of balances.
2. Iterate through chars.
   a. Update balances (switch):
      - opening add
      - closing subtract
   b. If any of the balances object's values are negative, return false.
   c. If ...
3. Return every value of balances object is 0.

*/

function validBraces(str) {
  return checkBraceBalances(str);
}

function checkBraceBalances(str) {
  const balances = {
    parentheses: 0,
    brackets: 0,
    curlyBraces: 0,
  };

  for (let char of str) {
    updateBraceBalances(char, balances);
    if (hasNegValue(balances)) return false;
  }

  return !hasNonZeroValue(balances);
}

function updateBraceBalances(brace, braceBalances) {
  switch (brace) {
    case '(':
      ++braceBalances.parentheses;
      break;
    case ')':
      --braceBalances.parentheses;
      break;
    case '[':
      ++braceBalances.brackets;
      break;
    case ']':
      --braceBalances.brackets;
      break;
    case '{':
      ++braceBalances.curlyBraces;
      break;
    case '}':
      --braceBalances.curlyBraces;
      break;
  } 
}

function hasNegValue(obj) {
  return Object.values(obj).some(value => value < 0);
}

function hasNonZeroValue(obj) {
  return Object.values(obj).some(value => value !== 0);
}

console.log(validBraces("(){}[]")); // =>  True
console.log(validBraces("([{}])")); // =>  True
console.log(validBraces("(}")); //     =>  False
console.log(validBraces("[(])")); //   =>  False
console.log(validBraces("[({})](]")); //>  False