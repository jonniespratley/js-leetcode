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




/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    let hashTable = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz'
    };
    let output = [];

    function helper(digit, n) {
        if (digit === n) {
            return;
        }
        for (let i = 0; i < hashTable[digit].length; i++) {
            let curr = hashTable[digit][i];
            console.log(curr);
            output.push(hashTable[digit][i])
        }
    }
    digits.split('').forEach(d => {
        console.log(helper(d));
    })
    return output;
};


const mappings = {
    1: "",
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz"
};


var letterCombinations = function (digits) {
    if (digits == null || digits === "") {
        return [];
    }
    // initialize the result array
    let res = [];
    // keep track of the current index of digit we are looking at
    let currIdx = 0;
    // keep track of the current substring we are exploring
    let currStr = "";
    // start recursion
    backtracking(res, digits, currIdx, currStr);
    return res;
};

var backtracking = function (res, digits, currIdx, currStr) {
    if (currIdx === digits.length) {
        // one of the solution now is complete, push it to the array
        return res.push(currStr);
    }

    // get the current character
    const c = digits[currIdx];
    // get its mapping
    const mapping = mappings[c];
    // iterate through every character in the mapping
    for (const s of mapping) {
        currStr += s;
        // recursion
        backtracking(res, digits, currIdx + 1, currStr);
        // revert currStr back
        currStr = currStr.slice(0, -1);
    }
};

//["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
console.log(letterCombinations('23'));