# js-leetcode

Just answers and flow charts for various leetcode questions.



## Example with gitbook plugin

This is an exercise:

---

Define a variable `x` equal to 10.

```js
var x =
```

```js
var x = 10;
```

```js
assert(x == 10);
```

```js
// This is context code available everywhere
// The user will be able to call magicFunc in his code
function magicFunc() {
    return 3;
}
```


---


## 0 - ./examples/add-binary.js

```javascript
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

### Flowchart
![./examples/add-binary.js-svg image][./examples/add-binary.js-svg]

[./examples/add-binary.js-svg]: https://raw.githubusercontent.com/jonniespratley/js-leetcode/master/flowcharts/add-binary.svg "Logo Title Text 2"


---

## 1 - ./examples/array-3-sum-equal-zero.js

```javascript
    function sumToZero(arr) {
    if (!arr) return false

    arr.sort();
    let n = arr.length - 1;
    let sum = 0;
    let count = 0;

    //loop each item
    for (let i = 0; i < arr.length; i++) {
        let j = i + 1; //right of i
        let k = n; //end of arr
        while (k > j) {
            count++;
            sum = arr[i] + arr[j] + arr[k];
            console.log(i, j, k, sum);
            
            //found match...done
            if (sum === 0) {
                console.log('Found sum at', i, j, k, `(${arr[i]} + ${arr[j]} + ${arr[k]})`);
                return true;
            }
            // We didn't match. Let's try to get a little closer:
            //   If the sum was too big, decrement k.
            //   If the sum was too small, increment j.
            sum > 0 ? k-- : j++;
        }
    }

    return false;
}


//console.log(sumToZero([1, 1, 2, -1]));
//console.log(sumToZero([1, 2, 3, -3]));
//console.log(sumToZero([2, 1, -3, 3]));
console.log(sumToZero([3, 2, 1, 7, 9, 0, -4, 6]));






function threeSum(arr) {
    arr.sort();
    let k = arr.length - 1;
    for (let i = 0; i < arr.length; i++) {
        const a = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            const b = arr[j];
            console.log(a, b);
        }
    }
    
    
}
console.log(threeSum([2, 1, -3, 3]));
```

### Flowchart
![./examples/array-3-sum-equal-zero.js-svg image][./examples/array-3-sum-equal-zero.js-svg]

[./examples/array-3-sum-equal-zero.js-svg]: https://raw.githubusercontent.com/jonniespratley/js-leetcode/master/flowcharts/array-3-sum-equal-zero.svg "Logo Title Text 2"


---

## 2 - ./examples/array-pair-sum.js

```javascript
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

### Flowchart
![./examples/array-pair-sum.js-svg image][./examples/array-pair-sum.js-svg]

[./examples/array-pair-sum.js-svg]: https://raw.githubusercontent.com/jonniespratley/js-leetcode/master/flowcharts/array-pair-sum.svg "Logo Title Text 2"


---

## 3 - ./examples/array-shuffle.js

```javascript
    /**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this.nums = nums;
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    return this.nums;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
   /* let copy = this.nums.slice();
    for (let i = 0; i < copy.length; i++) {
        let rand = Math.floor(Math.random() * copy.length);
        let temp = copy[i];
        copy[i] = copy[rand];
        copy[rand] = temp;
    }
    return copy;*/

    let nums = [...this.nums];
    let i = nums.length;

    while (i--) {
      const n = Math.floor(Math.random() * nums.length);
      [nums[i], nums[n]] = [nums[n], nums[i]];
    }

    return nums;

   /* let temp = [];
    this.nums.forEach((val, key) => temp[key] = val);
    for (let i = 0; i < temp.length; i++) {
        let rand = Math.floor(Math.random() * (temp.length - i))
        let n = temp[i];
        temp[i] = temp[rand];
        temp[rand] = n;
    }
    
    return temp;*/
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = Object.create(Solution).createNew(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
```

### Flowchart
![./examples/array-shuffle.js-svg image][./examples/array-shuffle.js-svg]

[./examples/array-shuffle.js-svg]: https://raw.githubusercontent.com/jonniespratley/js-leetcode/master/flowcharts/array-shuffle.svg "Logo Title Text 2"


---

## 4 - ./examples/basic-calculator-ii.js

```javascript
    /**

Implement a basic calculator to evaluate a simple expression string.

The expression string contains only non-negative integers, `+`, `-`, `*`, `/` operators and empty spaces ` `. The integer division should truncate toward zero.

Example 1:

```
Input: "3+2*2"
Output: 7
```


Example 2:

```
Input: " 3/2 "
Output: 1
```

Example 3:

```
Input: " 3+5 / 2 "
Output: 5
```
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
    let sum = 0;
    let num = 0;

    //trim spaces
    s = s.replace(/\s/g, '');

    //hold the numbers from the string
    let nums = [];

    //hold the current sign;
    let sign = '+';

    for (let i = 0; i < s.length; i++) {
        let n = s[i];
        if (/\d/.test(n)) {
            n = Number(n);
            num = num * 10 + Number(n);
        }
        // sign or last number
        if ((/\D/.test(n)) || i === s.length - 1) {
            if (sign === '-') nums.push(-num);
            if (sign === '+') nums.push(num);
            if (sign === '*') nums.push(nums.pop() * num);
            if (sign === '/') nums.push(~~(nums.pop() / num));

            sign = n;
            num = 0;
        }
    }

    let res = 0;
    for (let n of nums) {
        res += n;
    }
    return res;
};

console.log(calculate('3+2*2'));
console.log(calculate('3/2'));
console.log(calculate(' 3+5 / 2 '));
```

### Flowchart
![./examples/basic-calculator-ii.js-svg image][./examples/basic-calculator-ii.js-svg]

[./examples/basic-calculator-ii.js-svg]: https://raw.githubusercontent.com/jonniespratley/js-leetcode/master/flowcharts/basic-calculator-ii.svg "Logo Title Text 2"


---

## 5 - ./examples/best-time-to-buy-sell-stock-2.js

```javascript
    // Say you have an array for which the ith element is the price of a given stock on day i.
//
// Design an algorithm to find the maximum profit. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).
//
// Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).
//
// Example 1:
//
// Input: [7,1,5,3,6,4]
// Output: 7
// Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
// Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
//
// Example 2:
//
// Input: [1,2,3,4,5]
// Output: 4
// Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
// Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are
// engaging multiple transactions at the same time. You must sell before buying again.
//
// Example 3:
//
// Input: [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transaction is done, i.e. max profit = 0.

/**
 * @param {number[]} prices
 * @return {number}
 */

// time O(n)
// space O(1)
function maxProfit(prices) {
    let profit = 0;

    for (let i = 0; i < prices.length - 1; i++) {
        const diff = prices[i + 1] - prices[i];
        if (diff > 0) profit += diff;
    }

    return profit;
}
```

### Flowchart
![./examples/best-time-to-buy-sell-stock-2.js-svg image][./examples/best-time-to-buy-sell-stock-2.js-svg]

[./examples/best-time-to-buy-sell-stock-2.js-svg]: https://raw.githubusercontent.com/jonniespratley/js-leetcode/master/flowcharts/best-time-to-buy-sell-stock-2.svg "Logo Title Text 2"


---

## 6 - ./examples/best-time-to-buy-sell-stock.js

```javascript
    // Say you have an array for which the ith element is the price of a given stock on day i.
//
// If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.
//
// Note that you cannot sell a stock before you buy one.
//
// Example 1:
//
// Input: [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Not 7-1 = 6, as selling price needs to be larger than buying price.
//
// Example 2:
//
// Input: [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transaction is done, i.e. max profit = 0.

/**
 * @param {number[]} prices
 * @return {number}
 */

// time O(n)
// space O(1)
function maxProfit(prices) {
    let min = Infinity;
    let max = 0;

    for (let i = 0; i < prices.length - 1; i++) {
        min = Math.min(min, prices[i]);
        max = Math.max(max, prices[i + 1] - min)
    }

    return max;
}
```

### Flowchart
![./examples/best-time-to-buy-sell-stock.js-svg image][./examples/best-time-to-buy-sell-stock.js-svg]

[./examples/best-time-to-buy-sell-stock.js-svg]: https://raw.githubusercontent.com/jonniespratley/js-leetcode/master/flowcharts/best-time-to-buy-sell-stock.svg "Logo Title Text 2"


---

## 7 - ./examples/big-o.js

```javascript
    /**
@description
## Big-O Analysis

Big-O analysis is a form of runtime analysis that measures the efficiency of an algorithm in terms of the time it takes for the algorithm to run as a function of the input size. It’s not a formal benchmark, just a simple way to classify algorithms by relative efficiency when dealing with very large input sizes.
How Big-O Analysis Works

In Big-O analysis, input size is assumed to be an unknown value n. In this example, n simply represents the number of elements in an array. In other problems, n may represent the number of nodes in a linked list, the number of bits in a data type, or the number of entries in a hash table. After determining what n means in terms of the input, you must determine how many operations are performed for each of the n input items. “Operation” is a fuzzy word because algorithms differ greatly.
Commonly, an operation is something that a real computer can do in a constant amount of time, like adding an input value to a constant, creating a new input item, or deleting an input value. In Big-O analysis, the times for these operations are all considered equivalent.

- In both `CompareToMax` and `CompareToAll`, the operation of greatest interest is comparing an array value to another value.

- In `CompareToMax`, each array element was compared once to a maximum value. Thus, the n input items are each examined once, resulting in n examinations. 
This is considered O(n), usually referred to as linear time: The time required to run the algorithm increases linearly with the number of input items.
How to Do Big-O Analysis

The general procedure for Big-O runtime analysis is as follows:

1. Figure out what the input is and what n represents.
2. Express the number of operations the algorithm performs in terms of n.
3. Eliminate all but the highest-order terms.
4. Remove all constant factors.

For the algorithms you’ll encounter in interviews, Big-O analysis should be straightforward as long as you correctly identify the operations that are dependent on the input size.
Which is Better?

The performance of most algorithms depends on n, the size of the input. The algorithms can be classified as follows from best-to-worse performance:

* O(log n) — An algorithm is said to be logarithmic if its running time increases logarithmically in proportion to the input size.
* O(n) — A linear algorithm’s running time increases in direct proportion to the input size.
* O(n log n) — A superlinear algorithm is midway between a linear algorithm and a polynomial algorithm.
* O(nc) — A polynomial algorithm grows quickly based on the size of the input.
* O(cn) — An exponential algorithm grows even faster than a polynomial algorithm.
* O(n!) — A factorial algorithm grows the fastest and becomes quickly unusable for even small values of n.

The run times of different orders of algorithms separate rapidly as n gets larger. 

Consider the run time for each of these algorithm classes with n = 10:

* log 10 = 1
* 10 = 10
* 10 log 10 = 10
* 102 = 100
* 210= 1,024
* 10! = 3,628,800

Now double it to n = 20:

* log 20 = 1.30
* 20 = 20
* 20 log 20= 26.02
* 202 = 400
* 220 = 1,048,576
* 20! = 2.43×1018

Notation      - Name
O(1)          - Constant
O(log(n))     - Logarithmic
O((log(n))c)  - Poly-logarithmic
O(n)          - Linear
O(n2)         - Quadratic
O(nc)         - Polynomial
O(cn)         - Exponential


### [] O(1)

Consider the following function:

function increment(num){ 
  return ++num; 
}

[]O(N)

Now, let's use the sequential search algorithm:

function sequentialSearch(array, item){ 
  for (var i=0; i<array.length; i++){ 
    if (item === array[i]){ //{1} 
      return i; 
    } 
  } 
  return -1; 
}

[]O(N2)
For the O(n2) example, let's use the bubble sort algorithm:

function swap(array, index1, index2){ 
  var aux = array[index1]; 
  array[index1] = array[index2]; 
  array[index2] = aux; 
} 
 
function bubbleSort(array){ 
  var length = array.length; 
  for (var i=0; i<length; i++){    //{1} 
    for (var j=0; j<length-1; j++ ){ //{2} 
      if (array[j] > array[j+1]){ 
        swap(array, j, j+1); 
      } 
    } 
  } 
}

*/

// O(1)
function increment(num) {
    return ++num;
}
console.log(increment(2));


/**
 * Sequential search example
 * @param {Array} array The array of items
 * @param {any} item The item to search for
 */
function sequentialSearch(array, item) {
    for (var i = 0; i < array.length; i++) {
        if (item === array[i]) { //{1} 
            return i;
        }
    }
    return -1;
}

let input1 = [9, 5, 2, 4, 3, 7, 6];

console.log(sequentialSearch(input1, 4));



// O(n^2)
function swap(array, index1, index2) {
    let aux = array[index1];
    array[index1] = array[index2];
    array[index2] = aux;
}

function bubbleSort(array) {
    let length = array.length;
    for (let i = 0; i < length; i++) { //{1} 
        for (let j = 0; j < length - 1; j++) { //{2} 
            if (array[j] > array[j + 1]) {
                swap(array, j, j + 1);
            }
        }
    }
    return array;
}
console.log(bubbleSort(input1));
```

### Flowchart
![./examples/big-o.js-svg image][./examples/big-o.js-svg]

[./examples/big-o.js-svg]: https://raw.githubusercontent.com/jonniespratley/js-leetcode/master/flowcharts/big-o.svg "Logo Title Text 2"


---

## 8 - ./examples/binary-search-tree-iterator.js

```javascript
    /*
## Binary Search Tree Iterator

Implement an iterator over a binary search tree (BST). Your iterator will be initialized with the root node of a BST.

Calling next() will return the next smallest number in the BST.

Note: next() and hasNext() should run in average O(1) time and uses O(h) memory, where h is the height of the tree.


*/
/**
 * Definition for binary tree
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}


class BSTIterator {
    /**
     * @constructor
     * @param {TreeNode} root - root of the binary search tree
     */
    constructor(node) {
        this.stack = [];
        this.pushLeft(node);
    }
    /**
     * @this BSTIterator
     * @returns {boolean} - whether we have a next smallest number
     */
    hasNext() {
        return this.stack.length > 0;
    }
    /**
     * @this BSTIterator
     * @returns {number} - the next smallest number
     */
    next() {
        if (this.hasNext()) {
            const n = this.stack.pop();
            if (n.right) this.pushLeft(n.right);
            return n.val;
        }
    }
    pushLeft(node) {
        while (node) {
            this.stack.push(node);
            node = node.left;
        }
    }
}


/*
In a BST, the value held by a node’s left child is less than or equal to its own value, 
and the value held by a node’s right child is greater than or equal to its value.
*/


//[2,1,3], p = 1
let t = new TreeNode(2);
t.right = new TreeNode(3);
t.left = new TreeNode(1);

/**
 * Your BSTIterator will be called like this:
 * var i = new BSTIterator(root), a = [];
 * while (i.hasNext()) a.push(i.next());
 */
var i = new BSTIterator(t),
    a = [];
while (i.hasNext()) a.push(i.next());

console.log(a); //1,2,3




class BST {
    findNode(root, value) {
        while (root != null) {
            let currval = root.val;
            if (currval == value) break;
            if (currval <= value) {
                root = root.right;
            } else { // currval > value
                root = root.left;
            }
        }
        return root;
    }
}

let bst = new BST();
let n = bst.findNode(t, 3);
console.log(bst.findNode(t, 3));
console.log(bst.findNode(t, 5));
console.log(bst.findNode(t, 2));
```

### Flowchart
![./examples/binary-search-tree-iterator.js-svg image][./examples/binary-search-tree-iterator.js-svg]

[./examples/binary-search-tree-iterator.js-svg]: https://raw.githubusercontent.com/jonniespratley/js-leetcode/master/flowcharts/binary-search-tree-iterator.svg "Logo Title Text 2"


---

## 9 - ./examples/binary-search.js

```javascript
    function binarySearch(arr, val) {
    let lower_bound = 0;
    let upper_bound = arr.length - 1;

    while (lower_bound <= upper_bound) {
        let midpoint = Math.floor(upper_bound + lower_bound / 2);
        let value_at_midpoint = arr[midpoint];

        console.log(midpoint, value_at_midpoint);

        if (val < value_at_midpoint) {
            upper_bound = midpoint - 1;
        } else if (val > value_at_midpoint) {
            lower_bound = midpoint + 1;
        } else if (val == value_at_midpoint) {
            return midpoint;
        }
    }
    return null;
}

//console.log(binarySearch([1, 3, 4, 5, 6, 21, 43, 54, 86], 21));
//console.log(binarySearch([1, 3, 4, 5, 6, 21, 43, 54, 86], 1));

/**
 * 
 * Given two unsorted arrays of distinct elements, 
 * the task is to find all pairs from both arrays whose sum is equal to x.
 */

function findPairs(arr1, arr2, x) {
    let map = {};
    for (let i = 0; i < arr1.length; i++) {
        map[arr1[i]] = 0;
    }
    for (let j = 0; j < arr2.length; j++) {
        console.log(x - arr2[j]);
        if (map[x - arr2[j]]) {
            console.log('Found pair');
        }
    }

}
console.log(findPairs([1, 0, -4, 7, 6, 4], [0, 2, 4, -3, 2, 1], 8))
```

### Flowchart
![./examples/binary-search.js-svg image][./examples/binary-search.js-svg]

[./examples/binary-search.js-svg]: https://raw.githubusercontent.com/jonniespratley/js-leetcode/master/flowcharts/binary-search.svg "Logo Title Text 2"


---

## 10 - ./examples/binary-tree-in-order-traversal.js

```javascript
    // Given a binary tree, return the inorder traversal of its nodes' values.
//
// Example:
//
// Input: [1,null,2,3]
//    1
//     \
//      2
//      /
//     3
//
// Output: [1,3,2]
//
// Follow up: Recursive solution is trivial, could you do it iteratively?

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

/** 1) Recursion */
// time O(n), the time complexity is O(n) because the recursive function is T(n) = 2 * T(n / 2) + 1
// space O(log n), n is number of nodes. The worst case space is O(n)
function inorderTraversal1(node) {
    let res = [];
    go(node, res);
    return res;
}

function go(node, res) {
    if (!node) return;

    go(node.left, res);
    res.push(node.val);
    go(node.right, res);
}

/** 2) Iteration using stack */
// time O(n)
// space O(n)
function inorderTraversal(node) {
    let stack = [];
    let res = [];

    while (node || stack.length) {
        // drill left
        while (node) {
            stack.push(node);
            node = node.left;
        }

        // print & go to right child
        node = stack.pop();
        res.push(node.val);
        node = node.right;
    }

    return res;
}
```

### Flowchart
![./examples/binary-tree-in-order-traversal.js-svg image][./examples/binary-tree-in-order-traversal.js-svg]

[./examples/binary-tree-in-order-traversal.js-svg]: https://raw.githubusercontent.com/jonniespratley/js-leetcode/master/flowcharts/binary-tree-in-order-traversal.svg "Logo Title Text 2"


---

## 11 - ./examples/binary-tree-inorder-successor.js

```javascript
    /*
## Inorder Successor in BST

Given a binary search tree and a node in it, find the in-order successor of that node in the BST.

> Note: If the given node has no in-order successor in the tree, return null.

Example 1:

```
Input: root = [2,1,3], p = 1

  2
 / \
1   3

Output: 2
```

Example 2:

```
Input: root = [5,3,6,2,4,null,null,1], p = 6

      5
     / \
    3   6
   / \
  2   4
 /   
1

