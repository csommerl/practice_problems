// function singleNumber(nums) {
//   return nums.find(num => nums.indexOf(num) === nums.lastIndexOf(num));
// }

var singleNumber = function(nums) {
  // Initialize the unique number...
  let uniqNum = 0;

  // TRaverse all elements through the loop...
  for (let idx = 0; idx < nums.length; idx++) {
      // Concept of XOR...
      uniqNum = uniqNum ^ nums[idx];
  }

  return uniqNum;       // Return the unique number...
};

console.log(singleNumber([2, 2, 1])); // 1
console.log(singleNumber([4, 1, 2, 1, 2])); // 4
console.log(singleNumber([1])); // 1