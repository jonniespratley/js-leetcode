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

//const preOrder = preorderTraversal(root);
//console.log(preOrder)

/*
Build Tree from Post-order / In-order
Let us see the process of constructing tree from in[] = {4, 8, 2, 5, 1, 6, 3, 7} and post[] = {8, 4, 5, 2, 6, 7, 3, 1}
1) We first find the last node in post[]. The last node is “1”, we know this value is root as root always appear in the end of postorder traversal.
2) We search “1” in in[] to find left and right subtrees of root. Everything on left of “1” in in[] is in left subtree and everything on right is in right subtree.

         1
       /    \
[4,8,2,5]   [6,3,7]

3) We recurse the above process for following two.
….b) Recurse for in[] = {6,3,7} and post[] = {6,7,3}
……. Make the created tree as right child of root.
….a) Recurse for in[] = {4,8,2,5} and post[] = {8,4,5,2}.
……. Make the created tree as left child of root.

One important observation is, we recursively call for right subtree before left subtree as we decrease index of postorder index whenever we create a new node. 
 */






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
var buildTree = function (preorder, inorder) {
    function helper(p1, p2, i1, i2) {

        if (p1 > p2 || i1 > i2) return null; // sanity check
        console.log(p1, p2, i1, i2)
        var value = preorder[p1], // get the root value
            index = inorder.indexOf(value), // get inorder position
            nLeft = index - i1, // count nodes in left subtree
            root = new TreeNode(value); // build the root node

        // build the left and right subtrees recursively
        root.left = helper(p1 + 1, p1 + nLeft, i1, index - 1);
        root.right = helper(p1 + nLeft + 1, p2, index + 1, i2);

        return root;
    }

    return helper(0, preorder.length - 1, 0, inorder.length - 1);
};
//let tree2 = buildTree([1,2,3], [4,2,5,1,3,6]);
//console.log(tree2)
//console.log(preorderTraversal(tree2))

//if node is at index i, its children are at 
//node.left = 2 x i + 1
//node.right = 2 x i + 2



/**
# Same Tree
Given two binary trees, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical and the nodes have the same value.

Example 1:

```
Input:     1         1
          / \       / \
         2   3     2   3

        [1,2,3],   [1,2,3]

Output: true
```

Example 2:
```
Input:     1         1
          /           \
         2             2

        [1,2],     [1,null,2]

Output: false
```

Example 3:
```
Input:     1         1
          / \       / \
         2   1     1   2

        [1,2,1],   [1,1,2]

Output: false
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
    function traversal(root, result) {
        let data = result || [];
        if (root === null) {
            data.push(null);
            return data;
        } else {
            data.push(root.val);
            traversal(root.left, data);
            traversal(root.right, data);
        }
        return data;
    };
    let t1 = traversal(p);
    let t2 = traversal(q);
    let out = true;
    for (let index = 0; index < t1.length; index++) {
        if ((t1[index] !== t2[index])) {
            return false;
        }
    }
    return out;
};

var isSameTree2 = function (p, q) {
    return isSame(p, q);
};

const isSame = (p, q) => {
    if (p === null && q === null) return true;

    if ((p !== null && q === null) || (p === null && q !== null)) return false;

    if (p.val !== q.val) return false;

    return (isSame(p.left, q.left) && isSame(p.right, q.right));
};


let tree1a = new TreeNode(1);
tree1a.left = new TreeNode(2);
tree1a.right = new TreeNode(3);
let tree2a = new TreeNode(1);
tree2a.left = new TreeNode(2);
tree2a.right = new TreeNode(3);

console.log(isSameTree(tree1a, tree2a));
console.log(isSameTree2(tree1a, tree2a));

let tree1b = new TreeNode(1);
tree1b.left = new TreeNode(2);
let tree2b = new TreeNode(1);
tree2b.right = new TreeNode(2);

console.log(isSameTree(tree1b, tree2b));
console.log(isSameTree2(tree1b, tree2b));





/**
 * Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. 
 * An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. 
 * You may assume all four edges of the grid are all surrounded by water.
 * 
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    let ocean = grid;
    const height = grid.length;
    const width = grid[0].length;
    const visited = Array(height * width).fill(false);
    let islandCount = 0;
    let i = 0;
    for (let index = 0; index < height; index++) {
        const row = grid[index];
        for (let j = 0; j < width; j++) {
            const cell = row[j];
            if (!visited[i * width + j] && grid[i][j] === 1) {
                islandCount++;
                dfs(i, j);
            }

            console.log(cell);
        }
    }

    function dfs(r, c) {
        visited[r * width + c] = true;
        let dr = [r - 1, r + 1, r, r];
        let dc = [c, c, c - 1, c + 1];
        for (let i = 0; i < 4; i++) {
            if (dr[i] >= 0 && dr[i] < height && dc[i] >= 0 && dc[i] < width && ocean[dr[i]][dc[i]] === 1 && !visited[dr[i] * width + dc[i]])
                dfs(dr[i], dc[i]);
        }
        return;
    }

    return islandCount;
};

console.log(numIslands([
    [1, 1, 1, 1, 0],
    [1, 1, 0, 1, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0]
])); //1
console.log(numIslands([
    [1, 1, 0, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 1, 1]
])); //3



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
    let answer = [];
    let queue = [root]
    let s2 = [];
    while (queue.length > 0) {
        let currentNode = queue.pop();
        s2.push(currentNode.val);
        if (currentNode.right) {
            queue.push(currentNode.right)
        }
        if (currentNode.left) {
            queue.push(currentNode.left)
        }
    }
    while (s2.length) {
        answer.push(s2.pop());
    }

    return answer;
};


let tree1 = new TreeNode('a');
//tree1.left = new TreeNode(null);
tree1.right = new TreeNode('b');
tree1.right.left = new TreeNode('c');

console.log(postorderTraversal(tree1));



let arr = [1, 3, 2, 2, 5, -1, 8, -4];

function findSum(array, k) {
    let start = 0;
    let end = array.length - 1;
    while (start <= end) {
        let sum = array[start] + array[end];
        console.log(start);
        if (sum === k) {
            console.log(("Found sum for " + array[start] + " and " + array[end]))
            start++;
            end--;
        } else if (sum < k) {
            start++;
        } else {
            end--;
        }
        console.log(sum);
    }
}

findSum(arr, 4);

var fruits = ["apple", "banana", "grapes"];

// Plain for loop
for (var i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}
    


// for/in loop iterates over the properties of an object
for (x in fruits){
    console.log("property: " + x + ", value: " + fruits[x]);
}
    


// while loop
var i = 0;
while (i < fruits.length) {
    console.log(fruits[i]);
    i++;
}

// Do/while loop
i = 0;
do {
    console.log(fruits[i]);
    i++;
} while (i < fruits.length)