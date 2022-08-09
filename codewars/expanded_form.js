/*
Write Number in Expanded Form
You will be given a number and you will need to return it as a string in Expanded Form. For example:

NOTE: All numbers will be whole numbers greater than 0.

input: number
output: string of expanded form

rules
- input guarnateed to be an integer greater than 0
- expanded form
  - the string should include each non-zero digit followed by 0s, with +s separating them
  - the number of 0s following a digit should be equivalent to the number of digits to the right of that digit
- need to be careful with digits that are 0.

Data structures
- convert num to a string
- convert the string to an array of characters/digits

70304
=> '70304'
=> ['7', '0', '3', '0', '4']
filter: ['7', '3', '4']
transform: ['70000', '300', '4']

Mental model
filter
transform
join with ' + '

Algorithm
1. Get charArr.
    - convert num to str
    - convert str to arr
2. Transform. (map method / helper function)
    - guard clause: if char is '0', just keep as is.
    - numOfZeros = charArr's length - char's idx - 1
    - return str of char + '0' repeated numOfZeros times
3. Filter out 0s. (filter method / helper function)
    - if a character is not '0', keep
    - return char !== '0'
4. Join to a string and return. (join method)
    - argument for join: ' + '
*/

function expandedForm(num) {
  return [...String(num)]
    .map((digit, idx, arr) => {
      let numOfZeroes = digit === '0' ? 0 : arr.length - idx - 1;
      return digit + '0'.repeat(numOfZeroes);
    })
    .filter(char => char !== '0')
    .join(' + ');
}

console.log(expandedForm(12)); // Should return '10 + 2'
console.log(expandedForm(42)); // Should return '40 + 2'
console.log(expandedForm(70304)); // Should return '70000 + 300 + 4'