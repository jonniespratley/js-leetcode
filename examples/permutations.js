/*
# Permutations

Given a collection of distinct integers, return all possible permutations.

Example:

```
Input: [1,2,3]
Output:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]
```

*/
const permute = function (nums) {
    if (nums.length <= 1) {
        return [nums]
    }
    let res = []
    let last = nums.pop()
    let prevPerms = permute(nums)
    for (let prevPerm of prevPerms) {
        for (let i = 0; i <= prevPerm.length; i++) {
            let clone = prevPerm.slice(0)
            clone.splice(i, 0, last)
            res.push(clone)
        }
    }
    return res;
}

console.log(permute([1, 2, 3]))