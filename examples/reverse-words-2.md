
        # reverse-words-2.js
        /**
 
Given a string, you need to reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

Example 1:
Input: "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"

Note: In the string, each word is separated by single space and there will not be any extra space in the string.
 * @param {*} str 
 */
        
        **Solution:**
        
        <!-- js-console -->
        ```javascript
            /**
 
Given a string, you need to reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

Example 1:
Input: "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"

Note: In the string, each word is separated by single space and there will not be any extra space in the string.
 * @param {*} str 
 */
var reverseWords2 = function (str) {
    let output = [];
    let words = str.split(' ');
    for (let index = 0; index < words.length; index++) {
        let word = words[index];
        let temp = [];
        for (let index = word.length - 1; index > -1; index--) {
            let w = word[index];
            temp.push(w);
        }
        output.push(temp.join(''));
    }
    return output.join(' ');
};
console.log(reverseWords2("Let's take LeetCode contest") === "s'teL ekat edoCteeL tsetnoc");
        ```
        
        > Reference: ..
        
        