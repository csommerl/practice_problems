// https://www.codewars.com/kata/576757b1df89ecf5bd00073b/train/javascript

function towerBuilder(nFloors) {
  let towerArray = [];
  let targetFloorLength = ((nFloors - 1) * 2) + 1;

  for (let floorNum = 0; floorNum < nFloors; floorNum++) {
    let centerStar = '*';
    let starPadding = '*'.repeat(floorNum);
    let floor = starPadding + centerStar + starPadding;
    let spacePadding = ' '.repeat((targetFloorLength - floor.length) / 2);
    floor = spacePadding + floor + spacePadding;
    towerArray.push(floor);
  }

  return towerArray;
}

console.log(towerBuilder(1));

/*

for example, a tower of 3 floors looks like below
[
  '  *  ',
  ' *** ',
  '*****'
]
targetLength = (nFloors - 1) * 2 + 1

// floor 0, padding stars = 0
// floor 1, padding stars = 1
// floor 2:
  centerStar = 1,
  padding stars = 2,
  length = nFloors * 2 + centerStar

and a tower of 6 floors looks like below

[
  '     *     ',
  '    ***    ',
  '   *****   ',
  '  *******  ',
  ' ********* ',
  '***********'
]
targetLength = (nFloors - 1) * 2 + 1

*/