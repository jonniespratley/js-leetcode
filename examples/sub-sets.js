/**
Given a set of distinct integers, nums, return all possible subsets (the power set).

Note: The solution set must not contain duplicate subsets.

Example:

```
Input: nums = [1,2,3]
Output:
[
  [3],
  [1],
  [2],
  [1,2,3],
  [1,3],
  [2,3],
  [1,2],
  []
]
```
 */
const subsets = function (nums) {
    const res = [
        []
    ];
    if (nums.length === 0 || nums === null) {
        return res;
    }
    const len = nums.length;

    function helper(i, arr = []) {
        for (; i < len; i++) {
            let clone = arr.slice(0);
            clone.push(nums[i]);
            res.push(clone);
            if (i + 1 < len) {
                helper(i + 1, clone);
            }
        }
    }
    helper(0);
    return res;
}
console.log(subsets([1, 2, 3]));
console.log(subsets([1, 2]));





/** Backtracking */
// Similar
// 46. Permutations
function subsets2(nums) {
    let res = [];

    function find(curr, rest, start) {
        res.push(curr);
        for (let i = start; i < rest.length; i++) {
            //console.log(...rest.slice(0, i))
            find(
                [...curr, rest[i]], [...rest.slice(0, i), ...rest.slice(i + 1)],
                start
            );
            start++;
        }
    }

    find([], nums, 0);

    return res;
}

console.log(subsets2([1, 2, 3]));
console.log(subsets2([1, 2]));
console.log(subsets2(['a', 'b', 'c']));