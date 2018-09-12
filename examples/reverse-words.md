
        # reverse-words.js
        /**
 * Given an input string, reverse the string word by word.

Example:  

Input: "the sky is blue",
Output: "blue is sky the".
 *//**
 * @param {string} str
 * @returns {string}
 */undefined
        
        **Solution:**
        
        <!-- js-console -->
        ```javascript
            /**
 * Given an input string, reverse the string word by word.

Example:  

Input: "the sky is blue",
Output: "blue is sky the".
 */

/**
 * @param {string} str
 * @returns {string}
 */
var reverseWords = function (str) {
    let output = [];
    let words = str.split(' ');
    for (let index = words.length - 1; index > -1; index--) {
        let word = words[index];
        if (word) {
            //console.log(word);
            output.push(word);
        }
    }
    return output.join(' ');
};

console.log(reverseWords('the sky is blue'));
console.log(reverseWords(' the sky is blue '));
        ```
        
        > Reference: ..
        
        