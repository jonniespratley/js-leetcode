
        # tree-preorder-traversal.js
        /**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 *//**
 * @param {TreeNode} root
 * @return {number[]}
 */undefinedundefinedundefinedundefined/**
 * @param {number} x
 * @return {number}
 *//**
## Reverse Integer
Given a 32-bit signed integer, reverse digits of an integer.

#### Example 1:

Input: 123
Output: 321

#### Example 2:

Input: -123
Output: -321

#### Example 3:

Input: 120
Output: 21
 */undefined/*
## First Unique Character in a String
Given a string, find the first non-repeating character in it and return it's index. 
If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode",
return 2.

> Note: You may assume the string contain only lowercase letters.
*//**
 * @param {string} s
 * @return {number}
 */undefinedundefinedundefinedundefinedundefined
        
        **Solution:**
        
        <!-- js-console -->
        ```javascript
            function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
    var result = [];
    traversal(root);

    function traversal(root) {
        if (root === null) {
            return result;
        } else {
            result.push(root.val);
            traversal(root.left);
            traversal(root.right);
        }
    };
    return result;
};

var postorderTraversal = function (root) {
    var result = [];
    traversal(root);

    function traversal(root) {
        if (root === null) {
            return result;
        } else {
            traversal(root.left);
            traversal(root.right);
            result.push(root.val);
        }
    };
    return result;
};

let root = new TreeNode(100);
root.left = new TreeNode(5);
root.right = new TreeNode(7);
root.right.left = new TreeNode(3);
root.right.right = new TreeNode(6);
root.left.left = new TreeNode(2);
root.left.right = new TreeNode(4);
root.left.left.left = new TreeNode(8);

//const {BinarySearchTree} = require('../src/index');


var maxDepth = function (root) {
    if (root === null) {
        return 0;
    }
    let left_depth = maxDepth(root.left);
    let right_depth = maxDepth(root.right);
    return Math.max(left_depth, right_depth) + 1;
};

//console.log(preorderTraversal(root));
//console.log(postorderTraversal(root));
//console.log(maxDepth(root));

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let out = [];
    let parts = String(x).split('');
    let j = parts.length - 1;
    let i = 0;
    let isNegative = true;
    for (; i < parts.length; i++) {
        if (parts[i] !== '-') {
            out[j] = parts[i];
            isNegative = false;
        }
        j--;
    }


    console.log(parts, out.join(''));

    return Number(out.join(''));
};
/**
## Reverse Integer
Given a 32-bit signed integer, reverse digits of an integer.

#### Example 1:

Input: 123
Output: 321

#### Example 2:

Input: -123
Output: -321

#### Example 3:

Input: 120
Output: 21
 */
var reverse = function (x) {
    const reversedInt = +String(Math.abs(x)).split('').reverse().join('');
    return reversedInt < 0x7FFFFFFF ? Math.sign(x) * reversedInt : 0;
};
console.log(reverse(123));
console.log(reverse(-123));
//console.assert(reverse(123) === 321);


/*
## First Unique Character in a String
Given a string, find the first non-repeating character in it and return it's index. 
If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode",
return 2.

> Note: You may assume the string contain only lowercase letters.
*/
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    var map = {};
    for (var i = 0; i < s.length; i++) {
        let key = s[i];
        if (map[key] === undefined) { // if letter hasn't been encountered 
            // set char as key and value ([index, count]) as tuple of the index and letter count
            map[key] = [i, 1];
        } else {
            // increment letter count
            map[key][1] += 1;
            console.log(key, i)
        }
    }

    for (var k in map) {
        console.log(k, map[k]);
        // if a character count is equal to 1 it is the first unique, so return
        if (map[k][1] === 1) return map[k][0];
    }
    return -1; // return -1 if we didnt find a unique in our map
};
console.log(firstUniqChar('abc'));
console.log(firstUniqChar('aba'));
console.log(firstUniqChar('loveleetcode'));
        ```
        
        > Reference: ..
        
        