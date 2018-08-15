
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

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}


let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.right = new TreeNode(6);

const preOrder = preorderTraversal(root);
console.log(preOrder)


 


preOrder.forEach((val, i) => {
  let index1 = Math.floor(2 * i + 1)
  let index2 = Math.floor(2 * i + 2)
  console.log(val,preOrder[index1], preOrder[index2]);
})


/**
 * The basic idea is: from the preorder array, we know that the value of the root node is the first element, 
 * since the inorder array doesn't contain duplicate values, from the inorder array, we can find out the index of the root value, 
 * with this index, we can calculate how many nodes are there in the left and right subtrees, based on these information we can recursively 
 * rebuild the whole tree.

For example, we have this tree below:

```
            1
           / \
          2   3
         / \   \
        4   5   6
```

the preorder and inorder arrays are:

- preorder: 1 2 4 5 3 6
- inorder: 4 2 5 1 3 6

let's group the left nodes with ( ) and right nodes with [ ]:

- preorder: 1 (2 4 5) [3 6]
- inorder: (4 2 5) 1 [3 6]

we can then build the left subtree using the following preorder and inorder arrays:

- preorder: 2 4 5
- inorder: 4 2 5

and for the right subtree:

- preorder: 3 6
- inorder: 3 6


 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  function helper(p1, p2, i1, i2) {
    
      if (p1 > p2 || i1 > i2) return null; // sanity check
      console.log(p1, p2, i1, i2)
      var value = preorder[p1],           // get the root value
          index = inorder.indexOf(value), // get inorder position
          nLeft = index - i1,             // count nodes in left subtree
          root  = new TreeNode(value);    // build the root node

      // build the left and right subtrees recursively
      root.left  = helper(p1 + 1, p1 + nLeft, i1, index - 1);
      root.right = helper(p1 + nLeft + 1, p2, index + 1, i2);

      return root;
  }
  
  return helper(0, preorder.length - 1, 0, inorder.length - 1);
};
let tree2 = buildTree([1,2,4,5,3,6], [4,2,5,1,3,6]);
console.log(tree2)
console.log(preorderTraversal(tree2))

//if node is at index i, its children are at 
//node.left = 2 x i + 1
//node.right = 2 x i + 2