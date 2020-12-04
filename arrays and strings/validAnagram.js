// Valid Anagram

// Solution
// Given two strings s and t , write a function to determine if t is an anagram of s.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false
// Note:
// You may assume the string contains only lowercase alphabets.

// Follow up:
// What if the inputs contain unicode characters? How would you adapt your solution to such case?

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    
    let count1 = {};
    let count2 = {};
    
    for (let i = 0; i < s.length; i++) {
        count1[s[i]] ? count1[s[i]] += 1 : count1[s[i]] = 1;
        count2[t[i]] ? count2[t[i]] += 1 : count2[t[i]] = 1;
        
    }
  
    for (let char in count1) {
        if (count1[char] !== count2[char]) {
            return false;
        }
    }
    
    return true;
};

