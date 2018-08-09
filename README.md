# My Book

Welcome in my book!


This is an exercise:

---

Define a variable `x` equal to 10.

```js
var x =
```

```js
var x = 10;
```

```js
assert(x == 10);
```

```js
// This is context code available everywhere
// The user will be able to call magicFunc in his code
function magicFunc() {
    return 3;
}
```

---







/**
 * Given an input string, reverse the string word by word.

Example:  

Input: "the sky is blue",
Output: "blue is sky the".
 */

```js
/**
 * @param {string} str
 * @returns {string}
 */
var reverseWords = function(str) {
    let output = [];
    let words = str.split(' ');
    for (let index = words.length - 1; index > -1; index--) {
        let word = words[index];
        if(word){
            //console.log(word);
            output.push(word);
        }
    }
    return output.join(' ');
};

console.log(reverseWords('the sky is blue'));
console.log(reverseWords(' the sky is blue '));
```