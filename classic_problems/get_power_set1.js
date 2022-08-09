function getBinaryStr(num) {
  let binaryStr = '0';

  for (let idx = 0; idx < num; ++idx) {
    let prevBinaryStr = binaryStr;
    let lastZeroIdx = prevBinaryStr.lastIndexOf('0');

    if (lastZeroIdx > -1) {
      binaryStr = (prevBinaryStr.slice(0, lastZeroIdx) + '1').padEnd(prevBinaryStr.length, '0');
    } else {
      binaryStr = '1' + '0'.repeat(prevBinaryStr.length);
    }
  }

  return binaryStr;
}

function getBinaryCombinations(num) {
  let arr = [];

  let numOfCombinations = Math.pow(2, num);

  for (let idx = 0; idx < numOfCombinations; ++idx) {
    let binaryStr = getBinaryStr(idx).padStart(num, '0');
    arr.push(binaryStr);
  }

  return arr;
}

function getSetFromBinaryCombination(binaryCombination, arr) {
  return arr.filter((_, idx) => +binaryCombination[idx]);
}

function getPowerSet(arr) {
  let binaryCombinations = getBinaryCombinations(arr.length);

  return binaryCombinations.map(binaryCombination => {
    return getSetFromBinaryCombination(binaryCombination, arr);
  });
}

console.log(getPowerSet([]));
console.log(getPowerSet([1]));
console.log(getPowerSet([1, 3]));
console.log(getPowerSet([1, 3, 5]));
console.log(getPowerSet([3, 5, 9, 15]));