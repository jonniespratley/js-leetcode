
        # palindrome-linked-list.js
        /*
## Palindrome Linked List

Given a singly linked list, determine if it is a palindrome.

Example 1:

```
Input: 1->2
Output: false
```

Example 2:

```
Input: 1->2->2->1
Output: true
```

Follow up:
- Could you do it in O(n) time and O(1) space?
*//**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 *//**
 * @param {ListNode} head
 * @return {boolean}
 */undefinedundefined
        
        **Solution:**
        
        <!-- js-console -->
        ```javascript
            /*
## Palindrome Linked List

Given a singly linked list, determine if it is a palindrome.

Example 1:

```
Input: 1->2
Output: false
```

Example 2:

```
Input: 1->2->2->1
Output: true
```

Follow up:
- Could you do it in O(n) time and O(1) space?
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
    let nums = [];
    let temp = [];
    let cur = head;
    while (cur !== null) {
        nums.push(cur.val);
        cur = cur.next;
    }
    return nums.length > 1 ? nums.join('') === temp.concat(nums).reverse().join('') : true;
};

//Time: 0(n)
//Space: 0(1)
var isPalindrome2 = function (head) {
    if (!head) return true;

    let curr = head;
    let prev = null;

    while (curr) {
        curr.prev = prev;
        prev = curr;
        curr = curr.next;
    }

    let left = head;
    let right = prev;

    while (left.next && right.prev) {
        if (left.val !== right.val) return false;
        left = left.next;
        right = right.prev;
    }

    return true;
};
        ```
        
        > Reference: ..
        
        