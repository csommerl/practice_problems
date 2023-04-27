/*
https://leetcode.com/problems/climbing-stairs/

5
[1,1,1,1,1]
'11111'

[1,1,1,2]
'1112'
'1121'
'1211'
'2111'

[1,2,2]
'122'
'212'
'221'

7
[1,1,1,1,1,1,1] => 1
'1111111'

[1,1,1,1,1,2] => 6
'111112'
'111121'
'111211'
'112111'
'121111'
'211111'

[1,1,1,2,2] => 11
'11122'
'12211'
'22111'
'21211'
'21121'
'12211'
'12121'
'12112'
'11221'
'11212'

[1,2,2,2] => 4
'1222'
'2122'
'2212'
'2221'

Algo 1
sets = how many times divisible by 2 + remainder
combinations of a set = 

Algo 2
get possible lengths: (num / 2) + 1
get all possible combinations of 1s and 2s for each length
get only those combinations that add up to num
*/
function climbStairs(num) {

}

console.log(climbStairs(2)); // 2
console.log(climbStairs(3)); // 3
console.log(climbStairs(5)); // 8
console.log(climbStairs(7)); // 21
