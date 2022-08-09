function add(a, b) {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  }
}

console.log(add(5, 7));