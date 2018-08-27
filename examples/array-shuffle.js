/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this.nums = nums;
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    return this.nums;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
   /* let copy = this.nums.slice();
    for (let i = 0; i < copy.length; i++) {
        let rand = Math.floor(Math.random() * copy.length);
        let temp = copy[i];
        copy[i] = copy[rand];
        copy[rand] = temp;
    }
    return copy;*/

    let nums = [...this.nums];
    let i = nums.length;

    while (i--) {
      const n = Math.floor(Math.random() * nums.length);
      [nums[i], nums[n]] = [nums[n], nums[i]];
    }

    return nums;

   /* let temp = [];
    this.nums.forEach((val, key) => temp[key] = val);
    for (let i = 0; i < temp.length; i++) {
        let rand = Math.floor(Math.random() * (temp.length - i))
        let n = temp[i];
        temp[i] = temp[rand];
        temp[rand] = n;
    }
    
    return temp;*/
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = Object.create(Solution).createNew(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */