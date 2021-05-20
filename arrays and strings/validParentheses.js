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

////// SECOND ATTEMPT
/*
receive a str of parens

if the length of string is less than 2 return false

create a var for matching brackets
if its an open paren then add to arr
if close paren, check if last bracket on the stack is a matching pair and pop off th stack
otherwise return false

check if stack is empty => all pairs are accounted for

return true
*/
// O(n) time and space

var isValid = function(s) {
    if (s.length < 2) return false;
    
    let closed = {
        '}': '{',
        ')': '(',
        ']': '['
    };
    
    let stack = [];
    
    for (let i = 0; i < s.length; i++) {
        let last = stack[stack.length - 1]; // most recent bracket
        let current = [i];
        
        // if the current char is an opening bracket, add to stack
        if ("({[".includes(current)) stack.push(current); 
        // if the current is a closing bracket and the last bracket on the stack is the matching pair remove it from stack
        else if (closed[current] && closed[current] === last) stack.pop();
        // if current is a closing bracket and there is nothing in the stack OR the last doesnt match the pair of current
        else if ((closed[current] && stack.length === 0) || (last !== closed[current])) return false; 
    }
    
    if (stack.length === 0) return true; // if all pair matches have been accounted for
    return false;
};