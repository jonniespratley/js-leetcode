/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    nums.sort((a, b) => a - b);

    let results = [];
    let totalSum = 0;
    let i = 0
    while (i < nums.length - 2) {
        let j = i + 1;
        let k = nums.length - 1;
        while (j < k) {
            const sum = nums[i] + nums[j] + nums[k]
            if (sum < totalSum) {
                while (nums[++j] === nums[j - 1]);
            } else if (sum > totalSum) {
                while (nums[--k] === nums[k + 1]);
            } else {
                results.push([nums[i], nums[j], nums[k]])
                while (nums[++j] === nums[j - 1]);
                while (nums[--k] === nums[k + 1]);
            }
        }
        while (nums[++i] === nums[i - 1]);
    }
    return results;
};
console.log(threeSum([-1, 0, 1, 2, -1, -4]));