Output: null
```

*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * In-order traversal visits the right, then self, then left.
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @return {TreeNode}
 */
var inorderSuccessor = function (root, p) {
    if (!root) return null;

    function traverse(node, res) {
        if (!node) return;
        res.push(node.val);
        traverse(node.right, res);
        traverse(node.left, res);
    }

    let res = [];
    traverse(root, res);
    return res[res.indexOf(p) - 1];
};


//[2,1,3], p = 1
let t = new TreeNode(2);
t.right = new TreeNode(1);
t.left = new TreeNode(3);

//console.log(inorderTraversal(t));
//console.log(inorderTraversalRecur(t));
console.log(inorderSuccessor(0, 1));
console.log(inorderSuccessor(t, 1));







var inorderTraversal3 = function (root) {
    if (!root) return [];
    let stack = [];
    let order = [];
    stack.push(root);
    while (stack.length) {
        let node = stack.pop();
        if (node.v) {
            order.push(node.val);
        } else {
            node.v = true;
            if (node.right) {
                stack.push(node.right);
            }
            stack.push(node);
            if (node.left) {
                stack.push(node.left);
            }

        }
    }
    return order;
};


/** 1) Recursion */
// time O(n), the time complexity is O(n) because the recursive function is T(n) = 2 * T(n / 2) + 1
// space O(log n), n is number of nodes. The worst case space is O(n)
function inorderTraversal1(node) {
    let res = [];
    go(node, res);
    return res;
}

function go(node, res) {
    if (!node) return;

    go(node.left, res);
    res.push(node.val);
    go(node.right, res);
}

/** 2) Iteration using stack */
// time O(n)
// space O(n)
function inorderTraversal(node) {
    let stack = [];
    let res = [];

    while (node || stack.length) {

        // drill left
        while (node) {
            console.log(node && node.val, 'left');
            stack.push(node);
            node = node.left;
        }

        // print & go to right child
        node = stack.pop();
        res.push(node.val);
        node = node.right;

        console.log(node && node.val, 'right');

    }

    return res;
}

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}


console.log(inorderTraversal1(t));
console.log(inorderTraversal3(t));
console.log(inorderTraversal(t));
```

### Flowchart
![./examples/binary-tree-inorder-successor.js-svg image][./examples/binary-tree-inorder-successor.js-svg]

[./examples/binary-tree-inorder-successor.js-svg]: https://raw.githubusercontent.com/jonniespratley/js-leetcode/master/flowcharts/binary-tree-inorder-successor.svg "Logo Title Text 2"


---

## 12 - ./examples/binary-tree-post-order-traversal.js

```javascript
    // Given a binary tree, return the postorder traversal of its nodes' res.
//
// Example:
//
// Input: [1,null,2,3]
//    1
//     \
//      2
//     /
//    3
//
// Output: [3,2,1]
// Follow up: Recursive solution is trivial, could you do it iteratively?
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
// 1) Recursive
function postorderTraversal1(node) {
    let res = [];
    go(node, res);
    return res;
}

function go(node, res) {
    if (!node) return;
    go(node.left, res);
    go(node.right, res);
    res.push(node.val);
}
// 2) Iterating method using Stack
function postorderTraversal(node) {
    let stack = [];
    let res = [];
    if (node) stack.push(node);
    while (stack.length) {
        node = stack.pop();
        res.unshift(node.val);
        if (node.left) stack.push(node.left);
        if (node.right) stack.push(node.right);
    }
    return res;
}
/** Level Order Traversal */
// Iterating method using Queue
function levelOrderTraversal(node) {
    let stack = [];
    let res = [];
    if (node) stack.push(node);
    while (stack.length) {
        node = stack.shift();
        res.push(node.val);
        if (node.left) stack.push(node.left);
        if (node.right) stack.push(node.right);
    }
    return res;
}
```

### Flowchart
![./examples/binary-tree-post-order-traversal.js-svg image][./examples/binary-tree-post-order-traversal.js-svg]

[./examples/binary-tree-post-order-traversal.js-svg]: https://raw.githubusercontent.com/jonniespratley/js-leetcode/master/flowcharts/binary-tree-post-order-traversal.svg "Logo Title Text 2"


---

## 13 - ./examples/binary-tree-pre-order-traversal.js

```javascript
    // Given a binary tree, return the preorder traversal of its nodes' values.
//
// Example:
//
//   Input: [1,null,2,3]
//     1
//      \
//       2
//      /
//     3
//
// Output: [1,2,3]
//
// Follow up: Recursive solution is trivial, could you do it iteratively?
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
// 1) Recursive
function preorderTraversal1(node) {
    let res = [];
    helper(node, res);
    return res;
}

function helper(node, res) {
    if (!node) return;
    res.push(node.val);
    helper(node.left, res);
    helper(node.right, res);
}
// 2) Iterating method using Stack
function preorderTraversal(node) {
    let stack = [];
    let res = [];
    while (node || stack.length) {
        // print & drill left
        while (node) {
            res.push(node.val);
            stack.push(node);
            node = node.left;
        }
        // go to right child
        node = stack.pop();
        node = node.right;
    }
    return res;
}

var inorderTraversal = function (root) {
    if (!root) return [];
    let stack = [];
    let order = [];
    stack.push(root);
    while (stack.length) {
        let node = stack.pop();
        if (node.v) {
            order.push(node.val);
        } else {
            node.v = true;
            if (node.right) {
                stack.push(node.right);
            }
            stack.push(node);
            if (node.left) {
                stack.push(node.left);
            }

        }
    }
    return order;
};

function inorderTraversalRecur(root){
    if(!root) return null;
    
    if(root.right) inorderTraversalRecur(root.right)
    console.log(root.val);
    if(root.left) inorderTraversalRecur(root.left)
}

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
//[2,1,3], p = 1
let t = new TreeNode(2);
t.right = new TreeNode(1);
t.left = new TreeNode(3);

console.log(inorderTraversal(t));
console.log(inorderTraversalRecur(t));
```

### Flowchart
![./examples/binary-tree-pre-order-traversal.js-svg image][./examples/binary-tree-pre-order-traversal.js-svg]

[./examples/binary-tree-pre-order-traversal.js-svg]: https://raw.githubusercontent.com/jonniespratley/js-leetcode/master/flowcharts/binary-tree-pre-order-traversal.svg "Logo Title Text 2"


---

## 14 - ./examples/bubble-sort.js

```javascript
    
function swap(array, index1, index2) {
    var aux = array[index1];
    array[index1] = array[index2];
    array[index2] = aux;
}

function bubbleSort(array) {
    let length = array.length;
    for (let i = 0; i < length; i++) {
        console.log(i, array)
        for (let j = 0; j < length - 1; j++) {
            if (array[j] > array[j + 1]) {
                swap(array, j, j + 1);
            }
        }
    }
    return array;
}
console.log(bubbleSort([5,4,3,2,1]));
```

### Flowchart
![./examples/bubble-sort.js-svg image][./examples/bubble-sort.js-svg]

[./examples/bubble-sort.js-svg]: https://raw.githubusercontent.com/jonniespratley/js-leetcode/master/flowcharts/bubble-sort.svg "Logo Title Text 2"


---

## 15 - ./examples/climb-stairs.js

```javascript
    /*
You are climbing a stair case. It takes n steps to reach to the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Note: Given n will be a positive integer.

Example 1:

```
Input: 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
```

Example 2:

```
Input: 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
```
*/
var fib = function (n) {
    let fibo = [0, 1];
    if (n <= 2) return 1;
    for (var i = 2; i <= n; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo[n];
}
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    return fib(n + 1)
};
```

### Flowchart
![./examples/climb-stairs.js-svg image][./examples/climb-stairs.js-svg]

[./examples/climb-stairs.js-svg]: https://raw.githubusercontent.com/jonniespratley/js-leetcode/master/flowcharts/climb-stairs.svg "Logo Title Text 2"


---

## 16 - ./examples/coin-change.js

```javascript
    const print = console.log.apply;
function makeChange(origAmt, coins) {
    var remainAmt = 0;
    if (origAmt % .25 < origAmt) {
       coins[3] = parseInt(origAmt / .25);
       remainAmt = origAmt % .25;
       origAmt = remainAmt;
    }
    if (origAmt % .1 < origAmt) {
       coins[2] = parseInt(origAmt / .1);
       remainAmt = origAmt % .1;
       origAmt = remainAmt;
    }
    if (origAmt % .05 < origAmt) {
       coins[1] = parseInt(origAmt / .05);
       remainAmt = origAmt % .05;
       origAmt = remainAmt;
    }
    coins[0] = parseInt(origAmt / .01);
 }
 
 function showChange(coins) {
    if (coins[3] > 0) {
       print("Number of quarters - " + coins[3] + " - " + coins[3] * .25);
    }
    if (coins[2] > 0) {
       print("Number of dimes - " + coins[2] + " - " + coins[2] * .10);
    }
    if (coins[1] > 0) {
       print("Number of nickels - " + coins[1] + " - " + coins[1] * .05);
    }
    if (coins[0] > 0) {
       print("Number of pennies - " + coins[0] + " - " + coins[0] * .01);
    }
 }
 
 var origAmt = .63;
 var coins = [];
 makeChange(origAmt, coins);
 showChange(coins);
 
```

### Flowchart
![./examples/coin-change.js-svg image][./examples/coin-change.js-svg]

[./examples/coin-change.js-svg]: https://raw.githubusercontent.com/jonniespratley/js-leetcode/master/flowcharts/coin-change.svg "Logo Title Text 2"


---

## 17 - ./examples/contains-duplicate.js

```javascript
    /**
 * Given an array of integers, find if the array contains any duplicates.

Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

Example 1:

Input: [1,2,3,1]
Output: true
Example 2:

Input: [1,2,3,4]
Output: false
Example 3:

Input: [1,1,1,3,3,4,3,2,4,2]
Output: true
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    let result = false;
    let p1 = 0;
    let p2 = 0;
    let len = nums.length;
    let matchCount = 0;
    while (p1 < len) {
        let n1 = nums[p1];
        p2 = p1 + 1;
        while (p2 < len) {
            let n2 = nums[p2];
            p2++;
            if (n1 == n2) {
                result = true;
            }
        }
        p1++;
    }

    return result;
};

function containsDuplicate2(nums) {
    let obj = {};
    for (let num of nums) {
        if (obj[num]) return true;
        obj[num] = true;
    }
    return false;
}

console.time('containsDuplicate');
console.log(containsDuplicate([9, 9, 1]));
console.log(containsDuplicate([1, 2, 3]));
console.timeEnd('containsDuplicate');


console.time('containsDuplicate2');
console.log(containsDuplicate2([9, 9, 1]));
console.log(containsDuplicate2([1, 2, 3]));
console.timeEnd('containsDuplicate2');
```

### Flowchart
![./examples/contains-duplicate.js-svg image][./examples/contains-duplicate.js-svg]

[./examples/contains-duplicate.js-svg]: https://raw.githubusercontent.com/jonniespratley/js-leetcode/master/flowcharts/contains-duplicate.svg "Logo Title Text 2"


---

## 18 - ./examples/count-and-say.js

```javascript
    // The count-and-say sequence is the sequence of integers with the first five terms as following:
//
// 1.     1
// 2.     11
// 3.     21
// 4.     1211
// 5.     111221
//
// 1 is read off as "one 1" or 11.
// 11 is read off as "two 1s" or 21.
// 21 is read off as "one 2, then one 1" or 1211.
// Given an integer n, generate the nth term of the count-and-say sequence.
//
// Note: Each term of the sequence of integers will be represented as a string.
//
// Example 1:
//
// Input: 1
// Output: "1"
//
// Example 2:
//
// Input: 4
// Output: "1211"

/**
 * @param {number} n
 * @return {string}
 */
function countAndSay(n) {
    let res = '1';

    for (let i = 1; i < n; i++) {
        res = say(res);
    }

    return res;
}

function say(str) {
    let res = '';
    let count = 0;
    let num = str[0];

    for (let i = 0; i < str.length; i++) {
        if (str[i] === num) {
            count++;
        } else {
            res += count + str[i - 1];
            count = 1;
            num = str[i];
        }
    }

    return res + count + num;
}
```

### Flowchart
![./examples/count-and-say.js-svg image][./examples/count-and-say.js-svg]

[./examples/count-and-say.js-svg]: https://raw.githubusercontent.com/jonniespratley/js-leetcode/master/flowcharts/count-and-say.svg "Logo Title Text 2"


---

## 19 - ./examples/delete-nth-linked-list.js

```javascript
    /*
## Delete Node in a Linked List

Write a function to delete a node (except the tail) in a singly linked list, given only access to that node.

Given linked list -- head = [4,5,1,9], which looks like following:
```
    4 -> 5 -> 1 -> 9
```
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * // Since we do not have access to the node before the one we want to delete, we cannot modify the next pointer of that node in any way.
// Instead, we have to replace the value of the node we want to delete with the value in the node after it, and then delete the node after it.
// Because we know that the node we want to delete is not the tail of the list, we can guarantee that this approach is possible.

 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function (node) {
    node.val = node.next.val;
    node.next = node.next.next;
};
```

### Flowchart
![./examples/delete-nth-linked-list.js-svg image][./examples/delete-nth-linked-list.js-svg]

[./examples/delete-nth-linked-list.js-svg]: https://raw.githubusercontent.com/jonniespratley/js-leetcode/master/flowcharts/delete-nth-linked-list.svg "Logo Title Text 2"


---

## 20 - ./examples/design-hit-counter.js

```javascript
    /*
## Design Hit Counter

Design a hit counter which counts the number of hits received in the past 5 minutes.

Each function accepts a timestamp parameter (in seconds granularity) and you may assume that calls are being made to the system in chronological order (ie, the timestamp is monotonically increasing). You may assume that the earliest timestamp starts at 1.

It is possible that several hits arrive roughly at the same time.

Example:

```
const counter = new HitCounter();

// hit at timestamp 1.
counter.hit(1);

// hit at timestamp 2.
counter.hit(2);

// hit at timestamp 3.
counter.hit(3);

// get hits at timestamp 4, should return 3.
counter.getHits(4);

// hit at timestamp 300.
counter.hit(300);

// get hits at timestamp 300, should return 4.
counter.getHits(300);

// get hits at timestamp 301, should return 3.
counter.getHits(301); 
```

Follow up:
- What if the number of hits per second could be very large? Does your design scale?
*/
/**
 * Initialize your data structure here.
 */
var HitCounter = function () {
    this.map = new Map();
};

/**
 * Record a hit.
        @param timestamp - The current timestamp (in seconds granularity). 
 * @param {number} timestamp
 * @return {void}
 */
HitCounter.prototype.hit = function (timestamp) {
    if (!this.map.has(timestamp)) {
        this.map.set(timestamp, 0);
    }
    return this.map.set(timestamp, this.map.get(timestamp) + 1);
};

/**
 * Return the number of hits in the past 5 minutes.
        @param timestamp - The current timestamp (in seconds granularity). 
 * @param {number} timestamp
 * @return {number}
 */
HitCounter.prototype.getHits = function (timestamp) {
    let count = 0;
    let bound = Math.max(1, timestamp - 300 + 1);
    for (let i = timestamp; i >= bound; i--) {
        if (this.map.has(i)) {
            count += this.map.get(i);
        }
    }
    return count;
};

/** 
 * Your HitCounter object will be instantiated and called as such:
 * var obj = Object.create(HitCounter).createNew()
 * obj.hit(timestamp)
 * var param_2 = obj.getHits(timestamp)
 */
const counter = new HitCounter();

// hit at timestamp 1.
counter.hit(1);

// hit at timestamp 2.
counter.hit(2);

// hit at timestamp 3.
console.log(counter.hit(3));

// get hits at timestamp 4, should return 3.
console.log(counter.getHits(4));

// hit at timestamp 300.
counter.hit(300);

// get hits at timestamp 300, should return 4.
console.log(counter.getHits(300));

// get hits at timestamp 301, should return 3.
console.log(counter.getHits(301));

```

### Flowchart
![./examples/design-hit-counter.js-svg image][./examples/design-hit-counter.js-svg]

[./examples/design-hit-counter.js-svg]: https://raw.githubusercontent.com/jonniespratley/js-leetcode/master/flowcharts/design-hit-counter.svg "Logo Title Text 2"


---

## 21 - ./examples/design-linked-list.js

```javascript
    /**
 * Initialize your data structure here.
 */
var MyLinkedList = function() {
    
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    
};

/**
 * Append a node of value val to the last element of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    
};

/**
 * Delete the index-th node in the linked list, if the index is valid. 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = Object.create(MyLinkedList).createNew()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
var linkedList = new MyLinkedList();
linkedList.addAtHead(1);
linkedList.addAtTail(3);
linkedList.addAtIndex(1, 2);  // linked list becomes 1->2->3
linkedList.get(1);            // returns 2
linkedList.deleteAtIndex(1);  // now the linked list is 1->3
linkedList.get(1);            // returns 3
```

### Flowchart
![./examples/design-linked-list.js-svg image][./examples/design-linked-list.js-svg]

[./examples/design-linked-list.js-svg]: https://raw.githubusercontent.com/jonniespratley/js-leetcode/master/flowcharts/design-linked-list.svg "Logo Title Text 2"


---

## 22 - ./examples/diagonal-traverse.js

```javascript
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

### Flowchart
![./examples/diagonal-traverse.js-svg image][./examples/diagonal-traverse.js-svg]

[./examples/diagonal-traverse.js-svg]: https://raw.githubusercontent.com/jonniespratley/js-leetcode/master/flowcharts/diagonal-traverse.svg "Logo Title Text 2"


---

## 23 - ./examples/example.js

```javascript
    /**
 * 
 * @param {Array} list A list of items
 * @param {any} element The value to search for.
 */
function indexSearch(list, element) {
    let currentIndex,
        currentElement,
        minIndex = 0,
        maxIndex = list.length - 1;

    while (minIndex <= maxIndex) {
        currentIndex = Math.floor(maxIndex + maxIndex) / 2;
        currentElement = list[currentIndex];
        
        if (currentElement === element) {
            return currentIndex;
        }

        if (currentElement < element) {
            minIndex = currentIndex + 1;
        }

        if (currentElement > element) {
            maxIndex = currentIndex - 1;
        }
    }

    return -1;
}

console.log(indexSearch([2,1,4,8,3,5,6,3,2,1,9], 5))
```

### Flowchart
![./examples/example.js-svg image][./examples/example.js-svg]

[./examples/example.js-svg]: https://raw.githubusercontent.com/jonniespratley/js-leetcode/master/flowcharts/example.svg "Logo Title Text 2"


---

## 24 - ./examples/facebook-interview-question.js

```javascript
    /**
 * question: determine if any 3 integers in an array sum to zero.
 * 
 * [ 2, 3, 1, -6 ]
 * [ 2, 1, -1, -1]
 * 
 * Time: O(n2)
 * Space: O(1)
 * 
 * @param {*} arr 
 */
function sumToZero(arr) {
    if (!arr) return false
    arr.sort();

    let i = 0;
    let j = 0;
    let k = arr.length - 1;
    let sum = 0;

    //loop each item
    for (; i < arr.length; i++) {
        j = i + 1;

        while (k > j) {
            sum = arr[i] + arr[j] + arr[k];

            //Check if we have match
            if (sum === 0) {
                return true;
            }

            sum > 0 ? k-- : j++;
        }
    }
    return false;
}
```

### Flowchart
![./examples/facebook-interview-question.js-svg image][./examples/facebook-interview-question.js-svg]

[./examples/facebook-interview-question.js-svg]: https://raw.githubusercontent.com/jonniespratley/js-leetcode/master/flowcharts/facebook-interview-question.svg "Logo Title Text 2"


---

## 25 - ./examples/fib.js

```javascript
    function fib(n){
    if(n === 1 || n === 2){
        return 1;
    }
    return fib(n - 1) + fib(n - 2); 
}

console.log(fib(5));

