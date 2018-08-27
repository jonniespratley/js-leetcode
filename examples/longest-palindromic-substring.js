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
var longestPalindrome = function(s) {
    console.log(s);
};

function isPalindrome(word) {
    return word === word.split('').reverse().join('');
}




let isEven = (n) => n % 2 !== 1;
let isOdd = (n) => n % 2 === 1;



//[2,4,6,8,10].map( val => console.log(isEven(val)));
[1,3,5,7,9, 11, 13].map( val => console.log(isOdd(val)))






console.log(longestPalindrome('babad'));