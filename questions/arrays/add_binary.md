# Add Binary

Given two binary strings, return their sum (also a binary string).

The input strings are both non-empty and contains only characters 1 or 0.

Example 1:

```
Input: a = "11", b = "1"
Output: "100"
```

Example 2:

```
Input: a = "1010", b = "1011"
Output: "10101"
```

### Solution

```js
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  var [carry, i, j, res] = [0, a.length - 1, b.length - 1, ""];
  while(i >= 0 || j >= 0 || carry > 0) {
      const bita = i >= 0 ? Number(a[i]) : 0;
      const bitb = j >= 0 ? Number(b[j]) : 0;
      const sum = bita + bitb + carry;
      res = `${sum%2}${res}`;
      carry = Math.floor(sum / 2);
      i--; j--;
  }
  return res;
};
```