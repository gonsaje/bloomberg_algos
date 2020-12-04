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
    console.log(nums.sort((a,b) => a-b));
    let triplets = [];
    
    for (let i = 0; i < nums.length - 2; i++) {
        let curr = nums[i];
        let left = i + 1;
        let right = nums.length - 1;
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        
        while (left < right) {
            let sum = curr + nums[left] + nums[right];
            let triplet = [curr, nums[left], nums[right]];
            
            if (sum < 0) {
               left++; 
            } else if (sum > 0){
                right--;
            } else if (sum === 0) {
                triplets.push(triplet);
                while (nums[left] === nums[left + 1]) left++;
                while (nums[right] === nums[right - 1]) right--;
                left++;
                right--;
            }
        }
    }
    
    return triplets;
};