```

### Flowchart
![./examples/fib.js-svg image][./examples/fib.js-svg]

[./examples/fib.js-svg]: https://raw.githubusercontent.com/jonniespratley/js-leetcode/master/flowcharts/fib.svg "Logo Title Text 2"


---

## 26 - ./examples/find-all-anagrams-in-a-string.js

```javascript
    /*
## Find All Anagrams in a String
Given a string s and a non-empty string p, find all the start indices of p's anagrams in s.

Strings consists of lowercase English letters only and the length of both strings s and p will not be larger than 20,100.

The order of output does not matter.

Example 1:

```
Input:
s: "cbaebabacd" p: "abc"

Output:
[0, 6]

Explanation:
The substring with start index = 0 is "cba", which is an anagram of "abc".
The substring with start index = 6 is "bac", which is an anagram of "abc".
```

Example 2:

```
Input:
s: "abab" p: "ab"

Output:
[0, 1, 2]

Explanation:
The substring with start index = 0 is "ab", which is an anagram of "ab".
The substring with start index = 1 is "ba", which is an anagram of "ab".
The substring with start index = 2 is "ab", which is an anagram of "ab".
```
*/

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {

    const resultArray = [];
    const pLength = p.length;
    const sLength = s.length;

    // create two empty arrays with 0 inside
    const pWindow = new Array(26).fill(0);
    const sWindow = new Array(26).fill(0);

    //assume only a-z
    //TODO: add checker later if input has invalid characters
    [...p].forEach(character => {
        // charCodeAt returns a--> 97, b --> 98, c--> 99, etc
        pWindow[character.charCodeAt(0) - 97]++
    });

    [...s].forEach((character, index) => {
        //jump into next position, and minus the previous chart from window
        if (index >= pLength) sWindow[s.charCodeAt(index - pLength) - 97]--
        sWindow[character.charCodeAt(0) - 97]++
        // compare two strings
        if (pWindow.join() === sWindow.join()) resultArray.push(index + 1 - pLength)
    });

    return resultArray
};

console.log(findAnagrams('abab', 'ab'));
```

### Flowchart
![./examples/find-all-anagrams-in-a-string.js-svg image][./examples/find-all-anagrams-in-a-string.js-svg]

[./examples/find-all-anagrams-in-a-string.js-svg]: https://raw.githubusercontent.com/jonniespratley/js-leetcode/master/flowcharts/find-all-anagrams-in-a-string.svg "Logo Title Text 2"


---

## 27 - ./examples/find-min-in-rotated-sorted-array.js

```javascript
    /**
# Find Minimum in Rotated Sorted Array
Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e.,  [0,1,2,4,5,6,7] might become  [4,5,6,7,0,1,2]).

Find the minimum element.

You may assume no duplicate exists in the array.

Example 1:

Input: [3,4,5,1,2] 
Output: 1
Example 2:

Input: [4,5,6,7,0,1,2]
Output: 0

 * 
 * 
 * 
 * @param {number[]} nums
 * @return {number}
 */
var findMin2 = function (nums) {
    var min = Infinity

    for (var i = 0; i < nums.length; i++) {
        if (nums[i] > nums[i + 1]) {
            return nums[i + 1]
        }
        if (nums[i] < min) {
            min = nums[i]
        }
    }
    return min
};

var findMin3 = function (nums) {
    let left = 0,
        right = nums.length - 1;
    while (right - left > 1) {
        let mid = left + ((right - left) >> 1);
        if (nums[mid] > nums[right]) {
            left = mid;
        } else {
            right = mid;
        }
    }
    return Math.min(nums[left], nums[right]);
};

var findMin = function (nums) {
    return Math.min(...nums);
}
```

### Flowchart
![./examples/find-min-in-rotated-sorted-array.js-svg image][./examples/find-min-in-rotated-sorted-array.js-svg]

[./examples/find-min-in-rotated-sorted-array.js-svg]: https://raw.githubusercontent.com/jonniespratley/js-leetcode/master/flowcharts/find-min-in-rotated-sorted-array.svg "Logo Title Text 2"


---

## 28 - ./examples/first-bad-version.js

```javascript
    // You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.
//
// Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.
//
// You are given an API bool isBadVersion(version) which will return whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.
//
// Example:
//
// Given n = 5
//
// call isBadVersion(3) -> false
// call isBadVersion(5) -> true
// call isBadVersion(4) -> true
//
// Then 4 is the first bad version.

/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */

/** Binary search */
function solution(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    return find(1, n);
  };

  function find(l, r) {
    if (l === r) return l;

    const mid = Math.floor((l + r) / 2);
    return isBadVersion(mid) ? find(l, mid) : find(mid + 1, r);
  }
}
```

### Flowchart
![./examples/first-bad-version.js-svg image][./examples/first-bad-version.js-svg]

[./examples/first-bad-version.js-svg]: https://raw.githubusercontent.com/jonniespratley/js-leetcode/master/flowcharts/first-bad-version.svg "Logo Title Text 2"


---

## 29 - ./examples/first-uniq-char.js

```javascript
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

### Flowchart
![./examples/first-uniq-char.js-svg image][./examples/first-uniq-char.js-svg]

[./examples/first-uniq-char.js-svg]: https://raw.githubusercontent.com/jonniespratley/js-leetcode/master/flowcharts/first-uniq-char.svg "Logo Title Text 2"


---

## 30 - ./examples/fizz-buzz.js

```javascript
    /*
## Fizz Buzz
Write a program that outputs the string representation of numbers from 1 to n.

But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.

Example:
```
n = 15,

Return:
[
  "1",
  "2",
  "Fizz", 3
  "4",
  "Buzz",
  "Fizz", 6
  "7",
  "8",
  "Fizz", 9
  "Buzz",
  "11",
  "Fizz", 12
  "13",
  "14",
  "FizzBuzz"
]
```
*/
/**
 * @param {number} n
 * @return {string[]}
 */
function fizzBuzz(n) {
    let arr = [];

    for (let i = 1; i <= n; i++) {
        if (i % 15 === 0) arr.push('FizzBuzz');
        else if (i % 3 === 0) arr.push('Fizz');
        else if (i % 5 === 0) arr.push('Buzz');
        else arr.push(String(i));
    }

    return arr;
}
```

### Flowchart
![./examples/fizz-buzz.js-svg image][./examples/fizz-buzz.js-svg]

[./examples/fizz-buzz.js-svg]: https://raw.githubusercontent.com/jonniespratley/js-leetcode/master/flowcharts/fizz-buzz.svg "Logo Title Text 2"


---

## 31 - ./examples/flatten-2d-vector.js

```javascript
    /*
## Flatten 2D Vector

Implement an iterator to flatten a 2d vector.

Example:

```
Input: 2d vector =
[
  [1,2],
  [3],
  [4,5,6]
]
Output: [1,2,3,4,5,6]
```

Explanation: By calling next repeatedly until hasNext returns false, 
             the order of elements returned by next should be: [1,2,3,4,5,6].

*/
/**
 * @constructor
 * @param {Integer[][]} vec2d
 */
var Vector2D = function (vec2d) {
    let list = [];

    function flatten(arr, list) {
        if (arr instanceof Array) {
            for (let i = 0; i < arr.length; i++) {
                flatten(arr[i], list)
            }
        } else {
            list.push(arr);
        }
    }

    flatten(vec2d, list);
    this.list = list;
};


/**
 * @this Vector2D
 * @returns {boolean}
 */
Vector2D.prototype.hasNext = function () {
    return this.list.length > 0;
};

/**
 * @this Vector2D
 * @returns {integer}
 */
Vector2D.prototype.next = function () {
    return this.list.shift();
};

/**
 * Your Vector2D will be called like this:
 * var i = new Vector2D(vec2d), a = [];
 * while (i.hasNext()) a.push(i.next());
 */
var vec2d = [
    [1, 2],
    [3],
    [4, 5, 6]
];
var i = new Vector2D(vec2d),
    a = [];
while (i.hasNext()) a.push(i.next());

console.log(a);
```

### Flowchart
![./examples/flatten-2d-vector.js-svg image][./examples/flatten-2d-vector.js-svg]

[./examples/flatten-2d-vector.js-svg]: https://raw.githubusercontent.com/jonniespratley/js-leetcode/master/flowcharts/flatten-2d-vector.svg "Logo Title Text 2"


---

## 32 - ./examples/flatten-nested-list-iterator.js

```javascript
    /*
Given a nested list of integers, implement an iterator to flatten it.

Each element is either an integer, or a list -- whose elements may also be integers or other lists.

Example 1:

```
Input: [[1,1],2,[1,1]]
Output: [1,1,2,1,1]
Explanation: By calling next repeatedly until hasNext returns false, 
             the order of elements returned by next should be: [1,1,2,1,1].

```

Example 2:

```
Input: [1,[4,[6]]]
Output: [1,4,6]
Explanation: By calling next repeatedly until hasNext returns false, 
             the order of elements returned by next should be: [1,4,6].
```
*/
/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */

/**
 * @constructor
 * @param {NestedInteger[]} nestedList
 */
var NestedIterator = function (nestedList) {
    this.stack = [];

    for (var i = nestedList.length; i--;) {
        this.stack.push(nestedList[i]);
    }
};


/**
 * @this NestedIterator
 * @returns {boolean}
 */
NestedIterator.prototype.hasNext = function () {
    // keep looping until we found insert an integer in the stack
    while (this.stack.length > 0) {
        var next = this.stack[this.stack.length - 1];
        if (next.isInteger()) {
            return true;
        }

        this.stack.pop();
        var list = next.getList();
        for (var i = list.length; i--;) {
            this.stack.push(list[i]);
        }
    }

    return false;
};

/**
 * @this NestedIterator
 * @returns {integer}
 */
NestedIterator.prototype.next = function () {
    return this.stack.pop();
};


var NestedIterator2 = function (nestedList) {
    var list = [];
    this.curr = 0;
    var flattenList = function (nestedList) {
        for (var i = 0; i < nestedList.length; i++) {
            if (nestedList[i].isInteger()) {
                list.push(nestedList[i].getInteger());
            } else {
                flattenList(nestedList[i].getList());
            }
        }
    }
    flattenList(nestedList);
    this.list = list;
};


/**
 * @this NestedIterator
 * @returns {boolean}
 */
NestedIterator.prototype.hasNext = function () {
    if (this.list[this.curr] !== undefined) return true;
    return false;
};

/**
 * @this NestedIterator
 * @returns {integer}
 */
NestedIterator.prototype.next = function () {
    if (this.curr < this.list.length) return this.list[this.curr++];
    return null;
};





/**
 * Your NestedIterator will be called like this:
 
*/
let nestedList = [
    [1, 1], 2, [1, 1]
];
var i = new NestedIterator(nestedList),
    a = [];
while (i.hasNext()) a.push(i.next());

console.log(a);
```

### Flowchart
![./examples/flatten-nested-list-iterator.js-svg image][./examples/flatten-nested-list-iterator.js-svg]

[./examples/flatten-nested-list-iterator.js-svg]: https://raw.githubusercontent.com/jonniespratley/js-leetcode/master/flowcharts/flatten-nested-list-iterator.svg "Logo Title Text 2"


---

## 33 - ./examples/generate-paranthesis.js

```javascript
    // Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
//
// For example, given n = 3, a solution set is:
//
//   [
//     "((()))",
//     "(()())",
//     "(())()",
//     "()(())",
//     "()()()"
//   ]
/**
 * @param {number} n
 * @return {string[]}
 */
function generateParenthesis(n) {
    let res = [];
    compose(n, n, '', res);
    return res;
}
// backtracking
function compose(left, right, s, res) { // left: left remaining, right: right remaining
    if (left > right) return; // e.g. ))(
    if (!left && !right) {
        res.push(s);
        return;
    }
    if (left) compose(left - 1, right, s + '(', res);
    if (right) compose(left, right - 1, s + ')', res);
}
```

### Flowchart
![./examples/generate-paranthesis.js-svg image][./examples/generate-paranthesis.js-svg]

[./examples/generate-paranthesis.js-svg]: https://raw.githubusercontent.com/jonniespratley/js-leetcode/master/flowcharts/generate-paranthesis.svg "Logo Title Text 2"


---

## 34 - ./examples/group-anagrams.js

```javascript
    /**
 * @param {string[]} strs
 * @return {string[][]}
 */


var groupAnagrams = function (strs) {

    // 1 sort each word's letters to enable matching
    // alph will be, e.g.: ['aet', 'aet', 'ant' ...]
    var alph = strs.map(word => word.split('').sort().join(''));

    // 2 create groups of indices of identical sorted words
    // locations will be, e.g.: { 'aet': [0, 1, 3], 'ant': [...] }
    var locations = {};
    for (var i = 0; i < alph.length; i++) {
        if (!locations[alph[i]]) {
            locations[alph[i]] = [i];
        } else {
            locations[alph[i]].push(i);
        }
    }
   

    // 3 transform groups of indices into groups of original words
    // e.g. for 'aet', map [0, 1, 3] to words at those indices in strs
    var output = [];
    for (var word in locations) {
        output.push(locations[word].map(idx => strs[idx]));
    }
    return output;
};
console.time('groupAnagrams')
console.log(
    groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])
)
console.timeEnd('groupAnagrams')


/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams2 = function (strs) {
    let out = [];
    let locations = {};
    let alpha = strs.sort().map(s => s.split('').sort().join(''));
    for (let i = 0; i < alpha.length; i++) {
        let s1 = alpha[i];
        if (!locations[s1]) {
            locations[s1] = [i];
        } else {
            locations[s1].push(i);
        }
       // console.log(s1);
    }

    for (let w in locations) {
        out.push(locations[w].map(idx => strs[idx]));
    }

    //If match is not the same, check again.
    return out;
};
console.time('groupAnagrams2')
console.log(
    groupAnagrams2(["eat", "tea", "tan", "ate", "nat", "bat"])
)
console.timeEnd('groupAnagrams2')

/**
 * Fastest implementation.
 * @param {Array} strs 
 */
var groupAnagrams3 = function (strs) {
    if (strs.length === 0) return [];
    if (strs.length === 1) return [strs];
    const groups = {};
    for (const word of strs) {
        let sum = 0;
        for (let i = 0; i < word.length; i++) sum += (word.charCodeAt(i) ** 4);
        groups[sum] ? groups[sum].push(word) : groups[sum] = [word];
    }
    return Object.values(groups);
};
console.time('groupAnagrams3')
console.log(
    groupAnagrams3(["eat", "tea", "tan", "ate", "nat", "bat"])
)
console.timeEnd('groupAnagrams3')
```

### Flowchart
![./examples/group-anagrams.js-svg image][./examples/group-anagrams.js-svg]

[./examples/group-anagrams.js-svg]: https://raw.githubusercontent.com/jonniespratley/js-leetcode/master/flowcharts/group-anagrams.svg "Logo Title Text 2"


---

## 35 - ./examples/hammering-distance.js

```javascript
    // The Hamming distance between two integers is the number of positions at which the corresponding bits are different.
//
// Given two integers x and y, calculate the Hamming distance.
//
// Note:
// 0 ≤ x, y < 231.
//
// Example:
//
// Input: x = 1, y = 4
//
// Output: 2
//
// Explanation:
// 1   (0 0 0 1)
// 4   (0 1 0 0)
//        ↑   ↑
//
// The above arrows point to positions where the corresponding bits are different.

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
function hammingDistance(x, y) {
    return (x ^ y).toString(2).split('0').join('').length;
}
```

### Flowchart
![./examples/hammering-distance.js-svg image][./examples/hammering-distance.js-svg]

[./examples/hammering-distance.js-svg]: https://raw.githubusercontent.com/jonniespratley/js-leetcode/master/flowcharts/hammering-distance.svg "Logo Title Text 2"


---

## 36 - ./examples/has-path-sum.js

```javascript
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

### Flowchart
![./examples/has-path-sum.js-svg image][./examples/has-path-sum.js-svg]

[./examples/has-path-sum.js-svg]: https://raw.githubusercontent.com/jonniespratley/js-leetcode/master/flowcharts/has-path-sum.svg "Logo Title Text 2"


---

## 37 - ./examples/hour-glass.js

```javascript
    let input = [
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 2, 4, 4, 0],
    [0, 0, 0, 2, 0, 0],
    [0, 0, 1, 2, 4, 0]
];

let input2 = [
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0]
];

function hourglassSum(arr) {
    let sum = 0;
    let maxSum = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < 4; i++) {
        const row = arr[i];
        for (let j = 0; j < 4; j++) {
            const col = row[j];
            sum = (
                arr[i][j] +
                arr[i][j + 1] +
                arr[i][j + 2] +
                arr[i + 1][j + 1] +
                arr[i + 2][j] +
                arr[i + 2][j + 1] +
                arr[i + 2][j + 2]
            );
            if (sum > maxSum) {
                maxSum = sum;
            }
        }

    }
    return maxSum
}

console.log(hourglassSum(input));
console.log(hourglassSum(input2));
```

### Flowchart
![./examples/hour-glass.js-svg image][./examples/hour-glass.js-svg]

[./examples/hour-glass.js-svg]: https://raw.githubusercontent.com/jonniespratley/js-leetcode/master/flowcharts/hour-glass.svg "Logo Title Text 2"


---

## 38 - ./examples/house-robber.js

```javascript
    // You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.
//
// Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.
//
// Example 1:
//
// Input: [1,2,3,1]
// Output: 4
// Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
//   Total amount you can rob = 1 + 3 = 4.
//
// Example 2:
//
// Input: [2,7,9,3,1]
// Output: 12
// Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
//   Total amount you can rob = 2 + 9 + 1 = 12.

/**
 * @param {number[]} nums
 * @return {number}
 */

/** 1) Recursion */
// time O(n)
// space O(n)
function rob1(nums) {
    return count(nums.length - 1, [], nums)
}

function count(n, cache, nums) {
    if (n < 0) return 0;
    if (cache[n] !== undefined) return cache[n];

    cache[n] = Math.max(
        count(n - 2, cache, nums) + nums[n],
        count(n - 1, cache, nums)
    );

    return cache[n];
}

/** 2) Iteration */
// time O(n)
// space O(n)
function rob2(nums) {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];

    const totals = [nums[0], Math.max(nums[0], nums[1])];

    for (let i = 2; i < nums.length; i++) {
        totals.push(Math.max(totals[i - 2] + nums[i], totals[i - 1]));
    }

    return totals[totals.length - 1];
}

/** 3) Iteration */
// time O(n)
// space O(1)
function rob3(nums) {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];

    let a = nums[0];
    let b = Math.max(nums[0], nums[1]);

    for (let i = 2; i < nums.length; i++) {
        const max = Math.max(a + nums[i], b);
        a = b;
        b = max;
    }

    return b;
}



/** 4) Iteration */
// time O(n)
// space O(1)
function rob(nums) {
    let a = 0;
    let b = 0;

    for (let i = 0; i < nums.length; i++) {
        if (i % 2 === 0) a = Math.max(a + nums[i], b);
        else b = Math.max(a, b + nums[i]);
    }

    return Math.max(a, b);
}

