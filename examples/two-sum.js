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

//
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    let dict = {};
    for (i in numbers) {
        if (target - numbers[i] in dict) {
            return [dict[target - numbers[i]] + 1, Number(i) + 1];
        }
        dict[numbers[i]] = Number(i);
    }
};

function twoSum1(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (i === j) continue;

            if (nums[i] + nums[j] === target) return [i, j];
        }
    }
}

function twoSum(nums, target) {
    let map = {};

    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];

        if (map[diff] !== undefined) return [map[diff], i];
        map[nums[i]] = i;
    }
}
console.log(twoSum([2, 7, 11, 15], 9));