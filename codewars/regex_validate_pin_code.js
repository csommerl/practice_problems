/*
https://www.codewars.com/kata/55f8a9c06c018a0d6e000132/train/javascript

ATM machines allow 4 or 6 digit PIN codes
and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.
*/

// // longer
// function validatePIN(pin) {
//   return /(^\d{4}$)|(^\d{6}$)/.test(pin);
// }

// shorter
function validatePIN(pin) {
  return /^(\d{4}|\d{6})$/.test(pin);
}

console.log(validatePIN('1234')); // true
console.log(validatePIN('12345'));  // false
console.log(validatePIN('a234')); // false
console.log(validatePIN('123456')); // true
console.log(validatePIN('a23456')); // false