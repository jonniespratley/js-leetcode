var maxSubArrayLen = function (nums, k) {
    let subarrayLength = 0;
    let sum = 0;
    let map = {
        0: -1
    };
    nums.forEach((number, i) => {
        sum += number;
        if (!map.hasOwnProperty(sum)) {
            map[sum] = i;
        }
        if (map.hasOwnProperty(sum - k)) {
            subarrayLength = Math.max(subarrayLength, i - map[sum - k]);
        }
    });
    return subarrayLength;
};

console.log(maxSubArrayLen([1, -1, 5, -2, 3], 3));