// 1480. Running Sum of 1d Array
// Easy

// 732

// 74

// Add to List

// Share
// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

// Return the running sum of nums.

 

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
// Example 2:

// Input: nums = [1,1,1,1,1]
// Output: [1,2,3,4,5]
// Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
// Example 3:

// Input: nums = [3,1,2,10,1]
// Output: [3,4,6,16,17]
 

// Constraints:

// 1 <= nums.length <= 1000
// -10^6 <= nums[i] <= 10^6

/**
 * @param {number[]} nums
 * @return {number[]}
 */

// space complexity: O(n) => sumArr's size is dependent on the size of the argument
// time complexity: O(n^2) nested loop
var runningSum = function(nums) {
    let sumArr = []; // O(n) 
    
    for (let i = nums.length - 1; i >= 0; i--) { //O(n)
        let sum = nums[i];
        
        for (j = i - 1; j >= 0; j--) { // O(n)
            sum += nums[j];
        }
        
        sumArr.unshift(sum);
    }
    
    return sumArr;
};

// faster version
// space complexity: O(1) => we're modifying the original array and therefore not changing space
// time complexity: O(n) => we're looping through once  

var runningSum = function(nums) {
    for(let i = 1;i < nums.length; i++){
        nums[i] += nums[i - 1];
    }
    return nums;
};