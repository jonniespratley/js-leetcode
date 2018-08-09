/**
 * Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Example:

Input: [0,1,0,3,12]
Output: [1,3,12,0,0]
Note:

You must do this in-place without making a copy of the array.
Minimize the total number of operations.

 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let left = 0;
    let len = nums.length;
    let numNonZero = 0;
    while (left < len) {
        if (nums[left] != 0) {
            let tmp = nums[numNonZero]
            nums[numNonZero] = nums[left]
            nums[left] = tmp;
            numNonZero += 1;
            left += 1
        } else {
            left += 1
        }
    }
    return nums;
};

console.time('moveZeroes');
console.log(moveZeroes([0, 1, 0, 3, 12]));
console.log(moveZeroes([0, 0, 3, 1]));
console.log(moveZeroes([]));
console.timeEnd('moveZeroes');


var moveZeroes2 = function (nums) {
    let firstPos = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            let temp = nums[firstPos];
            nums[firstPos] = nums[i];
            nums[i] = temp;
            firstPos++;
        }
    }
};

console.time('moveZeroes2');
console.log(moveZeroes2([0, 1, 0, 3, 12]));
console.log(moveZeroes2([0, 0, 3, 1]));
console.log(moveZeroes2([]));
console.timeEnd('moveZeroes2');



/**

## Two Sum

Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].

 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    console.log('twoSum', nums, target);
    
};

console.log(twoSum([2, 7, 11, 15], 9));