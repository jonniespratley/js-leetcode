
        # longest-palindromic-substring.js
        /*
## Longest Palindromic Substring
Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

Example 1:

```
Input: "babad"
Output: "bab"
```
Note: "aba" is also a valid answer.


Example 2:

```
Input: "cbbd"
Output: "bb"
```
 *//**
 * @param {string} s
 * @return {string}
 */undefined
        
        **Solution:**
        
        <!-- js-console -->
        ```javascript
            /*
## Longest Palindromic Substring
Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

Example 1:

```
Input: "babad"
Output: "bab"
```
Note: "aba" is also a valid answer.


Example 2:

```
Input: "cbbd"
Output: "bb"
```
 */
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    console.log(s);
};

var longestPalindrome = function (s) {
    let res = "";
    let cur = "";
    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < i + 2; j++) {
            let left = i;
            let right = j;
            while (s[left] && s[left] === s[right]) {
                cur = s.substring(left, right + 1);
                if (cur.length > res.length) res = cur;
                left--;
                right++;
            }
        }
    }
    return res;
};

function isPalindrome(word) {
    return word === word.split('').reverse().join('');
}



let isEven = (n) => n % 2 !== 1;
let isOdd = (n) => n % 2 === 1;



//[2,4,6,8,10].map( val => console.log(isEven(val)));
[1, 3, 5, 7, 9, 11, 13].map(val => console.log(isOdd(val)))






console.log(longestPalindrome('babad'));
        ```
        
        > Reference: ..
        
        