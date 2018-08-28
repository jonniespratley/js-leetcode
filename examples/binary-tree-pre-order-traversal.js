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