function rob4(nums){
    let memo = [];
    function _recursiveCall (i) {
        if (i >= nums.length) return 0;
        
        if (memo[i] === undefined) {
            memo[i] = Math.max(nums[i] + _recursiveCall(i + 2), _recursiveCall(i + 1));
            return memo[i];
        } else {
            return memo[i];
        }
    }
                        
    return _recursiveCall(0);
}
```

### Flowchart
![./examples/house-robber.js-svg image][./examples/house-robber.js-svg]

[./examples/house-robber.js-svg]: https://raw.githubusercontent.com/jonniespratley/js-leetcode/master/flowcharts/house-robber.svg "Logo Title Text 2"


---

## 39 - ./examples/increasing-triplet-subsequence.js

```javascript
    /*
## Increasing Triplet Subsequence

Given an unsorted array return whether an increasing subsequence of length 3 exists or not in the array.

Formally the function should:

> Return true if there exists i, j, k such that arr[i] < arr[j] < arr[k] given 0 ≤ i < j < k ≤ n-1 else return false.
> Note: Your algorithm should run in O(n) time complexity and O(1) space complexity.

Example 1:

```
Input: [1,2,3,4,5]
Output: true
```

Example 2:

```
Input: [5,4,3,2,1]
Output: false
```
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
    let small = Number.MAX_SAFE_INTEGER; // Set max value
    let big = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < nums.length; i++) {
        if (big >= nums[i]) {
            big = nums[i]; //update big to be smaller val
        } else if (small >= nums[i]) {
            small = nums[i]; //update small to be smaller val
        } else {
            return true;
        }
    }
    return false;
};

console.log(increasingTriplet([1, 2, 3, 4, 5]));
console.log(increasingTriplet([5, 4, 3, 2, 1]));
console.log(increasingTriplet([2, 1, 5, 0, 4, 6]));
```

### Flowchart
![./examples/increasing-triplet-subsequence.js-svg image][./examples/increasing-triplet-subsequence.js-svg]

[./examples/increasing-triplet-subsequence.js-svg]: https://raw.githubusercontent.com/jonniespratley/js-leetcode/master/flowcharts/increasing-triplet-subsequence.svg "Logo Title Text 2"


---

## 40 - ./examples/increasing-triplet.js

```javascript
    /*

## Increasing Triplet Subsequence
Given an unsorted array return whether an increasing subsequence of length 3 exists or not in the array.

Formally the function should:

```
Return true if there exists i, j, k 
such that arr[i] < arr[j] < arr[k] given 0 ≤ i < j < k ≤ n-1 else return false.
Note: Your algorithm should run in O(n) time complexity and O(1) space complexity.
```

Example 1:

```
Input: [1,2,3,4,5]
Output: true
```

Example 2:

```
Input: [5,4,3,2,1]
Output: false
```

*/
var increasingTriplet = function (nums) {
    var i = 0;
    let j = 0;
    let k = 0;
    for (; i < nums.length; i++) {
        j = i + 1;
        k = j + 1;
        if (nums[i] < nums[j] < nums[k]) {
            return true;
        } else {

        }
    }
    return false;

};

console.log(increasingTriplet([1, 2, 3, 4, 5]));
console.log(increasingTriplet([5, 4, 3, 2, 1]));
```

### Flowchart
![./examples/increasing-triplet.js-svg image][./examples/increasing-triplet.js-svg]

[./examples/increasing-triplet.js-svg]: https://raw.githubusercontent.com/jonniespratley/js-leetcode/master/flowcharts/increasing-triplet.svg "Logo Title Text 2"


---

## 41 - ./examples/insert-into-a-binary-search-tree.js

```javascript
    /*
## Insert into a Binary Search Tree

Given the root node of a binary search tree (BST) and a value to be inserted into the tree, insert the value into the BST. Return the root node of the BST after the insertion. It is guaranteed that the new value does not exist in the original BST.

Note that there may exist multiple valid ways for the insertion, as long as the tree remains a BST after insertion. You can return any of them.

For example, 

Given the tree:
        4
       / \
      2   7
     / \
    1   3
And the value to insert: 5
You can return this binary search tree:

         4
       /   \
      2     7
     / \   /
    1   3 5
This tree is also valid:

         5
       /   \
      2     7
     / \   
    1   3
         \
          4
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function (root, val) {
    if (root == null) {
        return new TreeNode(val);
    }
    if (root.val < val) {
        root.right = insertIntoBST(root.right, val);
    } else {
        root.left = insertIntoBST(root.left, val);
    }
    return root;
};
```

### Flowchart
![./examples/insert-into-a-binary-search-tree.js-svg image][./examples/insert-into-a-binary-search-tree.js-svg]

[./examples/insert-into-a-binary-search-tree.js-svg]: https://raw.githubusercontent.com/jonniespratley/js-leetcode/master/flowcharts/insert-into-a-binary-search-tree.svg "Logo Title Text 2"


---

## 42 - ./examples/intersection-two-linked-lists.js

```javascript
    // Write a program to find the node at which the intersection of two singly linked lists begins.
//
//
// For example, the following two linked lists:
//
// A:          a1 → a2
//                    ↘
//                      c1 → c2 → c3
//                    ↗
// B:     b1 → b2 → b3
//
// begin to intersect at node c1.
//
// Notes:
//
// If the two linked lists have no intersection at all, return null.
// The linked lists must retain their original structure after the function returns.
// You may assume there are no cycles anywhere in the entire linked structure.
// Your code should preferably run in O(n) time and use only O(1) memory.
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
/** 1) Hash table */
// Time complexity O(m + n)
// Space complexity O(m) or O(n)
function getIntersectionNode1(headA, headB) {
    let map = {};

    while (headA) {
        map[headA.val] = true;
        headA = headA.next;
    }

    while (headB) {
        if (map[headB.val]) return headB;
        headB = headB.next;
    }
    return null;
}
/** 2) Two pointers */
// Time complexity O(m + n)
// Space complexity O(1)
function getIntersectionNode(headA, headB) {
    let a = headA;
    let b = headB;
    // a === b happens at the connecting point or when they are both null at the end
    while (a !== b) {
        a = a ? a.next : headB; // move a to head of b if at end
        b = b ? b.next : headA; // move b to head of a if at end
    }
    return a;
}
```

### Flowchart
![./examples/intersection-two-linked-lists.js-svg image][./examples/intersection-two-linked-lists.js-svg]

[./examples/intersection-two-linked-lists.js-svg]: https://raw.githubusercontent.com/jonniespratley/js-leetcode/master/flowcharts/intersection-two-linked-lists.svg "Logo Title Text 2"


---

## 43 - ./examples/invert-tree.js

```javascript
    /*
## 226. Invert Binary Tree

Invert a binary tree.

Example:

```
Input:

     4
   /   \
  2     7
 / \   / \
1   3 6   9

Output:

     4
   /   \
  7     2
 / \   / \
9   6 3   1
```

*/
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
 * @return {TreeNode}
 */
var invertTree = function (root) {
    if(root === null){ return root; }
    var tmp = root.left;
    root.left = root.right;
    root.right = tmp;
    invertTree(root.left);
    invertTree(root.right);
    return root;
};


let root = new TreeNode(4);
root.left = new TreeNode(2);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(3);
root.right = new TreeNode(7);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(9);


console.log(invertTree(root));
```

### Flowchart
![./examples/invert-tree.js-svg image][./examples/invert-tree.js-svg]

[./examples/invert-tree.js-svg]: https://raw.githubusercontent.com/jonniespratley/js-leetcode/master/flowcharts/invert-tree.svg "Logo Title Text 2"


---

## 44 - ./examples/is-palindrome.js

```javascript
    // Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.
//
// Note: For the purpose of this problem, we define empty string as valid palindrome.
//
// Example 1:
//
// Input: "A man, a plan, a canal: Panama"
// Output: true
//
// Example 2:
//
// Input: "race a car"
// Output: false
/**
 * @param {string} s
 * @return {boolean}
 */
function isPalindrome(s) {
  const s2 = s.replace(/\W/g, '').toLowerCase();
  for (let i = 0; i < s2.length / 2; i++) {
    if (s2[i] !== s2[s2.length - i - 1]) return false
  }
  return true;
}

function isPalindrome(word) {
  var s = [];
  for (var i = 0; i < word.length; ++i) {
    s.push(word[i]);
  }
  var rword = "";
  while (s.length() > 0) {
    rword += s.pop();
  }
  if (word == rword) {
    return true;
  } else {
    return false;
  }
}
```

### Flowchart
![./examples/is-palindrome.js-svg image][./examples/is-palindrome.js-svg]

[./examples/is-palindrome.js-svg]: https://raw.githubusercontent.com/jonniespratley/js-leetcode/master/flowcharts/is-palindrome.svg "Logo Title Text 2"


---

## 45 - ./examples/is-valid-bst.js

```javascript
    /*
## Validate Binary Search Tree

Given a binary tree, determine if it is a valid binary search tree (BST).

Assume a BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.


Example 1:

```
Input:
    2
   / \
  1   3
Output: true
```

Example 2:

```
    5
   / \
  1   4
     / \
    3   6
Output: false

```

Explanation: The input is: [5,1,4,null,null,3,6]. The root node's value
             is 5 but its right child's value is 4.

*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    if(root === null) return true;
    
    const stack = [{ node: root, minimum: -Infinity, maximum: Infinity }];
    
    while(stack.length) {
      const { node, minimum, maximum } = stack.pop();
      if(node.val <= minimum || node.val >= maximum){
        return false;
      }
      
      if(node.left !== null) {
        stack.push({ node: node.left, minimum, maximum: node.val });
      }   
      
      if(node.right !== null) {
        stack.push({ node: node.right, minimum: node.val , maximum });
      }
     
    }
    
    return true;
  };
```

### Flowchart
![./examples/is-valid-bst.js-svg image][./examples/is-valid-bst.js-svg]

[./examples/is-valid-bst.js-svg]: https://raw.githubusercontent.com/jonniespratley/js-leetcode/master/flowcharts/is-valid-bst.svg "Logo Title Text 2"


---

## 46 - ./examples/is-valid-params.js

```javascript
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

### Flowchart
![./examples/is-valid-params.js-svg image][./examples/is-valid-params.js-svg]

[./examples/is-valid-params.js-svg]: https://raw.githubusercontent.com/jonniespratley/js-leetcode/master/flowcharts/is-valid-params.svg "Logo Title Text 2"


---

## 47 - ./examples/knapsack.js

```javascript
    function max(a, b) {
    return (a > b) ? a : b;
 }
 
 function knapsack(capacity, size, value, n) {
    if (n == 0 || capacity == 0) {
       return 0;
    }
    if (size[n-1] > capacity) {
       return knapsack(capacity, size, value, n-1);
    }
    else {
       return max(value[n-1] +
                  knapsack(capacity-size[n-1], size, value, n-1),
                  knapsack(capacity, size, value, n-1));
    }
 }
 
 var value = [4,5,10,11,13];
 var size = [3,4,7,8,9];
 var capacity = 16;
 var n = 5;
```

### Flowchart
![./examples/knapsack.js-svg image][./examples/knapsack.js-svg]

[./examples/knapsack.js-svg]: https://raw.githubusercontent.com/jonniespratley/js-leetcode/master/flowcharts/knapsack.svg "Logo Title Text 2"


---

## 48 - ./examples/kth-largest-element.js

```javascript
    /*
## Kth Largest Element in an Array

Find the kth largest element in an unsorted array. Note that it is the kth largest element in the sorted order, not the kth distinct element.

Example 1:

```
Input: [3,2,1,5,6,4] and k = 2
Output: 5
```

Example 2:

```
Input: [3,2,3,1,2,4,5,5,6] and k = 4
Output: 4
```

Note: 
- You may assume k is always valid, 1 ≤ k ≤ array's length.

*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    var sorted = nums.sort(function (a, b) {
        return a - b;
    });
    var array = [];

    for (var i = sorted.length - 1; i >= sorted.length - k; i--) {
        array.push(sorted[i]);
    }

    return array.pop();
};

function findKthLargest(nums, k) {
    return nums.sort((a, b) => a - b)[nums.length - k];
}
```

### Flowchart
![./examples/kth-largest-element.js-svg image][./examples/kth-largest-element.js-svg]

[./examples/kth-largest-element.js-svg]: https://raw.githubusercontent.com/jonniespratley/js-leetcode/master/flowcharts/kth-largest-element.svg "Logo Title Text 2"


---

## 49 - ./examples/length-of-longest-substring-without-repeating.js

```javascript
    // Given a string, find the length of the longest substring without repeating characters.
//
// Examples:
//
// Given "abcabcbb", the answer is "abc", which the length is 3.
//
// Given "bbbbb", the answer is "b", with the length of 1.
//
// Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
  let max = 0;
  let chars = [];
  for (let c of s) {
    chars = chars.slice(chars.indexOf(c) + 1); // remove everything before when find duplicate one, e.g. awke + w -> ke + w
    max = Math.max(chars.push(c), max); // push returns the array length
    console.log(chars)
  }
  return max;
}

console.log(lengthOfLongestSubstring('abcabcbb'));
console.log(lengthOfLongestSubstring('bbbbb'));
console.log(lengthOfLongestSubstring('pwwkew'));

var lengthOfLongestSubstring2 = function (s) {
  var map = {};
  var max = 0;
  var i = 0,
    j = 0;
  for (i; i < s.length; i++) {
    var index = s.indexOf(s[i], j);
    if (index !== -1 && index < i) {
      var l = i - j;
      max = Math.max(max, l);
      j = index + 1;
    }
  }
  return Math.max(max, i - j);
};
console.log(lengthOfLongestSubstring2('abcabcbb'));
console.log(lengthOfLongestSubstring2('bbbbb'));
console.log(lengthOfLongestSubstring2('pwwkew'));
```

### Flowchart
![./examples/length-of-longest-substring-without-repeating.js-svg image][./examples/length-of-longest-substring-without-repeating.js-svg]

[./examples/length-of-longest-substring-without-repeating.js-svg]: https://raw.githubusercontent.com/jonniespratley/js-leetcode/master/flowcharts/length-of-longest-substring-without-repeating.svg "Logo Title Text 2"


---

## 50 - ./examples/length-of-longest-substring.js

```javascript
    /**
 * 
 * Using a map to keep track of the count of each appeared characters.
Once the count of character at right is greater than 1, 
we will try to move left pointer to approach to right until the count of that character is less or equal to 1.
We update the max length of non-repeating substring during looping.
 * 
 * 
 */
const lengthOfLongestSubstring = function (str) {
    if (str.length === 0 || str === null) return 0
    const map = {};
    let len = str.length
    let left = 0;
    let right = 0;
    let max = 0;
    for (; right < len; right++) {
        let ch = str.charAt(right)
        map[ch] ? map[ch]++ : map[ch] = 1
        while (map[ch] > 1 && left < right) {
            map[str.charAt(left)]--
                left++
        }
        console.log(map)
        max = Math.max(max, right - left + 1)
    }
    return max
}

console.log(lengthOfLongestSubstring("pwwkew"));
```

### Flowchart
![./examples/length-of-longest-substring.js-svg image][./examples/length-of-longest-substring.js-svg]

[./examples/length-of-longest-substring.js-svg]: https://raw.githubusercontent.com/jonniespratley/js-leetcode/master/flowcharts/length-of-longest-substring.svg "Logo Title Text 2"


---

## 51 - ./examples/letter-combinations.js

```javascript
    // Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.
//
// A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.
//
// Example:
//
// Input: "23"
// Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
//
// Note:
//
// Although the above answer is in lexicographical order, your answer could be in any order you want.
/**
 * @param {string} digits
 * @return {string[]}
 */
function letterCombinations(digits) {
    const letters = {
        1: '',
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz'
    };
    let prefix = [];
    let res = [];

    function dfs(i) {
        if (i === digits.length) {
            return res.push(prefix.join(''));
        }
        for (let c of letters[digits[i]]) {
            
            prefix.push(c);
            dfs(i + 1);
            prefix.pop();
        }
    }
    if (digits.length) {
        dfs(0);
    }
    return res;
}

//["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
console.log(letterCombinations('23'));
console.log(letterCombinations('123'));
//console.log(letterCombinations('456'));
//console.log(letterCombinations('789'));
```

### Flowchart
![./examples/letter-combinations.js-svg image][./examples/letter-combinations.js-svg]

[./examples/letter-combinations.js-svg]: https://raw.githubusercontent.com/jonniespratley/js-leetcode/master/flowcharts/letter-combinations.svg "Logo Title Text 2"


---

## 52 - ./examples/level-order.js

```javascript
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

### Flowchart
![./examples/level-order.js-svg image][./examples/level-order.js-svg]

[./examples/level-order.js-svg]: https://raw.githubusercontent.com/jonniespratley/js-leetcode/master/flowcharts/level-order.svg "Logo Title Text 2"


---

## 53 - ./examples/linked-list-cycle.js

```javascript
    // Given a linked list, determine if it has a cycle in it.
//
// Follow up:
// Can you solve it without using extra space?
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
function hasCycle(head) {
    if (!head) return false;
     let slow = head;
    let fast = head.next;
     while (fast) {
      if (!fast.next) return false;
      if (slow === fast) return true;
       slow = slow.next;
      fast = fast.next.next;
    }
     return false;
  }
```

### Flowchart
![./examples/linked-list-cycle.js-svg image][./examples/linked-list-cycle.js-svg]

[./examples/linked-list-cycle.js-svg]: https://raw.githubusercontent.com/jonniespratley/js-leetcode/master/flowcharts/linked-list-cycle.svg "Logo Title Text 2"


---

## 54 - ./examples/linkedin-interview-question.js

```javascript
    const foo = function () {
    this.bar();
}

const MyClass = function () { 
    this.foo = foo;
}

const MyOtherClass = function () { 

}

MyOtherClass.prototype.bar = function () { 
    this.foo();
}

const myInstance = new MyOtherClass();

console.log(myInstance.__proto__);

/// Deep iterator
// Write an iterator that, given a (potentially nested) collection will iterate over the contents of the collections in order.
// ----
// Thus, given a collection containing [[1, 3, 5], [4, 7, 3], [[2, 3], 4]] the deep iterator should return [1, 3, 5, 4, 7, 3, 2, 3, 4]

function deepIterator(arr, callback) {
    if (arr instanceof Array) {
        for (let i = 0; i < arr.length; i++) {
            deepIterator(arr[i], callback);
        }
    } else {
        callback(arr);
    }
}

console.log(flattenArray([[1, 3, 5], [4, 7, 3], [[2, 3], 4]]), [1, 3, 5, 4, 7, 3, 2, 3, 4]) // true;

function flattenArray(arr) {
    // Logic
    let result = [];
    deepIterator(arr, (item) => {
        result.push(item);
    });
    return result;
}

// Scoping
var Foo = function (a) {
    this.a = a;
    function bar() {
        return a;
    }
    this.baz = function () {
        return a;
    };
    this.bar = bar;
};

Foo.prototype = {
    biz: function () {
        return this.a;
    }
};

var f = new Foo(7);
f.bar(); // undefined
f.baz(); // undefined
f.biz(); // undefined

const parent = function() {
    const a = 'Hi!';

    const foo = function() {
        console.log(a);
    }
    foo();
}

parent();

function baz() { 
    const a = 'hi!';
    function biz() { 
        console.log(this); // obj
        console.log(a);
    }
    biz();
}

const obj = {
    baz: baz,
}


baz(); // ?
```

### Flowchart
![./examples/linkedin-interview-question.js-svg image][./examples/linkedin-interview-question.js-svg]

[./examples/linkedin-interview-question.js-svg]: https://raw.githubusercontent.com/jonniespratley/js-leetcode/master/flowcharts/linkedin-interview-question.svg "Logo Title Text 2"


---

## 55 - ./examples/logger-rate-limiter.js

```javascript
    /*
## Logger Rate Limiter

Design a logger system that receive stream of messages along with its timestamps, 
each message should be printed if and only if it is not printed in the last 10 seconds.

Given a message and a timestamp (in seconds granularity), 
return true if the message should be printed in the given timestamp, otherwise returns false.

It is possible that several messages arrive roughly at the same time.

Example:

```
Logger logger = new Logger();

// logging string "foo" at timestamp 1
logger.shouldPrintMessage(1, "foo"); // returns true; 

// logging string "bar" at timestamp 2
logger.shouldPrintMessage(2,"bar"); // returns true;

// logging string "foo" at timestamp 3
logger.shouldPrintMessage(3,"foo"); // returns false;

// logging string "bar" at timestamp 8
logger.shouldPrintMessage(8,"bar"); // returns false;

// logging string "foo" at timestamp 10
logger.shouldPrintMessage(10,"foo"); // returns false;

// logging string "foo" at timestamp 11
logger.shouldPrintMessage(11,"foo"); // returns true;
```

*/
class Logger {
    /**
     * Initialize your data structure here.
     */
    constructor() {
        this.store = new Map();
    }
    /**
     * Returns true if the message should be printed in the given timestamp, otherwise returns false.
            If this method returns false, the message will not be printed.
            The timestamp is in seconds granularity. 
    * @param {number} timestamp 
    * @param {string} message
    * @return {boolean}
    */
    shouldPrintMessage(timestamp, message) {
        let time = this.store.get(message);
        if (!time) {
            this.store.set(message, timestamp + 10);
            return true;
        }
        if (time > timestamp) {
            return false;
        }
        this.store.set(message, timestamp + 10);
        return true;
    }
}

/** 
 * Your Logger object will be instantiated and called as such:
 * var obj = Object.create(Logger).createNew()
 * var param_1 = obj.shouldPrintMessage(timestamp,message)
 */

var logger = new Logger();

// logging string "foo" at timestamp 1
console.log(logger.shouldPrintMessage(1, "foo")); // returns true; 

// logging string "bar" at timestamp 2
console.log(logger.shouldPrintMessage(2, "bar")); // returns true;


// logging string "foo" at timestamp 3
console.log(logger.shouldPrintMessage(3, "foo")); // returns false;

// logging string "bar" at timestamp 8
console.log(logger.shouldPrintMessage(8, "bar")); // returns false;

// logging string "foo" at timestamp 10
console.log(logger.shouldPrintMessage(10, "foo")); // returns false;

// logging string "foo" at timestamp 11
console.log(logger.shouldPrintMessage(11, "foo")); // returns false;
console.log(logger.shouldPrintMessage(100, "bug")); // returns true;
console.log(logger.shouldPrintMessage(110, "bug")); // returns true;
console.log(logger.shouldPrintMessage(110, "bug")); // returns true;



console.log(logger);
```

### Flowchart
![./examples/logger-rate-limiter.js-svg image][./examples/logger-rate-limiter.js-svg]

[./examples/logger-rate-limiter.js-svg]: https://raw.githubusercontent.com/jonniespratley/js-leetcode/master/flowcharts/logger-rate-limiter.svg "Logo Title Text 2"


---

## 56 - ./examples/longest-common-prefix.js

```javascript
    // ## Longest Common Prefix
// Write a function to find the longest common prefix string amongst an array of strings.
//
// If there is no common prefix, return an empty string "".
//
// Example 1:
//
// Input: ["flower","flow","flight"]
// Output: "fl"
//
// Example 2:
//
// Input: ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
//
// Note:
//
// All given inputs are in lowercase letters a-z.

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
function longestCommonPrefix(strs) {
    if (!strs.length) return '';
     for (let i = 0; i < strs[0].length; i++) {
      for (let j = 1; j < strs.length; j++) {
        const str = strs[j];
         if (str[i] !== strs[0][i]) return str.slice(0, i);
      }
    }
     return strs[0];
  }
```

### Flowchart
![./examples/longest-common-prefix.js-svg image][./examples/longest-common-prefix.js-svg]

[./examples/longest-common-prefix.js-svg]: https://raw.githubusercontent.com/jonniespratley/js-leetcode/master/flowcharts/longest-common-prefix.svg "Logo Title Text 2"


---

## 57 - ./examples/longest-palindromic-substring.js

```javascript
    /*
## Longest Palindromic Substring
Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

Example 1:

```
Input: "babad"
Output: "bab"
```
Note: "aba" is also a valid answer.


Example 2:

```
Input: "cbbd"
Output: "bb"
```
 */
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    console.log(s);
};

var longestPalindrome = function (s) {
    let res = "";
    let cur = "";
    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < i + 2; j++) {
            let left = i;
            let right = j;
            while (s[left] && s[left] === s[right]) {
                cur = s.substring(left, right + 1);
                if (cur.length > res.length) res = cur;
                left--;
                right++;
            }
        }
    }
    return res;
};

function isPalindrome(word) {
    return word === word.split('').reverse().join('');
}



let isEven = (n) => n % 2 !== 1;
let isOdd = (n) => n % 2 === 1;



//[2,4,6,8,10].map( val => console.log(isEven(val)));
[1, 3, 5, 7, 9, 11, 13].map(val => console.log(isOdd(val)))






console.log(longestPalindrome('babad'));
```

### Flowchart
![./examples/longest-palindromic-substring.js-svg image][./examples/longest-palindromic-substring.js-svg]

[./examples/longest-palindromic-substring.js-svg]: https://raw.githubusercontent.com/jonniespratley/js-leetcode/master/flowcharts/longest-palindromic-substring.svg "Logo Title Text 2"


---

## 58 - ./examples/lru-cache.js

```javascript
    // Design and implement a data structure for Least Recently Used (LRU) cache. It should support the following operations: get and put.
//
// get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
// put(key, value) - Set or insert the value if the key is not already present. When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.
//
// Follow up:
//
// Could you do both operations in O(1) time complexity?
//
// Example:
//
// LRUCache cache = new LRUCache( 2 /* capacity */ );
//
// cache.put(1, 1);
// cache.put(2, 2);
// cache.get(1);       // returns 1
// cache.put(3, 3);    // evicts key 2
// cache.get(2);       // returns -1 (not found)
// cache.put(4, 4);    // evicts key 1
// cache.get(1);       // returns -1 (not found)
// cache.get(3);       // returns 3
// cache.get(4);       // returns 4

class LRUCache {
  /**
   * @param {number} capacity
   */
  constructor(capacity) {
    this.cache = new Map();
    this.capacity = capacity;
  }

  /**
   * @param {number} key
   * @return {number}
   */
  get(key) {
    if (!this.cache.has(key)) {
      return -1;
    }

    const value = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, value);
    return this.cache.get(key);
  };


  /**
   * @param {number} key
   * @param {number} value
   * @return {void}
   */
  put(key, value) {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    }
    this.cache.set(key, value);
    if (this.cache.size > this.capacity) {
      this.cache.delete(this.cache.keys().next().value); // keys().next().value is first item's key
    }
  };
}

var cache = new LRUCache(2 /* capacity */ );
//
console.log(cache.put(1, 1));
console.log(cache.put(2, 2));
console.log(cache.get(1)); // returns 1
console.log(cache.put(3, 3)); // evicts key 2
console.log(cache.get(2)); // returns -1 (not found)
console.log(cache.put(4, 4)); // evicts key 1
console.log(cache.get(1)); // returns -1 (not found)
console.log(cache.get(3)); // returns 3
console.log(cache.get(4)); // returns 4
```

### Flowchart
![./examples/lru-cache.js-svg image][./examples/lru-cache.js-svg]

[./examples/lru-cache.js-svg]: https://raw.githubusercontent.com/jonniespratley/js-leetcode/master/flowcharts/lru-cache.svg "Logo Title Text 2"


---

## 59 - ./examples/max-depth-of-binary-tree.js

```javascript
    /*
## Maximum Depth of Binary Tree
Given a binary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

> Note: A leaf is a node with no children.

Example:

Given binary tree [3,9,20,null,null,15,7],

```
    3
   / \
  9  20
    /  \
   15   7
```

return its depth = 3.
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
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

### Flowchart
![./examples/max-depth-of-binary-tree.js-svg image][./examples/max-depth-of-binary-tree.js-svg]

[./examples/max-depth-of-binary-tree.js-svg]: https://raw.githubusercontent.com/jonniespratley/js-leetcode/master/flowcharts/max-depth-of-binary-tree.svg "Logo Title Text 2"


---

## 60 - ./examples/max-sub-array-len.js

```javascript
    var maxSubArrayLen = function (nums, k) {
    let subarrayLength = 0;
    let sum = 0;
    let map = {
        0: -1
    };
    nums.forEach((number, i) => {
        sum += number;
        if (!map.hasOwnProperty(sum)) {
            map[sum] = i;
        }
        if (map.hasOwnProperty(sum - k)) {
            subarrayLength = Math.max(subarrayLength, i - map[sum - k]);
        }
    });
    return subarrayLength;
};

console.log(maxSubArrayLen([1, -1, 5, -2, 3], 3));
```

### Flowchart
![./examples/max-sub-array-len.js-svg image][./examples/max-sub-array-len.js-svg]

[./examples/max-sub-array-len.js-svg]: https://raw.githubusercontent.com/jonniespratley/js-leetcode/master/flowcharts/max-sub-array-len.svg "Logo Title Text 2"


---

## 61 - ./examples/max-sub-array.js

```javascript
    
/*
Basic idea is to keep track of the largest sum at current index and to 
achieve that we can compare the number on current index and the sum of the 
number on current index plus previous sum (previous sum set to -Infinity).
If the result is greater than the number on current index that means it has the 
potential to be included in the contiguous subarray so we add to previous sum.
 
But if the result is less than the number on current index that means we can simply 
ignore the result and set the previous sum to be the current number.

And as we compute previous sum, we can also compute max by find out what the maximum previous sum is. (we set max to nums[0] in case nums has only 1 element)
*/
var maxSubArray = function(nums) {
    let currentMax = nums[0];
    let previousSum = -Infinity;
    
    for (let num of nums) {
        //console.log(previousSum);
        previousSum = Math.max(num, num + previousSum);
        currentMax = Math.max(previousSum, currentMax);
    }
    
    return currentMax;
};
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
```

### Flowchart
![./examples/max-sub-array.js-svg image][./examples/max-sub-array.js-svg]

[./examples/max-sub-array.js-svg]: https://raw.githubusercontent.com/jonniespratley/js-leetcode/master/flowcharts/max-sub-array.svg "Logo Title Text 2"


---

## 62 - ./examples/maximum-sub-array.js

```javascript
    /*
# Maximum Subarray

Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

Example:

```
Input: [-2, 1, -3, 4, -1, 2, 1, -5, 4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
```

Follow up:
If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.
 
### Kadane’s Algorithm:

```
Initialize:
    max_so_far = 0
    max_ending_here = 0

Loop for each element of the array
  (a) max_ending_here = max_ending_here + a[i]
  (b) if(max_ending_here < 0)
            max_ending_here = 0
  (c) if(max_so_far < max_ending_here)
            max_so_far = max_ending_here
return max_so_far
```

*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let max_so_far = Number.MIN_SAFE_INTEGER;
    let max_ending_here = 0;
    let size = nums.length;
    if(size === 1){
        return nums[0]
    }
    for (let index = 0; index < size; index++) {
        const num = nums[index];
        max_ending_here = max_ending_here + num;
        if(max_ending_here < num){
            max_ending_here = num;
        }
        if(max_so_far < max_ending_here){
            max_so_far = max_ending_here;
        }
        console.log(max_so_far);
    }
    return max_so_far;
};

var maxSubArray2 = function(nums) {
    for (let i = 1; i < nums.length; i++){
        nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);
    }
    return Math.max(...nums);
};
let input = [-2, 1, -3, 4, -1, 2, 1, -5, 4];


console.log(maxSubArray(input));
console.log(maxSubArray([-1]));
console.log(maxSubArray([-2, -1]));
console.assert(maxSubArray([-1]) === -1);

console.log(maxSubArray2(input));
console.log(maxSubArray2([-2, -1]));

```

### Flowchart
![./examples/maximum-sub-array.js-svg image][./examples/maximum-sub-array.js-svg]

[./examples/maximum-sub-array.js-svg]: https://raw.githubusercontent.com/jonniespratley/js-leetcode/master/flowcharts/maximum-sub-array.svg "Logo Title Text 2"


---

## 63 - ./examples/merge-arrays.js

```javascript
    //imperative:
const mergeArrays_ = function (arrays) {
    let count = arrays.length;
    let newArray = [];
    let k = 0;
    for (let i = 0; i < count; i++) {
        for (let j = 0; j < arrays[i].length; j++) {
            newArray[k++] = arrays[i][j];
        }
    }
    return newArray;
};
console.log(mergeArrays_([
    [1, 2, 3],
    [4, 5],
    [6]
]));

// function-oriented
const mergeArrays = (...arrays) => [].concat(...arrays); 
console.log(mergeArrays([1, 2, 3], [4, 5], [6])); 
```

### Flowchart
![./examples/merge-arrays.js-svg image][./examples/merge-arrays.js-svg]

[./examples/merge-arrays.js-svg]: https://raw.githubusercontent.com/jonniespratley/js-leetcode/master/flowcharts/merge-arrays.svg "Logo Title Text 2"


---

## 64 - ./examples/merge-two-linked-lists.js

```javascript
    /*
## Merge Two Sorted Lists

Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

Example:

```
Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4
```
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    if (!l1 || !l2) {
        return l1 || l2;
    }
    if (l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
};

function mergeTwoLists(l1, l2) {
    // base case
    if (!l1 || !l2) return l1 || l2;


    if (l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
}
```

### Flowchart
![./examples/merge-two-linked-lists.js-svg image][./examples/merge-two-linked-lists.js-svg]

[./examples/merge-two-linked-lists.js-svg]: https://raw.githubusercontent.com/jonniespratley/js-leetcode/master/flowcharts/merge-two-linked-lists.svg "Logo Title Text 2"


---

## 65 - ./examples/min-sub-array-len.js

```javascript
    var minSubArrayLen = function(s, nums) {
    let ret = Infinity;
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
//minSubArrayLen(7, [2,3,1,2,4,3]);
```

### Flowchart
![./examples/min-sub-array-len.js-svg image][./examples/min-sub-array-len.js-svg]

[./examples/min-sub-array-len.js-svg]: https://raw.githubusercontent.com/jonniespratley/js-leetcode/master/flowcharts/min-sub-array-len.svg "Logo Title Text 2"


---

## 66 - ./examples/min-swaps.js

```javascript
    
function minSwaps2(arr) {
    let answer = 0;
    arr.sort((a, b) => {
        answer++;
        return a > b;
    })
    console.log(arr);
    return answer % arr.length + 1;
}
console.log(minSwaps2([4, 3, 1, 2]));



function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}


/**
 * Create a pivot point and sort that way
 * @param {*} arr 
 */
function minSwaps3(arr) {
    let map = new Map();
    let answer = 0;
    let i = 0;
    arr.map((val, index) => map.set(val, index));

    /*
    map[Symbol.iterator] = function* () {
        yield* [...this.entries()].sort((a, b) => a[1] - b[1]);
    }
    */

    for (let [key, value] of map) {
        console.log(key + ' ' + value);

        for (let index = 0; index < arr.length; index++) {
            if (key !== arr[index]) {
                swap(arr, value, index);
                console.log('swap', key, index);
            }
            console.log(index);
        }

    }


    console.log(arr, map);
    return answer;
}

console.log(minSwaps3([4, 3, 1, 2]));
//console.log(minSwaps3([7, 1, 3, 2, 4, 5, 6]));


function swap2(arr, i) {
    let temp = arr[arr[i] - 1];
    arr[arr[i] - 1] = arr[i];
    arr[i] = temp;
}

function minimumSwaps(arr) {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        //CHeck if next number is 1
        console.log(i, arr[i])
        if (arr[i] !== i + 1) {
            console.log('Swap',i, i + 1);
            swap2(arr, i);
            count++;
        }
    }
    return count;
}

console.log(minimumSwaps([4, 3, 1, 2]));
```

### Flowchart
![./examples/min-swaps.js-svg image][./examples/min-swaps.js-svg]

[./examples/min-swaps.js-svg]: https://raw.githubusercontent.com/jonniespratley/js-leetcode/master/flowcharts/min-swaps.svg "Logo Title Text 2"


---

## 67 - ./examples/missing-number.js

```javascript
    /*
## Missing Number
  
Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

Example 1:

```
Input: [3,0,1]
Output: 2
```

Example 2:

```
Input: [9,6,4,2,3,5,7,0,1]
Output: 8
```

Note:
- Your algorithm should run in linear runtime complexity. Could you implement it using only constant extra space complexity?
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    nums.sort((a, b) => a - b);
    let num = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === i) {
            num++;
        }
    }
    return num;
};
var missingNumber2 = function (nums) {
    var sum = 0;
    for (var i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
    }
    var expected = (nums.length + 1) * nums.length / 2;
    return expected - sum;
};
var missingNumber3 = function (nums) {
    let sum = nums.reduce((s, n) => s + n, 0);
    let n = nums.length;
    let w = (n * (n + 1)) / 2;
    return w - sum;
};
function missingNumber(nums) {
    const sum = nums.reduce((a, b) => a + b);
    return (1 + nums.length) * nums.length / 2 - sum;
  }
console.log(missingNumber([1, 0]));
console.log(missingNumber2([1, 0]));
console.log(missingNumber3([1, 0]));
console.log(missingNumber([0]));
console.log(missingNumber([3, 0, 1]));
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));
console.log(missingNumber([45, 35, 38, 13, 12, 23, 48, 15, 44, 21, 43, 26, 6, 37, 1, 19, 22, 3, 11, 32, 4, 16, 28, 49, 29, 36, 33, 8, 9, 39, 46, 17, 41, 7, 2, 5, 27, 20, 40, 34, 30, 25, 47, 0, 31, 42, 24, 10, 14]));
```

### Flowchart
![./examples/missing-number.js-svg image][./examples/missing-number.js-svg]

[./examples/missing-number.js-svg]: https://raw.githubusercontent.com/jonniespratley/js-leetcode/master/flowcharts/missing-number.svg "Logo Title Text 2"


---

## 68 - ./examples/move-zeros.js

```javascript
    /**
 * Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Example:

Input: [0,1,0,3,12]
Output: [1,3,12,0,0]
Note:

You must do this in-place without making a copy of the array.
Minimize the total number of operations.

 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let left = 0;
    let len = nums.length;
    let numNonZero = 0;
    while (left < len) {
        if (nums[left] != 0) {
            let tmp = nums[numNonZero]
            nums[numNonZero] = nums[left]
            nums[left] = tmp;
            numNonZero += 1;
            left += 1
        } else {
            left += 1
        }
    }
    return nums;
};

function moveZeroes(nums) {
    for (let i = nums.length - 1; i >= 0; i--) { // cannot from 0 to length - 1
        if (nums[i] === 0) nums.push(...nums.splice(i, 1));
    }
}


var moveZeroes2 = function (nums) {
    let firstPos = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            let temp = nums[firstPos];
            nums[firstPos] = nums[i];
            nums[i] = temp;
            firstPos++;
        }
    }
    return nums;
};

//console.time('moveZeroes2');
//console.log(moveZeroes2([0, 1, 0, 3, 12]));
//console.log(moveZeroes2([0, 0, 3, 1]));
//console.log(moveZeroes2([]));
//console.timeEnd('moveZeroes2');





/*
## 3Sum

Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? 
Find all unique triplets in the array which gives the sum of zero.

> Note: The solution set must not contain duplicate triplets.

Example:

Given array nums = `[-1, 0, 1, 2, -1, -4]`

A solution set is:
```
[
    [-1, 0, 1],
    [-1, -1, 2]
]
```
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    nums.sort((a, b) => a - b);

    let results = [];
    let totalSum = 0;
    let i = 0
    while (i < nums.length - 2) {
        let j = i + 1;
        let k = nums.length - 1;
        while (j < k) {
            const sum = nums[i] + nums[j] + nums[k]
            if (sum < totalSum) {

                while (nums[++j] === nums[j - 1]);
            } else if (sum > totalSum) {
                while (nums[--k] === nums[k + 1]);
            } else {
                results.push([nums[i], nums[j], nums[k]])
                while (nums[++j] === nums[j - 1]);
                while (nums[--k] === nums[k + 1]);
            }
        }
        while (nums[++i] === nums[i - 1]);
    }
    return results;
};
//console.log(threeSum([-1, 0, 1, 2, -1, -4]));

/**
 * Validate if a given string is numeric.

Some examples:
"0" => true
" 0.1 " => true
"abc" => false
"1 a" => false
"2e10" => true
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function (s) {

    return s.trim().length === 0 ? false : !isNaN(+s);
};

console.log(isNumber('1'));
console.log(isNumber('0'));
console.log(isNumber(' b '));
console.assert(isNumber(' 0.1 '));
console.assert(!isNumber(' b '));
console.assert(!isNumber('abc'));
console.assert(!isNumber('1 a'));
console.assert(isNumber('2e10'));





/**
 * 
 * Maximum Size Subarray Sum Equals k
Given an array nums and a target value k, find the maximum length of a subarray that sums to k. If there isn't one, return 0 instead.

Note:
The sum of the entire nums array is guaranteed to fit within the 32-bit signed integer range.

Example 1:

Input: nums = [1, -1, 5, -2, 3], k = 3
Output: 4 
Explanation: The subarray [1, -1, 5, -2] sums to 3 and is the longest.
Example 2:

Input: nums = [-2, -1, 2, 1], k = 1
Output: 2 
Explanation: The subarray [-1, 2] sums to 1 and is the longest.
Follow Up:
Can you do it in O(n) time?

The intuition is to create a map where u keep track of previous sums and their indecies. 
You keep adding to the sum until you get to a point 

- where the sum - k equals to one of the items already in the array. 
- this would mean that the sum of all the numbers after that sum - k number is k.

This would mean we have added up to the desired result, and we figure out how long that array is based on the indecies.
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubArrayLen = function (nums, k) {
    let subarrayLength = 0;
    let sum = 0;
    let map = {
        0: -1
    };
    nums.forEach((number, i) => {
        sum += number;
        if (!map.hasOwnProperty(sum)) {
            map[sum] = i;
        }
        if (map.hasOwnProperty(sum - k)) {
            subarrayLength = Math.max(subarrayLength, i - map[sum - k]);
        }
    });
    return subarrayLength;
};

console.log(maxSubArrayLen([1, -1, 5, -2, 3], 3));




function removeInvalidParentheses(s) {
    let queue = new Set([s]);
    while (queue.size) {
        const next = new Set();
        for (let v of queue) {
            if (isValid(v)) {
                return [...queue].filter(isValid);
            }

            for (let i = 0; i < v.length; i++) {
                next.add(v.slice(0, i) + v.slice(i + 1));
            }
        }
        queue = next;
    }
    return [''];
}

function isValid(str) {
    let bal = 0;
    for (let ch of str) {
        if (ch === '(') {
            bal++;
        } else if (ch === ')') {
            bal--;
        }
        if (bal < 0) {
            return false;
        }
    }
    return bal === 0;
}

/**

Remove the minimum number of invalid parentheses in order to make the input string valid. Return all possible results.

Note: The input string may contain letters other than the parentheses ( and ).

Example 1:

Input: "()())()"
Output: ["()()()", "(())()"]
 */

