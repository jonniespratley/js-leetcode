/*
## Sort Colors
Given an array with n objects colored red, white or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white and blue.

Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

> Note: You are not suppose to use the library's sort function for this problem.

Example:

```
Input: [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]
```

Follow up:

- A rather straight forward solution is a two-pass algorithm using counting sort.
- First, iterate the array counting number of 0's, 1's, and 2's, then overwrite array with total number of 0's, then 1's and followed by 2's.
- Could you come up with a one-pass algorithm using only constant space?
*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    // cheating
    //nums.sort((a, b) => a - b)
    let map = {
        '0': 0,
        '1': 0,
        '2': 0
    };
    for (let i = 0; i < nums.length; i++) {
        if (map.hasOwnProperty(nums[i])) {
            map[nums[i]]++;
        }
    }
    for (const key in map) {
        console.log(key, map[key]);
    }
    console.log(map)
    return nums;
};

var sortColors2 = function (nums) {
    var num0 = 0;
    var num1 = 0;
    var num2 = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 0) {
            num0++;
        } else if (nums[i] == 1) {
            num1++;
        } else {
            num2++;
        }
    }
    for (let i = 0; i < nums.length; i++) {
        if (i < num0) {
            nums[i] = 0;
        } else if (i < num0 + num1) {
            nums[i] = 1;
        } else {
            nums[i] = 2;
        }
    }
    return nums;
};

console.log(sortColors([2, 1, 0]));

console.log(sortColors([2, 0, 2, 1, 1, 0]));
console.log(sortColors2([2, 0, 2, 1, 1, 0]));