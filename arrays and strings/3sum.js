// 15. 3Sum
// Medium

// 8664

// 934

// Add to List

// Share
// Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

// Notice that the solution set must not contain duplicate triplets.

 

// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Example 2:

// Input: nums = []
// Output: []
// Example 3:

// Input: nums = [0]
// Output: []
 

// Constraints:

// 0 <= nums.length <= 3000
// -105 <= nums[i] <= 105
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort();
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            break;
        } else if (i === 0 || nums[i - 1] !== nums[i]) {
            pairSum(nums, i, result);
        }
    }
    
    return result;
};

function pairSum(nums, i, result) {
    let low = i + 1;
    let high = nums.length - 1;
    
    while (low < high) {
        let sum = nums[i] + nums[low] + nums[high];
        
        if (sum < 0) {
            low += 1;
        } else if (sum > 0) {
            high -= 1;
        } else {
            result.push([nums[i], nums[low], nums[high]]);
            low += 1;
            high -= 1;
            while (low < high && nums[low] === nums[low - 1]) {
                low += 1;
            }
        }
        
    }
}