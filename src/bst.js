function log(what) {
    console.log(what);
  }
  
  class Node {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
  
    }
  }
  /**
   * BinarySearchTree example
   * Each value occurs only once.
   * Each node has a value and:
   * - Left: Less than node's value.
   * - Right: Greater than node's value.
   */
  class BinarySearchTree {
    constructor(nodes) {
      this.root = null;
      if(nodes && nodes.length){
        nodes.forEach((n) => {
          this.add(n);
        });
      }
    }
  
    contains(val) {
      let current = this.root;
      while (current) {
        if (val > current.val) {
          current = current.right;
        } else if (val < current.val) {
          current = current.left;
        } else {
          return true;
        }
      }
      return false;
    }
  
    /**
     * In order to add items to this tree we are going to do the same traversal
     * as before, bouncing between left and right nodes depending on them being
     * less than or greater than the val we're adding.
     *
     * However, this time when we reach a `left` or `right` that is `null` we're
     * going to add a new node in that position.
     */
  
    add(val) {
      const n = new Node(val);
      if(this.root === null){
        this.root = n;
        return;
      } else {
        let current = this.root;
  
        while(true){
          if(val < current.val){
            if(!current.left){
              current.left = n;
              break;
            } else {
              current = current.left;
            }
  
          } else if(val > current.val) {
            if(!current.right){
              current.right = n;
              break;
            } else {
              current = current.right;
            }
          } else {
            break;
          }
        }
      }
    }
  
    toString() {
      let current = this.root;
      while (current) {
        if (current.left) {
          current = current.left;
        } else {
          current = current.right;
        }
        break;
      }
    }
  
    getMin(){
      let current = this.root;
      while(!(current.left === null)){
        current = current.left;
      }
      return current.val;
    }
  
    getMax(){
      let current = this.root;
      while(!(current.right === null)){
        current = current.right;
      }
      return current.val;
    }
  
    DFSPreOrder(node) {
      if (node == null) {
        return;
      }
      this.DFSPreOrder(node.left);
      this.DFSPreOrder(node.right);
    }
  
    DFSInOrder(node) {
      if (node == null) {
        return;
      }
      this.DFSInOrder(node.left);
      this.DFSInOrder(node.right);
    }
  
    DFSPostOrder(node) {
      if (node == null) {
        return;
      }
      this.DFSPreOrder(node.left);
      this.DFSPreOrder(node.right);
    }
  
    getCount(){
      const count = 0;
  
    }
    getEdges(){
  
    }
  }
  
module.exports = BinarySearchTree;  
module.exports = BinarySearchTree;  