function getShortestElemReduce(arr) {
  return arr.reduce((shortest, current) => {
    return current.length < shortest.length ? current : shortest;
  });
}

function getShortestElemSort(arr) {
  return [...arr].sort((a, b) => a.length - b.length)[0];
}

console.log(getShortestElemReduce(['aabbaaaa', 'ccdddddd', 'a', 'ggrrrrr', 'yyyzzz']));
console.log(getShortestElemReduce([[1, 2, 3], [2, 8, 9, 9], [2]]));
console.log(getShortestElemSort(['aabbaaaa', 'ccdddddd', 'a', 'ggrrrrr', 'yyyzzz']));
console.log(getShortestElemSort([[1, 2, 3], [2, 8, 9, 9], [2]]));