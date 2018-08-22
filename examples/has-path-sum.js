var hasPathSum = function(root, sum) {
    let node = root;
    if(!node){
        return false;
    }
    if(node === null){
        return (sum === 0);
    }
    let answer = false;
    let subsum = sum - node.val;
    if(subsum === 0 && node.left == null && node.right == null){
        return true;
    } 
    if(node.left !== null){
       answer = answer || hasPathSum(node.left, subsum);
    }
    if(node.right !== null){
       answer = answer || hasPathSum(node.right, subsum);
    }
    return answer;
};