console.log(removeInvalidParentheses("(a)())()"))
console.log(removeInvalidParentheses("()()(())"))
```

### Flowchart
![./examples/move-zeros.js-svg image][./examples/move-zeros.js-svg]

[./examples/move-zeros.js-svg]: https://raw.githubusercontent.com/jonniespratley/js-leetcode/master/flowcharts/move-zeros.svg "Logo Title Text 2"


---

## 69 - ./examples/nested-list-weight-sum.js

```javascript
    function depthSumHelper(list, depth) {
    let sum = 0;
    for (let n in list) {
        console.log(n);
        if (n.isInteger()) {
            sum += n.getInteger() * depth;
        } else {
            sum += depthSumHelper(n.getList(), depth + 1);
        }
    }
    return sum;
}

function depthSum(nestedList) {
    return depthSumHelper(nestedList, 1);
}

function swap(array, index1, index2) {
    var aux = array[index1];
    array[index1] = array[index2];
    array[index2] = aux;
}

function bubbleSort(array) {
    let length = array.length;
    for (let i = 0; i < length; i++) {
        console.log(i, array)
        for (let j = 0; j < length - 1; j++) {
            if (array[j] > array[j + 1]) {
                swap(array, j, j + 1);
            }
        }
    }
    return array;
}

function bubbleSort2(array) {
    var length = array.length;
    var cost = 0;
    for (var i = 0; i < length; i++) { //{1} 
        cost++;
        for (var j = 0; j < length - 1; j++) { //{2} 
            cost++;
            if (array[j] > array[j + 1]) {
                swap(array, j, j + 1);
            }
        }
    }
    console.log(`cost for bubbleSort with input size ${length} is ${cost}`);
}

//console.log(bubbleSort([7, 2, 4, 5, 9, 8, 1, 3, 6]));







```

### Flowchart
![./examples/nested-list-weight-sum.js-svg image][./examples/nested-list-weight-sum.js-svg]

[./examples/nested-list-weight-sum.js-svg]: https://raw.githubusercontent.com/jonniespratley/js-leetcode/master/flowcharts/nested-list-weight-sum.svg "Logo Title Text 2"


---

## 70 - ./examples/number-1-bits.js

```javascript
    // Write a function that takes an unsigned integer and returns the number of '1' bits it has (also known as the Hamming weight).
//
// Example 1:
//
// Input: 11
// Output: 3
// Explanation: Integer 11 has binary representation 00000000000000000000000000001011
//
// Example 2:
//
// Input: 128
// Output: 1
// Explanation: Integer 128 has binary representation 00000000000000000000000010000000

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
function hammingWeight(n) {
    return n.toString(2).split('0').join('').length;
  }
```

### Flowchart
![./examples/number-1-bits.js-svg image][./examples/number-1-bits.js-svg]

[./examples/number-1-bits.js-svg]: https://raw.githubusercontent.com/jonniespratley/js-leetcode/master/flowcharts/number-1-bits.svg "Logo Title Text 2"


---

## 71 - ./examples/number-of-islands.js

```javascript
    // Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.
//
// Example 1:
//
// Input:
// 11110
// 11010
// 11000
// 00000
//
// Output: 1
//
// Example 2:
//
// Input:
// 11000
// 11000
// 00100
// 00011
//
// Output: 3
/**
 * @param {character[][]} grid
 * @return {number}
 */
function numIslands(grid) {
    let count = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            
            if (grid[i][j] === '1') {
                dfs(grid, i, j);
                count++;
            }
            
        }
    }
    return count;
}

function dfs(grid, row, col) {
    if (grid[row][col] === '1') {
        grid[row][col] = '*'; // mark land piece as visited
        if (row > 0) dfs(grid, row - 1, col); // up
        if (row < grid.length - 1) dfs(grid, row + 1, col); // down
        if (col > 0) dfs(grid, row, col - 1); // left
        if (col < grid[row].length - 1) dfs(grid, row, col + 1); // right
    }
}

 
console.log(numIslands([
    [1, 1, 0, 0, 0],
    [1, 1, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 1, 1]
]));
```

### Flowchart
![./examples/number-of-islands.js-svg image][./examples/number-of-islands.js-svg]

[./examples/number-of-islands.js-svg]: https://raw.githubusercontent.com/jonniespratley/js-leetcode/master/flowcharts/number-of-islands.svg "Logo Title Text 2"


---

## 72 - ./examples/one-edit-away.js

```javascript
    
```

### Flowchart
![./examples/one-edit-away.js-svg image][./examples/one-edit-away.js-svg]

[./examples/one-edit-away.js-svg]: https://raw.githubusercontent.com/jonniespratley/js-leetcode/master/flowcharts/one-edit-away.svg "Logo Title Text 2"


---

## 73 - ./examples/palindrome-linked-list.js

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

### Flowchart
![./examples/palindrome-linked-list.js-svg image][./examples/palindrome-linked-list.js-svg]

[./examples/palindrome-linked-list.js-svg]: https://raw.githubusercontent.com/jonniespratley/js-leetcode/master/flowcharts/palindrome-linked-list.svg "Logo Title Text 2"


---

## 74 - ./examples/palindrome-permutation.js

```javascript
    /*
## Palindrome Permutation
Given a string, determine if a permutation of the string could form a palindrome.


Example 1:

```
Input: "code"
Output: false
```

Example 2:

```
Input: "aab"
Output: true
```

Example 3:

```
Input: "carerac"
Output: true
```

*/

function isPalindrome(s) {
    const s2 = s.replace(/\W/g, '').toLowerCase();
    for (let i = 0; i < s2.length / 2; i++) {
        if (s2[i] !== s2[s2.length - i - 1]) return false
    }
    return true;
}


var canPermutePalindrome = function (s) {
    let map = new Map();
    s = s.replace(/\W/g, '');
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        let count = s.match(new RegExp(char, 'g') || []).length;
        map.set(char, count)
    }
    let count = 0;
    for (var [key, value] of map.entries()) {
        count += value % 2;
    }
    return count <= 1;
};


var canPermutePalindrome = function (s) {
    let obj = {};
    let falseCount = 0;
    for (let i = 0; i < s.length; i++) {
        if (obj[s[i]] === undefined) {
            obj[s[i]] = false;
        } else {
            obj[s[i]] = !obj[s[i]]
        }
    };
    for (let k in obj) {
        if (!obj[k]) {
            falseCount++;
        }
        if (falseCount > 1) {
            return false;
        }
    }
    return true;
};
console.log(canPermutePalindrome('//\\--')); //false
console.log(canPermutePalindrome('code')); //false
console.log(canPermutePalindrome('carerac')); //true
console.log(canPermutePalindrome('aab')); //true
```

### Flowchart
![./examples/palindrome-permutation.js-svg image][./examples/palindrome-permutation.js-svg]

[./examples/palindrome-permutation.js-svg]: https://raw.githubusercontent.com/jonniespratley/js-leetcode/master/flowcharts/palindrome-permutation.svg "Logo Title Text 2"


---

## 75 - ./examples/pascal-triangle-2.js

```javascript
    function pascalTriangle(lineNumber) {
    const currentLine = [1];
    const currentLineSize = lineNumber + 1;
    for (let numIndex = 1; numIndex < currentLineSize; numIndex += 1) {
      currentLine[numIndex] = currentLine[numIndex - 1] * (lineNumber - numIndex + 1) / numIndex;
    }
    return currentLine;
  }
  /**
   * @param {number} rowIndex
   * @return {number[]}
   */
  var getRow = function(rowIndex) {
      return pascalTriangle(rowIndex);
  };
  
```

### Flowchart
![./examples/pascal-triangle-2.js-svg image][./examples/pascal-triangle-2.js-svg]

[./examples/pascal-triangle-2.js-svg]: https://raw.githubusercontent.com/jonniespratley/js-leetcode/master/flowcharts/pascal-triangle-2.svg "Logo Title Text 2"


---

## 76 - ./examples/path-sum.js

```javascript
    /*
## Path Sum
Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum.

> Note: A leaf is a node with no children.

Example:

Given the below binary tree and sum = 22,

```
      5
     / \
    4   8
   /   / \
  11  13  4
 /  \      \
7    2      1
```
return `true`, as there exist a root-to-leaf path `5->4->11->2` which sum is `22`.

*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
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

### Flowchart
![./examples/path-sum.js-svg image][./examples/path-sum.js-svg]

[./examples/path-sum.js-svg]: https://raw.githubusercontent.com/jonniespratley/js-leetcode/master/flowcharts/path-sum.svg "Logo Title Text 2"


---

## 77 - ./examples/permutations.js

```javascript
    /*
# Permutations

Given a collection of distinct integers, return all possible permutations.

Example:

```
Input: [1,2,3]
Output:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]
```

*/
const permute = function (nums) {
    if (nums.length <= 1) {
        return [nums]
    }
    let res = []
    let last = nums.pop()
    let prevPerms = permute(nums)
    for (let prevPerm of prevPerms) {
        for (let i = 0; i <= prevPerm.length; i++) {
            let clone = prevPerm.slice(0)
            clone.splice(i, 0, last)
            res.push(clone)
        }
    }
    return res;
}

console.log(permute([1, 2, 3]))

function permute(nums) {
    let res = [];

    function find(curr, rest) {
        if (!rest.length) return res.push(curr);

        for (let i = 0; i < rest.length; i++) {
            find(
                [...curr, rest[i]], [...rest.slice(0, i), ...rest.slice(i + 1)]
            );
        }
    }

    find([], nums);

    return res;
}
```

### Flowchart
![./examples/permutations.js-svg image][./examples/permutations.js-svg]

[./examples/permutations.js-svg]: https://raw.githubusercontent.com/jonniespratley/js-leetcode/master/flowcharts/permutations.svg "Logo Title Text 2"


---

## 78 - ./examples/pivot-index.js

```javascript
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

### Flowchart
![./examples/pivot-index.js-svg image][./examples/pivot-index.js-svg]

[./examples/pivot-index.js-svg]: https://raw.githubusercontent.com/jonniespratley/js-leetcode/master/flowcharts/pivot-index.svg "Logo Title Text 2"


---

## 79 - ./examples/plus-one.js

```javascript
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

### Flowchart
![./examples/plus-one.js-svg image][./examples/plus-one.js-svg]

[./examples/plus-one.js-svg]: https://raw.githubusercontent.com/jonniespratley/js-leetcode/master/flowcharts/plus-one.svg "Logo Title Text 2"


---

## 80 - ./examples/power-of-three.js

```javascript
    /*
## Power Three
// Given an integer, write a function to determine if it is a power of three.
//
// Follow up:
// Could you do it without using any loop / recursion?

*/
// Given an integer, write a function to determine if it is a power of three.
//
// Follow up:
// Could you do it without using any loop / recursion?

```

### Flowchart
![./examples/power-of-three.js-svg image][./examples/power-of-three.js-svg]

[./examples/power-of-three.js-svg]: https://raw.githubusercontent.com/jonniespratley/js-leetcode/master/flowcharts/power-of-three.svg "Logo Title Text 2"


---

## 81 - ./examples/randomized-set.js

```javascript
    /*
## Insert Delete GetRandom O(1)
Design a data structure that supports all following operations in average O(1) time.

- insert(val): Inserts an item val to the set if not already present.
- remove(val): Removes an item val from the set if present.
- getRandom: Returns a random element from current set of elements. Each element must have the same probability of being returned.
*/

/**
 * Initialize your data structure here.
 */
var RandomizedSet = function() {
    this.count = 0;
    this.store = new Map();
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if(!this.store.has(val)){
        this.count++;
        this.store.set(val, val);
        return true;
    }
    return false;
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if(this.store.has(val)){
        this.count--;
        return this.store.delete(val);
    }
    return false;
    
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    return this.store.get(random(this.count));
    function random(l) {
        return Math.floor((Math.random() * l));
    }
};



/**
 * Initialize your data structure here.
 */
var RandomizedSet = function() {
    this.map = {};
    this.arr = [];
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if(this.map.hasOwnProperty(val)) return false;
    this.map[val] = this.arr.length;
    this.arr.push(val);
    return true;
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if(!this.map.hasOwnProperty(val)) return false;
    let index = this.map[val];
    if(index < this.arr.length - 1) {
        // not the last element, swap with the last element.
        let lastElement = this.arr[this.arr.length - 1];
        this.arr[index] = lastElement;
        this.map[lastElement] = index;
    }
    delete this.map[val];
    this.arr.pop();
    return true;
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    const max = this.arr.length;
    return this.arr[Math.floor(Math.random() * max)]
};


/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = Object.create(RandomizedSet).createNew()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
// Init an empty set.
var randomSet = new RandomizedSet();

// Inserts 1 to the set. Returns true as 1 was inserted successfully.
console.assert(randomSet.insert(1));
console.assert(!randomSet.insert(1));

// Returns false as 2 does not exist in the set.
console.assert(!randomSet.remove(2));

// Inserts 2 to the set, returns true. Set now contains [1,2].
console.assert(randomSet.insert(2));

// getRandom should return either 1 or 2 randomly.
console.log(randomSet.getRandom());
console.log(randomSet.getRandom());

console.log(randomSet);

// Removes 1 from the set, returns true. Set now contains [2].
console.assert(randomSet.remove(1));

// 2 was already in the set, so return false.
console.assert(!randomSet.insert(2));

// Since 2 is the only number in the set, getRandom always return 2.
console.log(randomSet.getRandom());


let rand2 = new RandomizedSet();
console.log(rand2.remove(0));
console.log(rand2.remove(0));
console.log(rand2.insert(0));
console.log(rand2.getRandom(0));
console.log(rand2.remove(0));
console.log(rand2.insert(0));
```

### Flowchart
![./examples/randomized-set.js-svg image][./examples/randomized-set.js-svg]

[./examples/randomized-set.js-svg]: https://raw.githubusercontent.com/jonniespratley/js-leetcode/master/flowcharts/randomized-set.svg "Logo Title Text 2"


---

## 82 - ./examples/read-n-characters-given-read4.js

```javascript
    /**
 * Definition for read4()
 * 
 * @param {character[]} buf Destination buffer
 * @return {number} The number of characters read
 * read4 = function(buf) {
 *     ...
 * };
 */

/**
 * @param {function} read4()
 * @return {function}
 */
var solution = function (read4) {
    var internalBuf = [];

    /**
     * @param {character[]} buf Destination buffer
     * @param {number} n Maximum number of characters to read
     * @return {number} The number of characters read
     */
    return function (buf, n) {
        let readChars = 0;
        while (n > 0) {
            if (internalBuf.length === 0) {
                if (read4(internalBuf) === 0) {
                    return readChars;
                }
            }

            buf.push(internalBuf.shift());
            readChars++;
            n--;
        }
        return readChars;
    };
};
```

### Flowchart
![./examples/read-n-characters-given-read4.js-svg image][./examples/read-n-characters-given-read4.js-svg]

[./examples/read-n-characters-given-read4.js-svg]: https://raw.githubusercontent.com/jonniespratley/js-leetcode/master/flowcharts/read-n-characters-given-read4.svg "Logo Title Text 2"


---

## 83 - ./examples/remove-duplicates.js

```javascript
    // Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.
//
// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
//
// Example 1:
//
//   Given nums = [1,1,2],
//
//   Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.
//
//   It doesn't matter what you leave beyond the returned length.
//
// Example 2:
//
//   Given nums = [0,0,1,1,1,2,2,3,3,4],
//
//   Your function should return length = 5, with the first five elements of nums being modified to 0, 1, 2, 3, and 4 respectively.
//
//   It doesn't matter what values are set beyond the returned length.
//
// Clarification:
//
//   Confused why the returned value is an integer but your answer is an array?
//
//   Note that the input array is passed in by reference, which means modification to the input array will be known to the caller as well.
//
//   Internally you can think of this:
//
//     // nums is passed in by reference. (i.e., without making a copy)
//     int len = removeDuplicates(nums);
//
//     // any modification to nums in your function would be known by the caller.
//     // using the length returned by your function, it prints the first len elements.
//     for (int i = 0; i < len; i++) {
//       print(nums[i]);
//     }
/**
 * @param {number[]} nums
 * @return {number}
 */
function removeDuplicates(nums) {
    let slow = 0;
    let fast = 0;
    while (fast < nums.length) {
        if (nums[slow] === nums[fast]) {
            fast++;
        } else {
            slow++;
            nums[slow] = nums[fast];
            fast++;
        }
    }
    return slow + 1;
}
```

### Flowchart
![./examples/remove-duplicates.js-svg image][./examples/remove-duplicates.js-svg]

[./examples/remove-duplicates.js-svg]: https://raw.githubusercontent.com/jonniespratley/js-leetcode/master/flowcharts/remove-duplicates.svg "Logo Title Text 2"


---

## 84 - ./examples/remove-element.js

```javascript
    var removeElement = function (nums, val) {
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] === val) {
            nums.splice(i, 1);
            i--;
        }
    }

    return nums.length;
};
```

### Flowchart
![./examples/remove-element.js-svg image][./examples/remove-element.js-svg]

[./examples/remove-element.js-svg]: https://raw.githubusercontent.com/jonniespratley/js-leetcode/master/flowcharts/remove-element.svg "Logo Title Text 2"


---

## 85 - ./examples/remove-invalid-parentheses.js

```javascript
    function openBrace(s) {
    return ['('].includes(s)
}

