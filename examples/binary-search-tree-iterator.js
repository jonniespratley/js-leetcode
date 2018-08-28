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