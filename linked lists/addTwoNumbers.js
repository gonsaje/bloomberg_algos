// 2. Add Two Numbers
// Medium

// 9849

// 2479

// Add to List

// Share
// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

 

// Example 1:


// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.
// Example 2:

// Input: l1 = [0], l2 = [0]
// Output: [0]
// Example 3:

// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]
 

// Constraints:

// The number of nodes in each linked list is in the range [1, 100].
// 0 <= Node.val <= 9
// It is guaranteed that the list represents a number that does not have leading zeros.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let head = new ListNode(0);
    let p1 = l1;
    let p2 = l2;
    let current = head;
    let carry = 0;
    
    while (p1 !== null || p2 !== null) {
        let x = (p1 !== null) ? p1.val : 0;
        let y = (p2 !== null) ? p2.val : 0;
        let sum = x + y + carry;
        
        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        current = current.next;
        
        if (p1 !== null) {
            p1 = p1.next;
        }
        
        if (p2 !== null) {
            p2 = p2.next;
        }
    }
    
    if (carry > 0) {
        current.next = new ListNode(1);
    }
    
    return head.next;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
    let currentNode = head;
    let previousNode = null;
    
    while (currentNode !== null) {
        
        let temp = currentNode.next;
        currentNode.next = previousNode;
        previousNode = currentNode;
        currentNode = temp;
               
    }
    
    return previousNode;
};


var mergeTwoLists = function(l1, l2) {
    if (!l1) {
        return l2;
    } else if (!l2) {
        return l1;
    }

    let head = null;
    if (l1.val <= l2.val) {
        head = l1;
        l1 = l1.next;
    } else {
        head = l2;
        l2 = l2.next;
    }

    let tail = head;

    while (l1 && l2) {
        let temp = null;
        if (l1.val <= l2.val) {
            temp = l1;
            l1 = l1.next;
        } else {
            temp = l2;
            l2 = l2.next;
        }

        tail.next = temp;
        tail = temp;
    }

    if (l1) {
        tail.next = l1;
    } else if (l2) {
        tail.next = l2;
    }

    return head;
};