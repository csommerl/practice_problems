// https://www.codewars.com/kata/5208f99aee097e6552000148/train/javascript
// figure out RegExp

function solution(string) {
  let result = '';

  for (let idx = 0; idx < string.length; idx++) {
    if (string[idx].toUpperCase() === string[idx]) {
      result += ' ';
    }

    result += string[idx];
  }

  return result;
}

console.log(solution("camelCasing"));  // "camel Casing"
console.log(solution("identifier"));  // "identifier"
console.log(solution(""));  // ""
