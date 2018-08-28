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