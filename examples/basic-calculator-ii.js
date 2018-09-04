/**

Implement a basic calculator to evaluate a simple expression string.

The expression string contains only non-negative integers, `+`, `-`, `*`, `/` operators and empty spaces ` `. The integer division should truncate toward zero.

Example 1:

```
Input: "3+2*2"
Output: 7
```


Example 2:

```
Input: " 3/2 "
Output: 1
```

Example 3:

```
Input: " 3+5 / 2 "
Output: 5
```
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
    let sum = 0;
    let num = 0;

    //trim spaces
    s = s.replace(/\s/g, '');

    //hold the numbers from the string
    let nums = [];

    //hold the current sign;
    let sign = '+';

    for (let i = 0; i < s.length; i++) {
        let n = s[i];
        if (/\d/.test(n)) {
            n = Number(n);
            num = num * 10 + Number(n);
        }
        // sign or last number
        if ((/\D/.test(n)) || i === s.length - 1) {
            if (sign === '-') nums.push(-num);
            if (sign === '+') nums.push(num);
            if (sign === '*') nums.push(nums.pop() * num);
            if (sign === '/') nums.push(~~(nums.pop() / num));

            sign = n;
            num = 0;
        }
    }

    let res = 0;
    for (let n of nums) {
        res += n;
    }
    return res;
};

console.log(calculate('3+2*2'));
console.log(calculate('3/2'));
console.log(calculate(' 3+5 / 2 '));