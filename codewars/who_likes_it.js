/**
 * https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/javascript
 *
 * input: array
 * output: string, see test cases
 * rules: do something different for 0, 1, 2, 3, 4+ names
 * 1. Create countOfNames and initialize to length of names array.
 * 2. Compare length to 0, 1, 2, 3, and default (switch)
 *    a. If 0, return 'no one likes this'
 *    b. If 1
 */

function likes(nameArr) {
  let length = nameArr.length;
  switch (length) {
    case 0:
      return 'no one likes this';
    case 1:
      return `${nameArr[0]} likes this`;
    case 2:
      return `${nameArr.join(' and ')} like this`;
    case 3:
      return `${nameArr.slice(0, 2).join(', ')} and ${nameArr[2]} like this`;
    default:
      return `${nameArr.slice(0, 2).join(', ')} and ${length - 2} others like this`;
  }
}

// function likes(names) {
//   let length = names.length;
//   switch (length) {
//     case 0:
//       return 'no one likes this';
//     case 1:
//       return `${names[0]} likes this`;
//     case 2:
//       return `${names[0]} and ${names[1]} like this`;
//     case 3:
//       return `${names[0]}, ${names[1]} and ${names[2]} like this`;
//     default:
//       return `${names[0]}, ${names[1]} and ${length - 2} others like this`;
//   }
// }

console.log(likes([])); // 'no one likes this'
console.log(likes(['Peter'])); // 'Peter likes this'
console.log(likes(['Jacob', 'Alex'])); // 'Jacob and Alex like this'
console.log(likes(['Max', 'John', 'Mark'])); // 'Max, John and Mark like this'
console.log(likes(['Alex', 'Jacob', 'Mark', 'Max'])); // 'Alex, Jacob and 2 others like this'