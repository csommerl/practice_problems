/*
Take a Ten Minutes Walk
https://www.codewars.com/kata/54da539698b8a2ad76000228/train/javascript
*/

function isValidWalk(walk) {
  return isTenMinutes(walk) && returnsToStart(walk);
}

function isTenMinutes(walk) {
  return walk.length === 10;
}

function returnsToStart(walk) {
  return (directionLength(walk, 'n') === directionLength(walk, 's') &&
    directionLength(walk, 'e') === directionLength(walk, 'w'));
}

function directionLength(walk, direction) {
  return walk.filter(elem => elem === direction).length;
}

console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s'])); // true
console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e'])); // false
console.log(isValidWalk(['w'])); // false
console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s'])); // false