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