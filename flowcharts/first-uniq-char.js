/*
## First Unique Character in a String
Given a string, find the first non-repeating character in it and return it's index. 
If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode",
return 2.

> Note: You may assume the string contain only lowercase letters.
*/
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    var map = {};
    for (var i = 0; i < s.length; i++) {
        let key = s[i];
        if (map[key] === undefined) { // if letter hasn't been encountered 
            // set char as key and value ([index, count]) as tuple of the index and letter count
            map[key] = [i, 1];
        } else {
            // increment letter count
            map[key][1] += 1;
            console.log(key, i)
        }
    }

    for (var k in map) {
        console.log(k, map[k]);
        // if a character count is equal to 1 it is the first unique, so return
        if (map[k][1] === 1) return map[k][0];
    }
    return -1; // return -1 if we didnt find a unique in our map
};
console.log(firstUniqChar('abc'));
console.log(firstUniqChar('aba'));
console.log(firstUniqChar('loveleetcode'));

function fib(n){
    if(n === 1 || n === 2){
        return 1;
    }
    return fib(n - 1) + fib(n - 2); 
}

console.log(fib(5));

/*
Basic idea is to keep track of the largest sum at current index and to 
achieve that we can compare the number on current index and the sum of the 
number on current index plus previous sum (previous sum set to -Infinity).
If the result is greater than the number on current index that means it has the 
potential to be included in the contiguous subarray so we add to previous sum.
 
But if the result is less than the number on current index that means we can simply 
ignore the result and set the previous sum to be the current number.

And as we compute previous sum, we can also compute max by find out what the maximum previous sum is. (we set max to nums[0] in case nums has only 1 element)
*/
var maxSubArray = function(nums) {
    let currentMax = nums[0];
    let previousSum = -Infinity;
    
    for (let num of nums) {
        //console.log(previousSum);
        previousSum = Math.max(num, num + previousSum);
        currentMax = Math.max(previousSum, currentMax);
    }
    
    return currentMax;
};
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));