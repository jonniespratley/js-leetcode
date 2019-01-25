function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
//[2,1,3], p = 1
let t = new TreeNode(2);
t.right = new TreeNode(1);
t.left = new TreeNode(3);
t.left.left = new TreeNode(7);
t.left.left.left = new TreeNode(9);
let root = t;
console.log(t);

const graph = {}
graph['you'] = ['alice', 'bob', 'claire']
graph['bob'] = ['anuj', 'peggy']
graph['alice'] = ['peggy']
graph['claire'] = ['thom', 'jonny', 'marry']
graph['anuj'] = []
graph['peggy'] = []
graph['thom'] = []
graph['jonny'] = []

console.log(graph);

const isMangoSeller = (n = '') => n.includes('m');

function search(graph, name) {
  let q = [];
  let searched = [];
  q.push(graph[name]);

  while (q.length !== 0) {
    let person = q.pop();

    if (isMangoSeller(person)) {
      console.log(`${person} is a mango seller!`);
      return true;
    } else {
      q.push(graph[person]);
    }
  }
  return false;
}

//console.log(search(graph, 'bob'));



/**
 * In-Order Traversal
 * In-order traversal means to "visit" the left branch, 
 * then the current node, and finally, the right branch.
 */
function inOrderTraversal(node) {
  if (node !== null) {
    inOrderTraversal(node.left);
    console.log(node.val);
    inOrderTraversal(node.right);
  }
}
inOrderTraversal(root);

/*
Pre-Order Traversal
Pre-order traversal visits the current node before its child nodes (hence the name "pre-order").
*/
function preOrderTraversal(node) {
  if (node !== null) {
    console.log(node.val);
    preOrderTraversal(node.left);
    preOrderTraversal(node.right);
  }
}
preOrderTraversal(root);
/*
Post-Order Traversal
Post-order traversal visits the current node after its child nodes (hence the name "post-order").
*/
function postOrderTraversal(node) {
  if (node !== null) {
    postOrderTraversal(node.left);
    postOrderTraversal(node.right);
    console.log(node.val);
  }
}
postOrderTraversal(root);