function closeBrace(s) {
    return [')'].includes(s)
}

function removeInvalidParentheses(s) {
    let queue = new Set([s]);
    while (queue.size) {
        const next = new Set();
        for (let v of queue) {
            if (isValid(v)) {
                return [...queue].filter(isValid);
            }

            for (let i = 0; i < v.length; i++) {
                next.add(v.slice(0, i) + v.slice(i + 1));
            }
        }
        queue = next;
    }
    return [''];
}

function isValid(str) {
    let bal = 0;
    for (let ch of str) {
        if (ch === '(') {
            bal++;
        } else if (ch === ')') {
            bal--;
        }
        if (bal < 0) {
            return false;
        }
    }
    return bal === 0;
}

/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses2 = function (s) {
    let dict = {
        '{': '}',
        '(': ')',
        '[': ']'
    };
    let stack = [];
    let input = s.split('');

    function closesMostRecentBrace(char) {
        console.log(s[s.length - 1])
        return (s[s.length - 1] === char);
    }

    for (let i = 0; i < input.length; i++) {
        const char = input[i];

        //​# If the character is an opening brace, we push it onto the stack:​
        if (openBrace(char)) {
            stack.push(char);
            console.log('open', s.length);
        }
        //​# If the character closes the most recent opening brace,​
        else if (closeBrace(char)) {
            //Pop from stack
            if (closesMostRecentBrace(char)) {
                stack.pop();
                console.log('closed');
            } else {
                //# if the character does NOT close the most recent opening brace​
                console.log('the character does NOT close the most recent opening brace​');

            }
        }
    }
    console.log(stack);
    console.log(input);
};

console.log(removeInvalidParentheses("(b)(c))"));
console.log(removeInvalidParentheses2("(b)(c))"));
//console.log(removeInvalidParentheses("()())()"));
```

### Flowchart
![./examples/remove-invalid-parentheses.js-svg image][./examples/remove-invalid-parentheses.js-svg]

[./examples/remove-invalid-parentheses.js-svg]: https://raw.githubusercontent.com/jonniespratley/js-leetcode/master/flowcharts/remove-invalid-parentheses.svg "Logo Title Text 2"


---

## 86 - ./examples/remove-nth-node-from-end-of-list.js

```javascript
    // Given a linked list, remove the n-th node from the end of list and return its head.
//
// Example:
// Given linked list: 1->2->3->4->5, and n = 2.
// After removing the second node from the end, the linked list becomes 1->2->3->5.
//
// Note:
// Given n will always be valid.
//
// Follow up:
// Could you do this in one pass?
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
function removeNthFromEnd(head, n) {
    let before = new ListNode(null); // for removing the only 1 node in list case
    before.next = head;
    let slow = before;
    let fast = head;
    while (n--) {
        fast = fast.next;
    }
    while (fast) {
        slow = slow.next;
        fast = fast.next;
    }
    slow.next = slow.next.next;
    return before.next;
}
```

### Flowchart
![./examples/remove-nth-node-from-end-of-list.js-svg image][./examples/remove-nth-node-from-end-of-list.js-svg]

[./examples/remove-nth-node-from-end-of-list.js-svg]: https://raw.githubusercontent.com/jonniespratley/js-leetcode/master/flowcharts/remove-nth-node-from-end-of-list.svg "Logo Title Text 2"


---

## 87 - ./examples/reverse-bits.js

```javascript
    // Reverse bits of a given 32 bits unsigned integer.
//
// Example:
//
// Input: 43261596
// Output: 964176192
// Explanation: 43261596 represented in binary as 00000010100101000001111010011100,
//      return 964176192 represented in binary as 00111001011110000010100101000000.
//
// Follow up:
// If this function is called many times, how would you optimize it?

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
function reverseBits(n) {
    return parseInt(n.toString(2).padStart(32, '0').split('').reverse().join(''), 2);
}
```

### Flowchart
![./examples/reverse-bits.js-svg image][./examples/reverse-bits.js-svg]

[./examples/reverse-bits.js-svg]: https://raw.githubusercontent.com/jonniespratley/js-leetcode/master/flowcharts/reverse-bits.svg "Logo Title Text 2"


---

## 88 - ./examples/reverse-words-2.js

```javascript
    /**
 
Given a string, you need to reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

Example 1:
Input: "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"

Note: In the string, each word is separated by single space and there will not be any extra space in the string.
 * @param {*} str 
 */
var reverseWords2 = function (str) {
    let output = [];
    let words = str.split(' ');
    for (let index = 0; index < words.length; index++) {
        let word = words[index];
        let temp = [];
        for (let index = word.length - 1; index > -1; index--) {
            let w = word[index];
            temp.push(w);
        }
        output.push(temp.join(''));
    }
    return output.join(' ');
};
console.log(reverseWords2("Let's take LeetCode contest") === "s'teL ekat edoCteeL tsetnoc");
```

### Flowchart
![./examples/reverse-words-2.js-svg image][./examples/reverse-words-2.js-svg]

[./examples/reverse-words-2.js-svg]: https://raw.githubusercontent.com/jonniespratley/js-leetcode/master/flowcharts/reverse-words-2.svg "Logo Title Text 2"


---

## 89 - ./examples/reverse-words.js

```javascript
    /**
 * Given an input string, reverse the string word by word.

Example:  

Input: "the sky is blue",
Output: "blue is sky the".
 */

/**
 * @param {string} str
 * @returns {string}
 */
var reverseWords = function (str) {
    let output = [];
    let words = str.split(' ');
    for (let index = words.length - 1; index > -1; index--) {
        let word = words[index];
        if (word) {
            //console.log(word);
            output.push(word);
        }
    }
    return output.join(' ');
};

console.log(reverseWords('the sky is blue'));
console.log(reverseWords(' the sky is blue '));
```

### Flowchart
![./examples/reverse-words.js-svg image][./examples/reverse-words.js-svg]

[./examples/reverse-words.js-svg]: https://raw.githubusercontent.com/jonniespratley/js-leetcode/master/flowcharts/reverse-words.svg "Logo Title Text 2"


---

## 90 - ./examples/roman-to-integer.js

```javascript
    // Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
//
// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
//
// For example, two is written as II in Roman numeral, just two one's added together. Twelve is written as, XII, which is simply X + II. The number twenty seven is written as XXVII, which is XX + V + II.
//
// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:
//
// I can be placed before V (5) and X (10) to make 4 and 9.
// X can be placed before L (50) and C (100) to make 40 and 90.
// C can be placed before D (500) and M (1000) to make 400 and 900.
//
// Given a roman numeral, convert it to an integer. Input is guaranteed to be within the range from 1 to 3999.
//
// Example 1:
//
// Input: "III"
// Output: 3
//
// Example 2:
//
// Input: "IV"
// Output: 4
//
// Example 3:
//
// Input: "IX"
// Output: 9
//
// Example 4:
//
// Input: "LVIII"
// Output: 58
// Explanation: C = 100, L = 50, XXX = 30 and III = 3.
//
// Example 5:
//
// Input: "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

/**
 * @param {string} s
 * @return {number}
 */
function romanToInt(s) {
    const map = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    let prevNum = 0;
    let sum = 0;

    for (let c of s) {
        const num = map[c];

        sum = prevNum >= num ?
            sum + num :
            sum + num - prevNum * 2;

        prevNum = num;
    }

    return sum;
}
```

### Flowchart
![./examples/roman-to-integer.js-svg image][./examples/roman-to-integer.js-svg]

[./examples/roman-to-integer.js-svg]: https://raw.githubusercontent.com/jonniespratley/js-leetcode/master/flowcharts/roman-to-integer.svg "Logo Title Text 2"


---

## 91 - ./examples/rotate-array.js

```javascript
    var rotate = function (nums, k) {
    nums.unshift.apply(nums, nums.splice(nums.length - k, k))

};
//console.log(rotate([-1], 2))
//console.log(rotate([1,2,3], 4))






/**
 * Input: "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"
*/


let n = 0;
let d = 0;
let data = [];
//console.log(reverseWords2("Let's take LeetCode contest"));

//Solution using array.shift()
function getResultsUsingArrayShift(data, d) {
    let temp = data.slice(0);
    for (let i = 0; i < d - 1; i++) {
        let first = temp.shift();
        temp.push(first);
    }
    return temp;
}

function rotateArray(a, d) {
    let i = 0;
    let size = a.length;
    let rotations = d - 1;
    return a.reduce((arr, number) => {
        arr[(i + (size - rotations)) % size] = number;
        i++;
        return arr;
    }, [])
}
console.log(rotateArray([1, 2, 3, 4, 5], 5));
console.log(rotateArray([1, 2], 2));
```

### Flowchart
![./examples/rotate-array.js-svg image][./examples/rotate-array.js-svg]

[./examples/rotate-array.js-svg]: https://raw.githubusercontent.com/jonniespratley/js-leetcode/master/flowcharts/rotate-array.svg "Logo Title Text 2"


---

## 92 - ./examples/rotate-image.js

```javascript
    // You are given an n x n 2D matrix representing an image.
//
// Rotate the image by 90 degrees (clockwise).
//
// Note:
//
// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.
//
// Example 1:
//
//   Given input matrix =
//   [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
//   ],
//
//   rotate the input matrix in-place such that it becomes:
//   [
//     [7,4,1],
//     [8,5,2],
//     [9,6,3]
//   ]
//
// Example 2:
//
//   Given input matrix =
//   [
//     [ 5, 1, 9,11],
//     [ 2, 4, 8,10],
//     [13, 3, 6, 7],
//     [15,14,12,16]
//   ],
//
//   rotate the input matrix in-place such that it becomes:
//   [
//     [15,13, 2, 5],
//     [14, 3, 4, 1],
//     [12, 6, 8, 9],
//     [16, 7,10,11]
//   ]

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

/** 1) Swap three times from outside to inside */
// https://youtu.be/Jtu6dJ0Cb94?t=2m20s
//
// Example
// Step 1: 1 -> 3 -> 9 -> 7, then 2 -> 6 -> 8 -> 4
// 1 2 3    3 2 1    9 2 1    7 2 1
// 4 5 6 -> 4 5 6 => 4 5 6 -> 4 5 6
// 7 8 9    7 8 9    7 8 3    9 8 3
//
// Step 2: from outside to inside
function rotate1(matrix) {
    const last = matrix.length - 1;

    for (let i = 0; i < matrix.length / 2; i++) { // i is layer level
        for (let j = i; j < last - i; j++) {
            swap(matrix, i, j, j, last - i);
            swap(matrix, i, j, last - i, last - j);
            swap(matrix, i, j, last - j, i);
        }
    }
}

function swap(m, x1, y1, x2, y2) {
    [m[x1][y1], m[x2][y2]] = [m[x2][y2], m[x1][y1]];
}

/** 2) Reverse up to down, then swap the symmetry */
// Idea
// To clockwise rotate, reverse up to down, then swap the symmetry
// (To anticlockwise rotate, reverse left to right, then swap the symmetry)
//
// Example
// 1 2 3    7 8 9    7 4 1
// 4 5 6 -> 4 5 6 -> 8 5 2
// 7 8 9    1 2 3    9 6 3
function rotate(matrix) {
    matrix.reverse();

    for (let i = 0; i < matrix.length; i++) {
        for (let j = i + 1; j < matrix[i].length; j++)
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
}
```

### Flowchart
![./examples/rotate-image.js-svg image][./examples/rotate-image.js-svg]

[./examples/rotate-image.js-svg]: https://raw.githubusercontent.com/jonniespratley/js-leetcode/master/flowcharts/rotate-image.svg "Logo Title Text 2"


---

## 93 - ./examples/search-in-a-binary-search-tree.js

```javascript
    /*
## Search in a Binary Search Tree

Given the root node of a binary search tree (BST) and a value. You need to find the node in the BST that the node's value equals the given value. Return the subtree rooted with that node. If such node doesn't exist, you should return NULL.

For example, 

```
Given the tree:
        4
       / \
      2   7
     / \
    1   3

And the value to search: 2
```

You should return this subtree:
```
      2     
     / \   
    1   3
```

In the example above, if we want to search the value 5, since there is no node with value 5, we should return NULL.

Note that an empty tree is represented by NULL, therefore you would see the expected output (serialized tree format) as [], not null.
*/
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}


//[2,1,3], p = 1
let t = new TreeNode(2);
t.right = new TreeNode(3);
t.left = new TreeNode(1);


/**
 * Recurisive
 * recursion solution first. In the worse case, the depth of our recursion is equal to the height of the tree. Therefore, the time complexity of the recursion solution is O(h). 
 * the space complexity should be O(h) in the worst case as well.
 * Time: 0(h)
 * Space: 0(h)
 * 
 * @param {TreeNode} root A binary tree
 * @param {Number} val The value to find
 */
var searchBST = function (root, val) {
    if (root === null) return [];
    if (root.val === val) {
        return root;
    } else if (root.val < val) {
        return searchBST(root.right, val);
    } else {
        return searchBST(root.left, val);
    }
};

/**
 *  The time complexity will be equal to the loop time which is also O(h) while the space complexity is O(1)
 * 
 */
class BST {
    /**
     * Time: 0(h)
     * Space: 0(1)
     * 
     * @param {TreeNode} root A binary tree
     * @param {Number} val The value to find
     */
    findNode(root, val) {
        while (root != null) {
            let currval = root.val;
            if (currval == val) break;
            if (currval <= val) {
                root = root.right;
            } else { // currval > val
                root = root.left;
            }
        }
        return root ? root : [];
    }
}

let bst = new BST();
let n = bst.findNode(t, 3);
console.log(bst.findNode(t, 3));
console.log(bst.findNode(t, 5));
console.log(bst.findNode(t, 2));

console.log(searchBST(t, 2));
```

### Flowchart
![./examples/search-in-a-binary-search-tree.js-svg image][./examples/search-in-a-binary-search-tree.js-svg]

[./examples/search-in-a-binary-search-tree.js-svg]: https://raw.githubusercontent.com/jonniespratley/js-leetcode/master/flowcharts/search-in-a-binary-search-tree.svg "Logo Title Text 2"


---

## 94 - ./examples/search-matrix.js

```javascript
    // Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:
//
//   Integers in each row are sorted in ascending from left to right.
//   Integers in each column are sorted in ascending from top to bottom.
//
// Consider the following matrix:
//
//   [
//     [1,   4,  7, 11, 15],
//     [2,   5,  8, 12, 19],
//     [3,   6,  9, 16, 22],
//     [10, 13, 14, 17, 24],
//     [18, 21, 23, 26, 30]
//   ]
//
// Example 1:
//
// Input: matrix, target = 5
// Output: true
//
// Example 2:
//
// Input: matrix, target = 20
// Output: false

/** Search from top right corner */
// Similar
// 74. Search a 2D Matrix
//
// time O(m + n), rule out one row or one column each time
function searchMatrix(matrix, target) {
    if (!matrix.length || !matrix[0].length) return false;

    let row = 0;
    let col = matrix[0].length - 1;

    while (col >= 0 && row <= matrix.length - 1) {
        if (matrix[row][col] === target) return true;
        else if (matrix[row][col] > target) col--;
        else if (matrix[row][col] < target) row++;
    }

    return false;
}
```

### Flowchart
![./examples/search-matrix.js-svg image][./examples/search-matrix.js-svg]

[./examples/search-matrix.js-svg]: https://raw.githubusercontent.com/jonniespratley/js-leetcode/master/flowcharts/search-matrix.svg "Logo Title Text 2"


---

## 95 - ./examples/serialize-and-deserialize-binary-tree.js

```javascript
    /*
## Serialize and Deserialize Binary Tree

Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.

Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.

Example: 

```
You may serialize the following tree:

    1
   / \
  2   3
     / \
    4   5

as "[1,2,3,null,null,4,5]"
```

Clarification: The above format is the same as how LeetCode serializes a binary tree. You do not necessarily need to follow this format, so please be creative and come up with different approaches yourself.

> Note: Do not use class member/global/static variables to store states. Your serialize and deserialize algorithms should be stateless.

*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    let str = '';
    let buildString = function(node) {
        if (!node) {
            str += '# ';
            return;
        }
        str += node.val + ' ';
        buildString(node.left);
        buildString(node.right);
        
    }
    buildString(root);
    return str;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    let values = data.split(' '), len = values.length, idx = 0;
    let buildTree = function() {
        if (idx >= len || values[idx] === '#') {
            return null;
        }
        let node = new TreeNode(parseInt(values[idx]));
        ++idx;
        node.left = buildTree();
        ++idx;
        node.right = buildTree();
        return node;
    }
    return buildTree();
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
```

### Flowchart
![./examples/serialize-and-deserialize-binary-tree.js-svg image][./examples/serialize-and-deserialize-binary-tree.js-svg]

[./examples/serialize-and-deserialize-binary-tree.js-svg]: https://raw.githubusercontent.com/jonniespratley/js-leetcode/master/flowcharts/serialize-and-deserialize-binary-tree.svg "Logo Title Text 2"


---

## 96 - ./examples/set-matrix-zeros.js

```javascript
    /*
## Set Matrix Zeroes

Given a m x n matrix, if an element is 0, set its entire row and column to 0. Do it in-place.

Example 1:

```
Input: 
[
  [1,1,1],
  [1,0,1],
  [1,1,1]
]
Output: 
[
  [1,0,1],
  [0,0,0],
  [1,0,1]
]
```

*/
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
    let rowHasZero = false;
    let colHasZero = false;

    let rows = [];
    let cols = [];

    function nullifyRow(matrix, row) {
        for (let index = 0; index < matrix.length; index++) {
            matrix[row][index] = 0;
        }
    }

    function nullifyCol(matrix, col) {
        for (let index = 0; index < matrix.length; index++) {
            matrix[index][col] = 0;
        }
    }

    //check if first row has 0
    for (let j = 0; j < matrix[0].length; j++) {
        if (matrix[0][j] === 0) {
            rowHasZero = true;
            break;
        }
    }
    //check if first col has 0
    for (let i = 0; i < matrix.length; i++) {
        if (matrix[i][0] === 0) {
            colHasZero = true;
            break;
        }
    }

    // check for zeros in rest of array
    for (let i = 1; i < matrix.length; i++) {
        for (let j = 1; j < matrix[0].length; j++) {
            if (matrix[i][j] === 0) {
                rows[i] = true;
                cols[j] = true;
            } 
        }    
    }
    
      // Nullify rows
      for (let i = 1; i < matrix.length; i++) {
        if (matrix[i][0] === 0) {
            nullifyRow(matrix, i);
        }
    }
    // Nullify cols
    for (let j = 1; j < matrix[0].length; j++) {
        if (matrix[0][j] === 0) {
            nullifyCol(matrix, j);
        }
    }

    if(rowHasZero){
        nullifyRow(matrix, 0)
    }
    if(colHasZero){
        nullifyCol(matrix, 0)
    }
    return matrix;
};

console.log(
    setZeroes([
        [1, 1, 1],
        [1, 0, 1],
        [1, 1, 1]
    ])
);
console.log(
    setZeroes([
        [0,1,2,0],
        [3,4,5,2],
        [1,3,1,5]
      ])
);
var solution = function(isBadVersion) {
    /**
      * @param {integer} n Total versions
      * @return {integer} The first bad version
      */
     return function(n) {
         var min = 1;
         var max = n;
         var bad = -1;
         while (min <= max) {
             var mid = Math.floor((min+max)/2);
             if (isBadVersion(mid)) {
                 bad = mid;
                 max = mid-1;
             }
             else {
                 min = mid+1;
             }
         }
         return bad;
     };
 };

 console.log(solution(5)())
