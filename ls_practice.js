/*
input: nested array
output: transposed array
        - such that rowr and columns are swapped

rules
- [0][0] => [0][0]
- [0][1] => [1][0]
- [0][2] => [2][0]

- [1][0] => [0][1]
- [1][1] => [1][1]
- [1][2] => [2][1]

Algo
1. Get length.
2. Create new array with nested empty arrays.
3. Iterate over nested arrays in new array:
    - for each iteration, and for each row in the original, get the item at the idx in the row
    - push
4. return
*/

function transpose(nestedArr) {
  const newArr = Array(nestedArr.length).fill(true).map(elem => []);

  for (let idx = 0; idx < newArr.length; ++idx) {
    let newRow = newArr[idx];

    nestedArr.forEach(originalRow => {
      let elem = originalRow[idx];
      newRow.push(elem);
    });
  }

  return newArr;
}

const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

let newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]