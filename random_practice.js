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

}

console.log(validBraces("(){}[]")); // =>  True
console.log(validBraces("([{}])")); // =>  True
console.log(validBraces("(}")); //     =>  False
console.log(validBraces("[(])")); //   =>  False
console.log(validBraces("[({})](]")); //>  False