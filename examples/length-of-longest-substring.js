/**
 * 
 * Using a map to keep track of the count of each appeared characters.
Once the count of character at right is greater than 1, 
we will try to move left pointer to approach to right until the count of that character is less or equal to 1.
We update the max length of non-repeating substring during looping.
 * 
 * 
 */
const lengthOfLongestSubstring = function (str) {
    if (str.length === 0 || str === null) return 0
    const map = {};
    let len = str.length
    let left = 0;
    let right = 0;
    let max = 0;
    for (; right < len; right++) {
        let ch = str.charAt(right)
        map[ch] ? map[ch]++ : map[ch] = 1
        while (map[ch] > 1 && left < right) {
            map[str.charAt(left)]--
                left++
        }
        console.log(map)
        max = Math.max(max, right - left + 1)
    }
    return max
}

console.log(lengthOfLongestSubstring("pwwkew"));