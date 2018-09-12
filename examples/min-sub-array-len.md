
        # min-sub-array-len.js
        undefined
        
        **Solution:**
        
        <!-- js-console -->
        ```javascript
            var minSubArrayLen = function(s, nums) {
    let ret = Infinity;
    for (let i = 0, j = 0, sum = 0; j <= nums.length; ) {
        if (sum < s || i >= j) {
            sum += nums[j++]
        } else {
            ret = Math.min(ret, j - i)
            sum -= nums[i++]
        }
    }
    return ret === Infinity ? 0 : ret
};
//minSubArrayLen(7, [2,3,1,2,4,3]);
        ```
        
        > Reference: ..
        
        