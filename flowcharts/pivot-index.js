var pivotIndex = function(nums) {
    let i = 0;
     // Run through all the numbers in the array
    for (; i < nums.length; i++) {

        // Get the sum on either half of the potential pivot
        let leftSum = nums.slice(0, i).reduce((a, b) => a + b, 0)
        let rightSum = nums.slice(i+1).reduce((a, b) => a + b, 0)

        // Check if pivot
        if (leftSum === rightSum) { return i; }
    }

    // If we have run through the whole array and not found a pivot then return -1
    return -1;
};

console.log(pivotIndex([1,7,3,6,5,6]));