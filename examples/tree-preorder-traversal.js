function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 *  Performs the operation first on the node itself, then on its left descendants, and finally on its right descendants. 
 * In other words, a node is always visited before any of its children.
 * @param {TreeNode} root
 * @return {number[]}
 */
function preorderTraversal(root) {
    const result = [];
    traversal(root);

    function traversal(node) {
        if (node === null) {
            return result;
        } else {
            result.push(node.val);
            traversal(node.left);
            traversal(node.right);
        }
    };
    return result;
};

/**
 * 
 * @param {TreeNode} root 
 */
function postorderTraversal(root) {
    const result = [];
    traversal(root);

    function traversal(node) {
        if (node === null) {
            return result;
        } else {
            traversal(node.left);
            traversal(node.right);
            result.push(node.val);
        }
    };
    return result;
};


/** 1) Recursion */
// time O(n), the time complexity is O(n) because the recursive function is T(n) = 2 * T(n / 2) + 1
// space O(log n), n is number of nodes. The worst case space is O(n)
function inorderTraversal(root) {
    const result = [];

    function traverse(node) {
        if (!node) return;
        traverse(node.left);
        result.push(node.val);
        traverse(node.right);
    }

    traverse(root);
    return result;
}

function maxDepth(root) {
    if (root === null) {
        return 0;
    }
    let left_depth = maxDepth(root.left);
    let right_depth = maxDepth(root.right);
    return Math.max(left_depth, right_depth) + 1;
}

function treeHeight(root) {
    if (root === null) return 0;
    return 1 + Math.max(treeHeight(root.left), treeHeight(root.right));
}






const root = new TreeNode(5);
root.left = new TreeNode(3);
root.right = new TreeNode(10);
root.right.left = new TreeNode(7);
root.right.right = new TreeNode(12);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(4);


console.log(preorderTraversal(root));
console.log(postorderTraversal(root));
console.log(inorderTraversal(root));
console.log(treeHeight(root));
console.log(maxDepth(root));


function findNode(root, val) {
    while (root != null) {
        let currval = root.val;
        if (currval === val) return root;
        if (currval <= val) {
            root = root.right;
        } else {
            // currval > val
            root = root.left;
        }
    }
    return root ? root : -1;
}
console.log(findNode(root, 7))
console.log(findNode(root, 9))
console.log(findNode(root, 4))

