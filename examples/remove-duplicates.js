/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    if (!nums || !nums.length) {
        return 0
    }
    let newIndex = 0;
    let p1 = 0;
    let p2 = 0;
    let len = nums.length;

    //while p1 < length
    while (p1 < len) {
        // console.log(p1, p2);
        while (p2 < len && nums[p1] == nums[p2]) {
            p2 += 1;

        }
        nums[newIndex] = nums[p1];
        newIndex += 1
        p1 = p2;
    }

    return newIndex;
};
console.time('removeDuplicates');
console.log(removeDuplicates([1, 2, 1, 1, 3]))
console.log(removeDuplicates([1, 2]))
console.timeEnd('removeDuplicates');