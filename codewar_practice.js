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
  - get substring through closing brace *****:
    **** problem *****
    how to get the right closing brace, when the same kind of brace is nested
    within itself?


  - if no closing brace, return false
  - otherwise, test braces' contents for equal balances
- could limit to closing brackets to make more efficient????

algo
1. Create object of balances.
2. Iterate through chars.
   a. Update balances (switch):
      - opening add
      - closing subtract
   b. If any of the balances object's values are negative, return false.
   c. If ...
3. Return every value of balances object is 0.

recursive solution?
*/

function validBraces(str) {
  for (let firstIdx = 0; firstIdx < str.length; ++firstIdx) {
    let char = str[firstIdx];

    if (!['(', '[', '{'].includes(char)) continue;

    let matchingChar = getMatchingBrace(char);

    let substring = str.slice(firstIdx);

    let lastIdx = substring.indexOf(matchingChar) + 1;

    substring = substring.slice(0, lastIdx);

    // if (lastIdx <= 0) return false; // *****

    console.log({char, matchingChar, substring});

    if (hasValidBraceBalances(substring)) continue;

    return false;
  }

  return hasValidBraceBalances(str);
}

function getMatchingBrace(brace) {
  switch (brace) {
    case '(':
      return ')';
    case '[':
      return ']';
    case '{':
      return '}';
    default:
      return;
  }
}

function hasValidBraceBalances(str) {
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

// console.log(validBraces("(){}[]")); // =>  True
// console.log(validBraces("([{}])")); // =>  True
// console.log(validBraces("(}")); //     =>  False
// console.log(validBraces("[(])")); //   =>  False
// console.log(validBraces("[({})](]")); //>  False
console.log(validBraces("(({{[[]]}}))")); // true