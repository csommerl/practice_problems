function getBinaryNum(num) {
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

  return +binaryStr;
}

/*
input: num
output: binary of num

rules:
- find the rightmost instance of 0
  - replace that 0 with 1
  - if there is a 1 to the right of the position,
    replace all positions to the right with 0
  - if there is no instance of 0,
    convert of digits with 0 and append 1 to the start
*/

console.log(getBinaryNum(0));   //     0
console.log(getBinaryNum(1));   //     1
console.log(getBinaryNum(2));   //    10
console.log(getBinaryNum(3));   //    11
console.log(getBinaryNum(4));   //   100
console.log(getBinaryNum(5));   //   101
console.log(getBinaryNum(6));   //   110
console.log(getBinaryNum(7));   //   111
console.log(getBinaryNum(8));   //  1000
console.log(getBinaryNum(9));   //  1001
console.log(getBinaryNum(10));  //  1010
console.log(getBinaryNum(11));  //  1011
console.log(getBinaryNum(12));  //  1100
console.log(getBinaryNum(13));  //  1101
console.log(getBinaryNum(14));  //  1110
console.log(getBinaryNum(15));  //  1111
console.log(getBinaryNum(16));  // 10000

console.log(getBinaryNum(24));  // 11000
console.log(getBinaryNum(25));  // 11001