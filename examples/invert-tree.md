
        # invert-tree.js
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

*//**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 *//**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
        
        **Solution:**
        
        <!-- js-console -->
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
        
        > Reference: ..
        
        