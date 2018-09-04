/*

## Increasing Triplet Subsequence
Given an unsorted array return whether an increasing subsequence of length 3 exists or not in the array.

Formally the function should:

```
Return true if there exists i, j, k 
such that arr[i] < arr[j] < arr[k] given 0 ≤ i < j < k ≤ n-1 else return false.
Note: Your algorithm should run in O(n) time complexity and O(1) space complexity.
```

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
var increasingTriplet = function (nums) {
    var i = 0;
    let j = 0;
    let k = 0;
    for (; i < nums.length; i++) {
        j = i + 1;
        k = j + 1;
        if (nums[i] < nums[j] < nums[k]) {
            return true;
        } else {

        }
    }
    return false;

};

console.log(increasingTriplet([1, 2, 3, 4, 5]));
console.log(increasingTriplet([5, 4, 3, 2, 1]));