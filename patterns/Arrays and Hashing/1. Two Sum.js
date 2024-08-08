// https://leetcode.com/problems/two-sum/description/
// Difficulty: Easy
// Tags: Array, Hash Table

/* 
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
 

Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.
*/

// Solution 1
// O(n^2)
// var twoSum = function (nums, target) {
//   let result = [];
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         result.push(i);
//         result.push(j);
//       }
//     }
//   }
//   return result;
// };

// Solution 1
// O(n^2)
const twoSum = function (nums, target) {
  // declare an object
  let seenNums = {}
  // iterate through nums array
  for (let i = 0; i < nums.length; i++) {
    // if target - currNum is in seenNums, then return currentNum and seenNum in an array
    if (target - nums[i] in seenNums) {
      return [nums[i], target - nums[i]];
    }
    // otherwise, add the currNum into seenNums obj
    seenNums[nums[i]] = i
  }
};

console.log(twoSum([2, 7, 11, 15], 13));
