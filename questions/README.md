# Questions


# Answered Questions


--- 
## Binary Tree Level Order Traversal

```js
var levelOrder = function (root) {
    if (root === null) {
        return [];
    }
    let result = [];
    let queue = [];

    queue.push(root);

    while (queue.length > 0) {
        let size = queue.length;
        let current = [];
        for (let i = 0; i < size; i++) {
            let head = queue.shift();
            current.push(head.val);
            if (head.left !== null) {
                queue.push(head.left)
            }
            if (head.right !== null) {
                queue.push(head.right)
            }
        }
        result.push(current);
    }
    return result;
};
```

---

## Binary Tree Postorder Traversal

```js
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
```




--- 

## Binary Tree Inorder Traversal	

```js
var inorderTraversal = function (root) {
    if (!root) return [];
    let stack = [];
    let order = [];
    stack.push(root);
    while (stack.length) {
        let top = stack.pop();
        if (top.v) {
            order.push(top.val);
        } else {
            top.v = true;
            if (top.right) {
                stack.push(top.right);
            }
            stack.push(top);
            if (top.left) {
                stack.push(top.left);
            }

        }
    }
    return order;
};
```


---


## Binary Tree Preorder Traversal	

```js
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
```



--- 

## Reverse String

```js
var reverseString = function(s) {
  let result = [];
  let i = s.length - 1;
  let index = 0;
  for (; i > -1; i -= 1){
    result.push(s[i]);
  }
  return result.join('');
};
```


---

## Maximum Depth of Binary Tree

```js
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if (root === null) {
        return 0;
    }
    let left_depth = maxDepth(root.left);
    let right_depth = maxDepth(root.right);
    return Math.max(left_depth, right_depth) + 1;
};
```
---

## Symmetric Tree


```js
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

function checkIfSymmetric(left, right) {
    if (left == null && right == null) {
        return true;
    } else if (left == null || right == null) {
        return false;
    }

    return left.val == right.val &&
        checkIfSymmetric(left.right, right.left) &&
        checkIfSymmetric(left.left, right.right);
}
 
var isSymmetric = function (root) {
 if (root === null) {
     return true;
 }
 return checkIfSymmetric(root.left, root.right);
};
```

---

## Path Sum

Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum.

> Note: A leaf is a node with no children.

Example:

```
Given the below binary tree and sum = 22,

      5
     / \
    4   8
   /   / \
  11  13  4
 /  \      \
7    2      1
```

return true, as there exist a root-to-leaf path 5->4->11->2 which sum is 22.

```js
/**

 * Time Complexity: O(n)
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
    let node = root;
    if(!node){
        return false;
    }
    if(node === null){
        return (sum === 0);
    }
    let answer = false;
    let subsum = sum - node.val;
    if(subsum === 0 && node.left == null && node.right == null){
        return true;
    } 
    if(node.left !== null){
       answer = answer || hasPathSum(node.left, subsum);
    }
    if(node.right !== null){
       answer = answer || hasPathSum(node.right, subsum);
    }
    return answer;
};
```

--- 
## Array Partition I

```js
/**
  Input: [1,4,3,2]

  Output: 4
  Explanation: n is 2, and the maximum sum of pairs is 4 = min(1, 2) + min(3, 4).

 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
    let hash = [];
    for (let i = 0; i < 20001; ++i) {
        hash[i] = 0;
    }
    let sum = 0;
    let min = Number.MAX_VALUE;
    let max = Number.MIN_VALUE;
    for (let i = 0; i < nums.length; ++i) {
        let cur = nums[i] + 10000;
        ++hash[cur];
        min = Math.min(min, cur);
        max = Math.max(max, cur);
    }
    let evenOdd = 0;
    for (let i = min; i <= max; ++i) {
        let curAmount = hash[i];
        for (let j = 0; j < curAmount; ++j) {
            if (evenOdd == 0) {
                sum += i - 10000;
            }
            evenOdd ^= 1;
        }
    }
    return sum;
};
```

---

## Two Sum II - Input array is sorted

```js
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(numbers, target) {
    let dict = {};
    for (i in numbers){
        if (target - numbers[i] in dict){
            return [dict[target - numbers[i]] + 1, Number(i) + 1];
        }
        dict[numbers[i]] = Number(i);
    }
};
```

---


## Spiral Matrix

Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.

Example 1:

```
Input:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
Output: [1,2,3,6,9,8,7,4,5]

```

Example 2:

```
Input:
[
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9,10,11,12]
]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]
```

```js
/*  
k - starting row index
m - ending row index
l - starting column index
n - ending column index
i - iterator
*/
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
   var result = [];
    if (!matrix.length) {
        return result;
    }
    var i = 0,
        a = matrix,
        m = matrix.length,
        n = matrix[0].length,
        k = 0,
        l = 0;

    while (k < m && l < n) {
        //first row
        for (i = l; i < n; ++i) {
            result.push(a[k][i]);
        }
        k++;
        //last column
        for (i = k; i < m; ++i) {
            result.push(a[i][n - 1]);
        }
        n--;
        // Print the last row from the remaining rows 
        if (k < m) {
            for (i = n - 1; i >= l; --i) {
                result.push(a[m - 1][i]);
            }
            m--;
        }
        // Print the first column from the remaining columns 
        if (l < n) {
            for (i = m - 1; i >= k; --i) {
                result.push(a[i][l]);
            }
            l++;
        }
    }
    return result;
};
```





