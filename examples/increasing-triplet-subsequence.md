
        # increasing-triplet-subsequence.js
        /*
## Increasing Triplet Subsequence

Given an unsorted array return whether an increasing subsequence of length 3 exists or not in the array.

Formally the function should:

> Return true if there exists i, j, k such that arr[i] < arr[j] < arr[k] given 0 ≤ i < j < k ≤ n-1 else return false.
> Note: Your algorithm should run in O(n) time complexity and O(1) space complexity.

Example 1:

```
Input: [1,2,3,4,5]
Output: true
```

Example 2:

```
Input: [5,4,3,2,1]
Output: false
```
*//**
 * @param {number[]} nums
 * @return {boolean}
 */undefinedundefinedundefined
        
        **Solution:**
        
        <!-- js-console -->
        ```javascript
            /*
## Increasing Triplet Subsequence

Given an unsorted array return whether an increasing subsequence of length 3 exists or not in the array.

Formally the function should:

> Return true if there exists i, j, k such that arr[i] < arr[j] < arr[k] given 0 ≤ i < j < k ≤ n-1 else return false.
> Note: Your algorithm should run in O(n) time complexity and O(1) space complexity.

Example 1:

```
Input: [1,2,3,4,5]
Output: true
```

Example 2:

```
Input: [5,4,3,2,1]
Output: false
```
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
    let small = Number.MAX_SAFE_INTEGER; // Set max value
    let big = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < nums.length; i++) {
        if (big >= nums[i]) {
            big = nums[i]; //update big to be smaller val
        } else if (small >= nums[i]) {
            small = nums[i]; //update small to be smaller val
        } else {
            return true;
        }
    }
    return false;
};

console.log(increasingTriplet([1, 2, 3, 4, 5]));
console.log(increasingTriplet([5, 4, 3, 2, 1]));
console.log(increasingTriplet([2, 1, 5, 0, 4, 6]));
        ```
        
        > Reference: ..
        
        