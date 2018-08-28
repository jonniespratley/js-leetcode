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