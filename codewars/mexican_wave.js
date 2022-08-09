function wave(str) {
  let arr = [];

  for (let idx = 0; idx < str.length; ++idx) {
    if (/\s/.test(str[idx])) continue;

    let arrElem = str.slice(0, idx) +
      str[idx].toUpperCase() +
      str.slice(idx + 1, str.length);

    arr.push(arrElem);
  }

  return arr;
}

console.log(wave('hello'));
console.log(wave(' gap '));
console.log(wave('two words'));