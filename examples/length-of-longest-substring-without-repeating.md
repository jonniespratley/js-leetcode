
        # length-of-longest-substring-without-repeating.js
        undefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefined/**
 * @param {string} s
 * @return {number}
 */undefinedundefined
        
        **Solution:**
        
        <!-- js-console -->
        ```javascript
            // Given a string, find the length of the longest substring without repeating characters.
//
// Examples:
//
// Given "abcabcbb", the answer is "abc", which the length is 3.
//
// Given "bbbbb", the answer is "b", with the length of 1.
//
// Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
  let max = 0;
  let chars = [];
  for (let c of s) {
    chars = chars.slice(chars.indexOf(c) + 1); // remove everything before when find duplicate one, e.g. awke + w -> ke + w
    max = Math.max(chars.push(c), max); // push returns the array length
    console.log(chars)
  }
  return max;
}

console.log(lengthOfLongestSubstring('abcabcbb'));
console.log(lengthOfLongestSubstring('bbbbb'));
console.log(lengthOfLongestSubstring('pwwkew'));

var lengthOfLongestSubstring2 = function (s) {
  var map = {};
  var max = 0;
  var i = 0,
    j = 0;
  for (i; i < s.length; i++) {
    var index = s.indexOf(s[i], j);
    if (index !== -1 && index < i) {
      var l = i - j;
      max = Math.max(max, l);
      j = index + 1;
    }
  }
  return Math.max(max, i - j);
};
console.log(lengthOfLongestSubstring2('abcabcbb'));
console.log(lengthOfLongestSubstring2('bbbbb'));
console.log(lengthOfLongestSubstring2('pwwkew'));
        ```
        
        > Reference: ..
        
        