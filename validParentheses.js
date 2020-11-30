// 20. Valid Parentheses
// Easy

// 6158

// 250

// Add to List

// Share
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
 

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false
// Example 4:

// Input: s = "([)]"
// Output: false
// Example 5:

// Input: s = "{[]}"
// Output: true
 

// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.

var isValid = function(s) {
    if (s.length < 2) return false;
    
    const closeParen = {
        ")" : "(",
        "]" : "[",    
        "}" : "{"
    }
    const stack = [];
    
    for (let i = 0; i < s.length; i++) {
        let last = stack[stack.length - 1];
        
        if ("([{".includes(s[i])) {
            stack.push(s[i])
        } else if (closeParen[s[i]] && last === closeParen[s[i]]) {
            stack.pop();
        } else if ((closeParen[s[i]] && stack.length === 0) || (last !== closeParen[s[i]])) {
            return false;
        }
    }
        
   if (stack.length === 0) {
       return true 
   } else {
       return false;
   }
};