```

### Flowchart
![./examples/set-matrix-zeros.js-svg image][./examples/set-matrix-zeros.js-svg]

[./examples/set-matrix-zeros.js-svg]: https://raw.githubusercontent.com/jonniespratley/js-leetcode/master/flowcharts/set-matrix-zeros.svg "Logo Title Text 2"


---

## 97 - ./examples/single-number.js

```javascript
    /**
 * 

 ## Single Number
Given a non-empty array of integers, every element appears twice except for one. Find that single one.

> Note: Your algorithm should have a linear runtime complexity O(n). 

#### Example 1:

```
Input: [2,2,1]
Output: 1
```

#### Example 2:

```
Input: [4,1,2,1,2]
Output: 4
```
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        let n1 = nums[i];
        if (nums.indexOf(n1) === nums.lastIndexOf(n1)) {
            return n1;
        }
    }
};

function singleNumber2(nums) {
    return nums.reduce((sum, num) => sum ^ num); // ^ is XOR
}
console.log(singleNumber([2, 2, 1]));
console.log(singleNumber2([2, 2, 1]));
//console.log(singleNumber([4,1,2,1,2]));

console.log(singleNumber([1, 1, 1, 1, 1, 5]));
console.log(singleNumber2([1, 1, 1, 1, 1, 5]));
```

### Flowchart
![./examples/single-number.js-svg image][./examples/single-number.js-svg]

[./examples/single-number.js-svg]: https://raw.githubusercontent.com/jonniespratley/js-leetcode/master/flowcharts/single-number.svg "Logo Title Text 2"


---

## 98 - ./examples/sort-colors.js

```javascript
    /*
## Sort Colors
Given an array with n objects colored red, white or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white and blue.

Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

> Note: You are not suppose to use the library's sort function for this problem.

Example:

```
Input: [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]
```

Follow up:

- A rather straight forward solution is a two-pass algorithm using counting sort.
- First, iterate the array counting number of 0's, 1's, and 2's, then overwrite array with total number of 0's, then 1's and followed by 2's.
- Could you come up with a one-pass algorithm using only constant space?
*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    // cheating
    //nums.sort((a, b) => a - b)
    let map = {
        '0': 0,
        '1': 0,
        '2': 0
    };
    for (let i = 0; i < nums.length; i++) {
        if (map.hasOwnProperty(nums[i])) {
            map[nums[i]]++;
        }
    }
    for (const key in map) {
        console.log(key, map[key]);
    }
    console.log(map)
    return nums;
};

var sortColors2 = function (nums) {
    var num0 = 0;
    var num1 = 0;
    var num2 = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 0) {
            num0++;
        } else if (nums[i] == 1) {
            num1++;
        } else {
            num2++;
        }
    }
    for (let i = 0; i < nums.length; i++) {
        if (i < num0) {
            nums[i] = 0;
        } else if (i < num0 + num1) {
            nums[i] = 1;
        } else {
            nums[i] = 2;
        }
    }
    return nums;
};

console.log(sortColors([2, 1, 0]));

console.log(sortColors([2, 0, 2, 1, 1, 0]));
console.log(sortColors2([2, 0, 2, 1, 1, 0]));
```

### Flowchart
![./examples/sort-colors.js-svg image][./examples/sort-colors.js-svg]

[./examples/sort-colors.js-svg]: https://raw.githubusercontent.com/jonniespratley/js-leetcode/master/flowcharts/sort-colors.svg "Logo Title Text 2"


---

## 99 - ./examples/sorted-array-to-bst.js

```javascript
    // Given an array where elements are sorted in ascending order, convert it to a height balanced BST.
//
// For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.
//
// Example:
//
// Given the sorted array: [-10,-3,0,5,9],
//
// One possible answer is: [0,-3,9,-10,null,5], which represents the following height balanced BST:
//
//       0
//      / \
//    -3   9
//    /   /
//  -10  5

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
function sortedArrayToBST(nums) {
    if (!nums.length) return null;

    const mid = Math.floor(nums.length / 2);

    let node = new TreeNode(nums[mid]);
    node.left = sortedArrayToBST(nums.slice(0, mid));
    node.right = sortedArrayToBST(nums.slice(mid + 1)); // make sure + 1, because mid number is root node, so need skip it

    return node;
}
```

### Flowchart
![./examples/sorted-array-to-bst.js-svg image][./examples/sorted-array-to-bst.js-svg]

[./examples/sorted-array-to-bst.js-svg]: https://raw.githubusercontent.com/jonniespratley/js-leetcode/master/flowcharts/sorted-array-to-bst.svg "Logo Title Text 2"


---

## 100 - ./examples/spiral-order.js

```javascript
    
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

/** Directions */
// https://leetcode.com/problems/spiral-matrix/discuss/20573/A-concise-C++-implementation-based-on-Directions
//
// When traversing the matrix in the spiral order, at any time we follow one out of the following four directions: RIGHT DOWN LEFT UP. Suppose we are working on a 5 x 3 matrix as such:
// 0  1  2  3  4  5
//    6  7  8  9 10
//   11 12 13 14 15
//
// Imagine a cursor starts off at (0, -1), i.e. the position at '0', then we can achieve the spiral order by doing the following:
// 1. Go right 5 times
// 2. Go down 2 times
// 3. Go left 4 times
// 4. Go up 1 times.
// 5. Go right 3 times
// 6. Go down 0 times -> quit
//
// Notice that the directions we choose always follow the order 'right -> down -> left -> up', and for horizontal movements, 
//the number of shifts follows: { 5, 4, 3 }, and vertical movements follows { 2, 1, 0 }.
// Thus, we can make use of a direction matrix that records the offset for all directions, 
//then an array of two elements that stores the number of shifts for horizontal and vertical movements, respectively. 
//This way, we really just need one for loop instead of four.
function spiralOrder(matrix) {
    if (!matrix.length) return [];

    const dirs = [
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0]
    ]; // right, down, left, up
    const steps = [matrix[0].length, matrix.length - 1];

    let res = [];
    let dir = 0;
    let r = 0;
    let c = -1;

    while (steps[dir % 2] > 0) {
        for (let i = 0; i < steps[dir % 2]; i++) {
            r += dirs[dir][0];
            c += dirs[dir][1];

            res.push(matrix[r][c]);
        }

        steps[dir % 2]--;
        dir = (dir + 1) % 4;
    }

    return res;
}
```

### Flowchart
![./examples/spiral-order.js-svg image][./examples/spiral-order.js-svg]

[./examples/spiral-order.js-svg]: https://raw.githubusercontent.com/jonniespratley/js-leetcode/master/flowcharts/spiral-order.svg "Logo Title Text 2"


---

## 101 - ./examples/sqrt.js

```javascript
    // Implement int sqrt(int x).
//
// Compute and return the square root of x, where x is guaranteed to be a non-negative integer.
//
// Since the return type is an integer, the decimal digits are truncated and only the integer part of the result is returned.
//
// Example 1:
//
// Input: 4
// Output: 2
//
// Example 2:
//
// Input: 8
// Output: 2
// Explanation: The square root of 8 is 2.82842..., and since
// the decimal part is truncated, 2 is returned.

/**
 * @param {number} x
 * @return {number}
 */
/** 1) Cheating */
function mySqrt1(x) {
    return Math.floor(Math.sqrt(x));
}

/** 2) */
// time O(n)
// space O(1)
function mySqrt2(x) {
    for (let i = 0; i <= x; i++) {
        if (i * i === x) return i;
        else if (i * i > x) return i - 1;
    }

    return x;
}

/** 3) Integer square root */
// https://en.wikipedia.org/wiki/Integer_square_root
function mySqrt3(x) {
    let r = x;

    while (r * r > x) {
        r = ((r + x / r) / 2) | 0;
    }

    return r;
}

/** 4) Binary search */
// time O(log n)
// space O(1)
function mySqrt(x) {
    let start = 1;
    let end = x;

    while (start < end - 1) { // if start < end, x = 8, at some point, start = 2, end = 3, will enter loop
        const mid = Math.floor((start + end) / 2);

        if (mid * mid < x) start = mid;
        else if (mid * mid > x) end = mid;
        else return mid;
    }

    return Math.min(start, end);
}
```

### Flowchart
![./examples/sqrt.js-svg image][./examples/sqrt.js-svg]

[./examples/sqrt.js-svg]: https://raw.githubusercontent.com/jonniespratley/js-leetcode/master/flowcharts/sqrt.svg "Logo Title Text 2"


---

## 102 - ./examples/str-str.js

```javascript
    // Implement strStr().
//
// Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
//
// Example 1:
//
// Input: haystack = "hello", needle = "ll"
// Output: 2
//
// Example 2:
//
// Input: haystack = "aaaaa", needle = "bba"
// Output: -1
//
// Clarification:
//
// What should we return when needle is an empty string? This is a great question to ask during an interview.
//
// For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().


/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  let result = 0;
  if (needle === "") {
    return result;
  }
  let index = haystack.indexOf(needle);
  return index >= -1 ? index : result;
};

/** 1) Cheating */
function strStr1(haystack, needle) {
  return haystack.indexOf(needle);
}

/** 2) Brute force */
function strStr2(haystack, needle) {
  for (let i = 0; i < haystack.length - needle.length + 1; i++) {
    if (haystack.substr(i, needle.length) === needle) return i;
  }

  return -1;
}
```

### Flowchart
![./examples/str-str.js-svg image][./examples/str-str.js-svg]

[./examples/str-str.js-svg]: https://raw.githubusercontent.com/jonniespratley/js-leetcode/master/flowcharts/str-str.svg "Logo Title Text 2"


---

## 103 - ./examples/sub-sets.js

```javascript
    /**
Given a set of distinct integers, nums, return all possible subsets (the power set).

Note: The solution set must not contain duplicate subsets.

Example:

```
Input: nums = [1,2,3]
Output:
[
  [3],
  [1],
  [2],
  [1,2,3],
  [1,3],
  [2,3],
  [1,2],
  []
]
```
 */
const subsets = function (nums) {
    const res = [
        []
    ];
    if (nums.length === 0 || nums === null) {
        return res;
    }
    const len = nums.length;

    function helper(i, arr = []) {
        for (; i < len; i++) {
            let clone = arr.slice(0);
            clone.push(nums[i]);
            res.push(clone);
            if (i + 1 < len) {
                helper(i + 1, clone);
            }
        }
    }
    helper(0);
    return res;
}
console.log(subsets([1, 2, 3]));
console.log(subsets([1, 2]));





/** Backtracking */
// Similar
// 46. Permutations
function subsets2(nums) {
    let res = [];

    function find(curr, rest, start) {
        res.push(curr);
        for (let i = start; i < rest.length; i++) {
            //console.log(...rest.slice(0, i))
            find(
                [...curr, rest[i]], [...rest.slice(0, i), ...rest.slice(i + 1)],
                start
            );
            start++;
        }
    }

    find([], nums, 0);

    return res;
}

console.log(subsets2([1, 2, 3]));
console.log(subsets2([1, 2]));
console.log(subsets2(['a', 'b', 'c']));

```

### Flowchart
![./examples/sub-sets.js-svg image][./examples/sub-sets.js-svg]

[./examples/sub-sets.js-svg]: https://raw.githubusercontent.com/jonniespratley/js-leetcode/master/flowcharts/sub-sets.svg "Logo Title Text 2"


---

## 104 - ./examples/substring-problem-template.js

```javascript
    function findSubstring(s) {
    let map = new Array(256).fill(0);
    let counter; // check whether the substring is valid
    
    let d = s.length; //the length of substring
    
    let begin = 0;
    let end = d - 1; //two pointers, one point to tail and one head
    

    //for () { /* initialize the hash map here */ }

    while (end < s.length) {


        //if (map[s[end++]]-- ?) {  /* modify counter here */ }

        while ( counter/* counter condition */ ) {
            /* update d here if finding minimum*/
            //increase begin to make it invalid/valid again
            //if (map[s[begin++]]++ ?) { /*modify counter here*/ }
        }
        /* update d here if finding maximum*/
    }

    return d;
}
```

### Flowchart
![./examples/substring-problem-template.js-svg image][./examples/substring-problem-template.js-svg]

[./examples/substring-problem-template.js-svg]: https://raw.githubusercontent.com/jonniespratley/js-leetcode/master/flowcharts/substring-problem-template.svg "Logo Title Text 2"


---

## 105 - ./examples/three-sum.js

```javascript
    // Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.
//
// Note:
//
// The solution set must not contain duplicate triplets.
//
// Example:
//
// Given array nums = [-1, 0, 1, 2, -1, -4],
//
//   A solution set is:
//   [
//     [-1, 0, 1],
//     [-1, -1, 2]
//   ]
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    nums.sort((a, b) => a - b);

    let results = [];
    let totalSum = 0;
    let i = 0
    while (i < nums.length - 2) {
        let j = i + 1;
        let k = nums.length - 1;
        while (j < k) {
            const sum = nums[i] + nums[j] + nums[k]
            if (sum < totalSum) {
                while (nums[++j] === nums[j - 1]);
            } else if (sum > totalSum) {
                while (nums[--k] === nums[k + 1]);
            } else {
                results.push([nums[i], nums[j], nums[k]])
                while (nums[++j] === nums[j - 1]);
                while (nums[--k] === nums[k + 1]);
            }
        }
        while (nums[++i] === nums[i - 1]);
    }
    return results;
};

/** Two pointers */
// https://www.youtube.com/watch?v=y-zBV7uUkyI
//
// Idea
// Select a first, move b to right, and move c to left
//
// Complexity
// time O(n^2)
//
// Example
// -1, 0, 1, 2, -1, -4
//  a  b             c
function threeSum(nums) {
    let res = [];

    nums = nums.sort((a, b) => a - b); // if sort() only will cause [-1, -2, -3, 1, 2, 3]

    for (let i = 0; i < nums.length - 2; i++) { // nums.length - 2 because 3 pointers a, b, c
        const a = nums[i];

        if (i > 0 && a === nums[i - 1]) continue; // move a to next different one to avoid duplicate results

        let l = i + 1;
        let r = nums.length - 1;

        while (l < r) {
            const b = nums[l];
            const c = nums[r];

            const sum = a + b + c;

            if (sum < 0) l++;
            else if (sum > 0) r--;
            else if (sum === 0) {
                res.push([a, b, c]);

                l++;
                while (l < r && nums[l] === nums[l - 1]) l++; // move b to next different one

                r--;
                while (l < r && nums[r] === nums[r + 1]) r--; // move c to previous different one
            }
        }
    }

    return res;
}
console.log(threeSum([-1, 0, 1, 2, -1, -4]));
```

### Flowchart
![./examples/three-sum.js-svg image][./examples/three-sum.js-svg]

[./examples/three-sum.js-svg]: https://raw.githubusercontent.com/jonniespratley/js-leetcode/master/flowcharts/three-sum.svg "Logo Title Text 2"


---

## 106 - ./examples/tree-populate-next-pointer.js

```javascript
    /*
## Populating Next Right Pointers in Each Node
Given a binary tree

```
struct TreeLinkNode {
  TreeLinkNode *left;
  TreeLinkNode *right;
  TreeLinkNode *next;
}
```

Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.

Initially, all next pointers are set to NULL.

Note:

- You may only use constant extra space.
- Recursive approach is fine, implicit stack space does not count as extra space for this problem.
- You may assume that it is a perfect binary tree (ie, all leaves are at the same level, and every parent has two children).

Example:

Given the following perfect binary tree,

```
     1
   /  \
  2    3
 / \  / \
4  5  6  7
```

After calling your function, the tree should look like:

```
     1 -> NULL
   /  \
  2 -> 3 -> NULL
 / \  / \
4->5->6->7 -> NULL
```
*/
/**
 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */

/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */

var connect = function(root) {
    if(!root) return;
    const queue = [root];
    
    while(queue.length) {
        const size  = queue.length;
        const level = queue.slice();

        for(let i = 0; i < size; i++) {
            const currentNode = queue.shift();
            currentNode.next  = level[i + 1];
            if(currentNode.left)  queue.push(currentNode.left);
            if(currentNode.right) queue.push(currentNode.right);
        }
    }
};
```

### Flowchart
![./examples/tree-populate-next-pointer.js-svg image][./examples/tree-populate-next-pointer.js-svg]

[./examples/tree-populate-next-pointer.js-svg]: https://raw.githubusercontent.com/jonniespratley/js-leetcode/master/flowcharts/tree-populate-next-pointer.svg "Logo Title Text 2"


---

## 107 - ./examples/tree-preorder-traversal.js

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

### Flowchart
![./examples/tree-preorder-traversal.js-svg image][./examples/tree-preorder-traversal.js-svg]

[./examples/tree-preorder-traversal.js-svg]: https://raw.githubusercontent.com/jonniespratley/js-leetcode/master/flowcharts/tree-preorder-traversal.svg "Logo Title Text 2"


---

## 108 - ./examples/two-sum.js

```javascript
    /**

## Two Sum

Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].

 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
/**

## Two Sum

Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].

 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let values = {};
  for(let i = 0; i < nums.length; i++){
    let diff = target - nums[i];
    if(values[diff] !== undefined) return [values[diff], i]
    values[nums[i]] = i;
  }
};






//

const input = [0, 1, 2, 5, 11, 15, 8, 23, 13, 7, 8];
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    let dict = {};
    for (i in numbers) {
        if (target - numbers[i] in dict) {
            return [dict[target - numbers[i]] + 1, Number(i) + 1];
        }
        dict[numbers[i]] = Number(i);
    }
};
console.time('twoSum')
console.log(twoSum(input, 9));
console.timeEnd('twoSum')

function twoSum2(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (i === j) continue;

            if (nums[i] + nums[j] === target) return [i, j];
        }
    }
}
console.time('twoSum2')
console.log(twoSum2(input, 9));
console.timeEnd('twoSum2')

//fastest
function twoSum3(nums, target) {
    let map = {};
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        let diff = target - num;
        console.log(`[target] ${target} - ${num} = ${diff}`)
        
       // console.log(diff, map, map[diff]);
        if (map[diff] !== undefined) {
            return [map[diff], i];
        }
        map[num] = i;
    }
    
}
console.time('twoSum3')
console.log(twoSum3(input, 9));
console.timeEnd('twoSum3')
```

### Flowchart
![./examples/two-sum.js-svg image][./examples/two-sum.js-svg]

[./examples/two-sum.js-svg]: https://raw.githubusercontent.com/jonniespratley/js-leetcode/master/flowcharts/two-sum.svg "Logo Title Text 2"


---

## 109 - ./examples/valid-params.js

```javascript
    // Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
//
// An input string is valid if:
//
//   1. Open brackets must be closed by the same type of brackets.
//   2. Open brackets must be closed in the correct order.
//
// Note that an empty string is also considered valid.
//
// Example 1:
//
// Input: "()"
// Output: true
//
// Example 2:
//
// Input: "()[]{}"
// Output: true
//
// Example 3:
//
// Input: "(]"
// Output: false
//
// Example 4:
//
// Input: "([)]"
// Output: false
//
// Example 5:
//
// Input: "{[]}"
// Output: true
/**
 * @param {string} s
 * @return {boolean}
 */
function isValid(s) {
  const map = {
    '(': ')',
    '[': ']',
    '{': '}'
  };
  let stack = [];
  for (let c of s) {
    if (map[c]) {
      stack.push(map[c]);
    } else {
      if (c !== stack.pop()) return false;
    }
  }
  return !stack.length;
}

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

### Flowchart
![./examples/valid-params.js-svg image][./examples/valid-params.js-svg]

[./examples/valid-params.js-svg]: https://raw.githubusercontent.com/jonniespratley/js-leetcode/master/flowcharts/valid-params.svg "Logo Title Text 2"


---
