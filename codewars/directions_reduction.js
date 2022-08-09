/*
Directions Reduction
https://www.codewars.com/kata/550f22f4d758534c1100025a/train/javascript

Needless direction = W-E or S-N side-by-side

Reduce method?

1. Declare `complements` and initialize with an object containing complements.
2. Declare `filteredArr` and initialize with a shallow copy of `arr`.
3. Declare `length` and initilaize with length of `filteredArr`.
4. Do ... while: perform a filtering at least once
   a. For each element in `filteredArr`, check if the value associated with its
      key in `complements` is identical to the following element.
   b. If so, remove both elements
   c. While conditoin: until the lengths are not different
5. Return `filteredArr`
*/

// function dirReduc(arr) {
//   let filteredArr = [...arr];
//   let length = filteredArr.length;

//   do {
//     length = filteredArr.length;
//     removeComplements(filteredArr);
//   } while (filteredArr.length !== length);

//   return filteredArr;
// }

// function removeComplements(arr) {
//   const complements = {
//     NORTH: 'SOUTH',
//     SOUTH: 'NORTH',
//     EAST: 'WEST',
//     WEST: 'EAST'
//   };

//   for (let idx = 0; idx < arr.length; ++idx) {
//     let elem1 = arr[idx];
//     let elem2 = arr[idx + 1];
//     if (complements[elem1] === elem2) arr.splice(idx, 2);
//   }
// }

function dirReduc(arr) {
  const complements = {NORTH: 'SOUTH', SOUTH: 'NORTH', EAST: 'WEST', WEST: 'EAST'};

  return arr.reduce((newArr, elem) => {
    let complement = complements[elem];
    let previousElem = newArr[newArr.length - 1];
    if (complement === previousElem) {
      newArr.pop();
    } else {
      newArr.push(elem);
    }
    return newArr;
  }, []);
}

console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])); // ["WEST"]
console.log(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"])); // ["NORTH", "WEST", "SOUTH", "EAST"]
console.log(dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"])); // []