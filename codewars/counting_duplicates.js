// https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/javascript

function duplicateCount(text) {
  let alphaNumeric = 'abcdefghijklmnopqrstuvwxyz123456789';
  let duplicateCount = 0;

  for (let char of alphaNumeric) {
    let re = new RegExp(`${char}.*${char}`, 'i');
    if (re.test(text)) duplicateCount += 1;
  }

  return duplicateCount;
}

// 'Indivisibilities'.match(/i.*?/gi);
// /i.*?i/i.test('Indivisibilities');
// /i.*i/i.test('Indivisibilities');

console.log(duplicateCount("abcde"));  // 0
console.log(duplicateCount("aabbcde"));  // 2
console.log(duplicateCount("aabBcde"));  // 2
console.log(duplicateCount("indivisibility")); // 1
console.log(duplicateCount("Indivisibilities")); // 2
console.log(duplicateCount("aA11")); // 2
console.log(duplicateCount("ABBA")); // 2

/*
1. Create str/arr of alphanumeric characters
2. Create count of duplicates
3. For each alphanumeric character,
   test whether it is in the text more than once
   a. If so, increment duplicate count
4. Return duplicate count
*/