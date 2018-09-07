/*
## Palindrome Permutation
Given a string, determine if a permutation of the string could form a palindrome.


Example 1:

```
Input: "code"
Output: false
```

Example 2:

```
Input: "aab"
Output: true
```

Example 3:

```
Input: "carerac"
Output: true
```

*/

function isPalindrome(s) {
    const s2 = s.replace(/\W/g, '').toLowerCase();
    for (let i = 0; i < s2.length / 2; i++) {
        if (s2[i] !== s2[s2.length - i - 1]) return false
    }
    return true;
}


var canPermutePalindrome = function (s) {
    let map = new Map();
    s = s.replace(/\W/g, '');
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        let count = s.match(new RegExp(char, 'g') || []).length;
        map.set(char, count)
    }
    let count = 0;
    for (var [key, value] of map.entries()) {
        count += value % 2;
    }
    return count <= 1;
};


var canPermutePalindrome = function (s) {
    let obj = {};
    let falseCount = 0;
    for (let i = 0; i < s.length; i++) {
        if (obj[s[i]] === undefined) {
            obj[s[i]] = false;
        } else {
            obj[s[i]] = !obj[s[i]]
        }
    };
    for (let k in obj) {
        if (!obj[k]) {
            falseCount++;
        }
        if (falseCount > 1) {
            return false;
        }
    }
    return true;
};
console.log(canPermutePalindrome('//\\--')); //false
console.log(canPermutePalindrome('code')); //false
console.log(canPermutePalindrome('carerac')); //true
console.log(canPermutePalindrome('aab')); //true