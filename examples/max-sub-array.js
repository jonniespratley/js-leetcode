
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