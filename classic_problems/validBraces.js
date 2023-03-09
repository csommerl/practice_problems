// https://www.codewars.com/kata/5277c8a221e209d3f6000b56/train/javascript

/*
rules:
- not balanced when:
  a. if at any point there are more closing than opening
  b. number of each is not equal
  c. braces within a brace pair is not equal, e.g., '[(])'
- Recursive (?) no valid brace pair string can be sliced until the string is empty;
  cannot be sliced when:
  - the string starts with a closing brace
  - when the braceBalances don't equal 0


Example 1:
"([{}])" => "[{}]" => "{}"
"(({{[[]]}}))" => "({{[[]]}})" => "{{[[]]}}"
"[({})](]" => '[({})]', '(]' => ...

Algo
1. While str length > 0:
   a. Get first valid brace pair starting from index 0;
      set str to remainder of str;
      if it cannot be retrieved, return false.
   b. From substring, pop off first and last chars.
   c. Run validBraces on substring.
2. Return true.

getClosingBraceIdx
1. If first char is a closing brace, return -1.
2. Get closingBrace.
3. Find index at which counts of openingBrace & closingBrace are 0.

*/

function validBraces(str) {
  while (str.length > 0) {
    let closingBraceIdx = getClosingBraceIdx(str);

    if (!closingBraceIdx) return false;

    if (!validBraces(str.slice(1, closingBraceIdx))) return false;

    str = str.slice(closingBraceIdx);
  }

  return true;
}

function getClosingBraceIdx(str) {
  let openingBrace = str[0];
  let closingBrace = getClosingBrace(openingBrace);

  if (!closingBrace) return false;

  let count = 0;

  for (let idx = 0; idx < str.length; ++idx) {
    let char = str[idx];

    if (char === openingBrace) ++count;
    if (char === closingBrace) --count;

    if (count === 0) return idx;
  }

  return undefined;
}

function getClosingBrace(char) {
  switch (char) {
    case '(':
      return ')';
    case '[':
      return ']';
    case '{':
      return '{';
  }
}

// console.log(validBraces(''));
console.log(validBraces("(){}[]")); // =>  True
// console.log(validBraces("([{}])")); // =>  True
// console.log(validBraces("(}")); //     =>  False
// console.log(validBraces("[(])")); //   =>  False
// console.log(validBraces("[({})](]")); //>  False
// console.log(validBraces("(({{[[]]}}))")); // true