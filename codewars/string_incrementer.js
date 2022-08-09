function incrementString(str) {
  let match = str.match(/\d*$/);
  let strEnd = match[0];
  let strEndIdx = match.index;

  let newEnd = strEnd ? String(+strEnd + 1) : '1';
  newEnd = newEnd.padStart(strEnd.length, '0');

  return str.slice(0, strEndIdx) + newEnd;
}

console.log(incrementString("foobar000")); // "foobar001"
console.log(incrementString("foo")); // "foo1"
console.log(incrementString("foobar001")); // "foobar002"
console.log(incrementString("foobar99"));  // "foobar100"
console.log(incrementString("foobar099")); // "foobar100"
console.log(incrementString(""));  // "1"