function stringToInteger(str) {
  const charToDigit = {
    0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9
  };

  return str
    .split('')
    .map(char => charToDigit[char])
    .reverse()
    .reduce((num, digit, idx) => num + (digit * Math.pow(10, idx)), 0);
}

function stringToSignedInteger(str) {
  switch (str[0]) {
    case '-':
      return -stringToInteger(str.slice(1));
    case '+':
      return stringToInteger(str.slice(1));
    default:
      return stringToInteger(str);
  }
}

console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true