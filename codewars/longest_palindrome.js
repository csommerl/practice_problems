// https://www.codewars.com/kata/54bb6f887e5a80180900046b/train/javascript

function longestPalindrome(str) {
  let reverseStr = str.split('').reverse().join('');
  let longestPalindrome = '';

  for (let startIdx = 0; startIdx < str.length; startIdx++) {
    for (let endIdx = str.length; endIdx >= 0; endIdx--) {
      let testStr = str.slice(startIdx, endIdx);
      if (!reverseStr.includes(testStr)) continue;
      if (testStr.length < longestPalindrome.length) continue;
      longestPalindrome = testStr;
    }
  }

  return longestPalindrome.length;
}

console.log(longestPalindrome('a'));  // 1
console.log(longestPalindrome('aab'));  // 2
console.log(longestPalindrome('abcde'));  // 1
console.log(longestPalindrome('zzbaabcd'));  // 4
console.log(longestPalindrome(''));  // 0
console.log(longestPalindrome('zyabyz')); // 2
console.log(longestPalindrome('I like racecars that go fast')); // 7
console.log(longestPalindrome('baablkj12345432133d'));  // 9