function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
var sortedArrayToBST = function (nums) {
    return sortedArrayToBSTHelper(0, nums.length);

    function sortedArrayToBSTHelper(start, end) {
        if (start >= end) {
            return null;
        }
        const middle = start + Math.floor((end - start) / 2);
        const currentNode = new TreeNode(nums[middle]);

        const leftNode = sortedArrayToBSTHelper(start, middle);
        const rightNode = sortedArrayToBSTHelper(middle + 1, end);

        currentNode.left = leftNode;
        currentNode.right = rightNode;

        return currentNode;
    }
};
console.log(sortedArrayToBST( [-10,-3,0,5,9]));