---

## Longest Common Prefix

```js
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs && strs.length === 0) {
    return '';
  }
  strs.sort((prev, next) => prev.length - next.length)
  shortestStr = strs[0]
  length = shortestStr && shortestStr.length
  if (!length) {
    return ''
  }
  for (let i = length; i > 0; i--) {
    const searchStr = shortestStr.substr(0, i);
    flag = strs.every((item) => item && item.startsWith && item.startsWith(searchStr))
    if (flag) {
      return searchStr
      break;
    }
  }
  return ''
};
```


---

## strStr

```js
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  let result = 0;
  if(needle === ""){
    return result;
  }
  let index = haystack.indexOf(needle);
  return index >= -1 ? index : result;
};
```



---

## addBinary

```js
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  var [carry, i, j, res] = [0, a.length - 1, b.length - 1, ""];
  while(i >= 0 || j >= 0 || carry > 0) {
      const bita = i >= 0 ? Number(a[i]) : 0;
      const bitb = j >= 0 ? Number(b[j]) : 0;
      const sum = bita + bitb + carry;
      res = `${sum%2}${res}`;
      carry = Math.floor(sum / 2);
      i--; j--;
  }
  return res;
};
```



## Diagonal Traverse

```js
/**
 * Diagonal Traverse
 * Given a matrix of M x N elements (M rows, N columns),
 * return all elements of the matrix in diagonal order as shown in the below image.
 *
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDiagonalOrder = function (matrix) {
  if (matrix.length === 0) {
    return [];
  }
  let len = matrix.length;
  let len2 = matrix[0].length;
  let len3 = len * len2;
  let res = [];
  let i = 0,
    j = 0,
    k = 0;

  while (k < len3) {
    res.push(matrix[i][j]);
    if ((i + j) % 2 === 1) {
      if (i === len - 1) {
        j++;
      } else if (j === 0) {
        i++;
      } else {
        i++;
        j--;
      }
    } else {
      if (j === len2 - 1) {
        i++;
      } else if (i === 0) {
        j++;
      } else {
        i--;
        j++;
      }
    }
    k++;
  }
  return res;
};
```


--- 

## Plus One
 Given a non-empty array of digits representing a non-negative integer, plus one to the integer.

 The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.
 
 You may assume the integer does not contain any leading zero, except the number 0 itself.

```js
/**
 * ## Plus One
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {    
  let i = digits.length;
  while (i--) {
      digits[i] = (digits[i] + 1) % 10;
      if (digits[i] > 0) {
          return digits;
      }
  }
  return [1, ...digits];
};

```



## Pivot Index

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let i = 0;
     // Run through all the numbers in the array
    for (; i < nums.length; i++) {
        
        // Get the sum on either half of the potential pivot 
        let leftSum = nums.slice(0, i).reduce((a, b) => a + b, 0)
        let rightSum = nums.slice(i+1).reduce((a, b) => a + b, 0)
        
        // Check if pivot
        if (leftSum === rightSum) { return i; }    
    }
    
    // If we have run through the whole array and not found a pivot then return -1
    return -1;
};

console.log(pivotIndex([1,7,3,6,5,6]));
```


## Valid Params

```js
/**
 * @param {string} s
 * @return {boolean}
 */
function isValid(s) {
  let valid = false;
  let c;
  let dict = {
    '{': '}',
    '(': ')',
    '[': ']'
  };
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    c = s[i];
    if (dict[c]) {
      stack.push(c);
    } else {
      if (dict[stack.pop()] !== c) {
        return false;
      }
    }
  }
  return (stack.length === 0);
};
```
## Minimum Size Subarray Sum

 Given an array of n positive integers and a positive integer s, find the minimal length of a contiguous subarray of which the sum ≥ s. 
 If there isn't one, return 0 instead.

Example: 

Input: s = 7, nums = [2,3,1,2,4,3]
Output: 2

Explanation: the subarray [4,3] has the minimal length under the problem constraint.

Follow up:

If you have figured out the O(n) solution, try coding another solution of which the time complexity is O(n log n). 


[2] = 7
[2 + 3] = 7
[2 3 1] = 7
[2 3 1 2] = 7

We can use 2 points to mark the left and right boundaries of the sliding window. 
When the sum is greater than the target, shift the left pointer; 
when the sum is less than the target, shift the right pointer.

```js
/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
    let ret = Infinity
    for (let i = 0, j = 0, sum = 0; j <= nums.length; ) {
        if (sum < s || i >= j) {
            sum += nums[j++]
        } else {
            ret = Math.min(ret, j - i)
            sum -= nums[i++]
        }
    }
    return ret === Infinity ? 0 : ret
};
minSubArrayLen(7, [2,3,1,2,4,3]);
```


---


## Remove Element

Given an array nums and a value val, remove all instances of that value in-place and return the new length.

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

The order of elements can be changed. It doesn't matter what you leave beyond the new length.

Example 1:

```
Given nums = [3,2,2,3], val = 3,

Your function should return length = 2, with the first two elements of nums being 2.

It doesn't matter what you leave beyond the returned length.
```

```js
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] === val) {
            nums.splice(i, 1);
            i--;
        }
    }
    
    return nums.length;
};
```