/**
# Find Minimum in Rotated Sorted Array
Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e.,  [0,1,2,4,5,6,7] might become  [4,5,6,7,0,1,2]).

Find the minimum element.

You may assume no duplicate exists in the array.

Example 1:

Input: [3,4,5,1,2] 
Output: 1
Example 2:

Input: [4,5,6,7,0,1,2]
Output: 0

 * 
 * 
 * 
 * @param {number[]} nums
 * @return {number}
 */
var findMin2 = function (nums) {
    var min = Infinity

    for (var i = 0; i < nums.length; i++) {
        if (nums[i] > nums[i + 1]) {
            return nums[i + 1]
        }
        if (nums[i] < min) {
            min = nums[i]
        }
    }
    return min
};

var findMin3 = function (nums) {
    let left = 0,
        right = nums.length - 1;
    while (right - left > 1) {
        let mid = left + ((right - left) >> 1);
        if (nums[mid] > nums[right]) {
            left = mid;
        } else {
            right = mid;
        }
    }
    return Math.min(nums[left], nums[right]);
};

var findMin = function (nums) {
    return Math.min(...nums);
}