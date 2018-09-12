
        # is-valid-params.js
        /**
 * @param {string} s
 * @return {boolean}
 */
        
        **Solution:**
        
        <!-- js-console -->
        ```javascript
            /**
 * @param {string} s
 * @return {boolean}
 */
function isValid(s) {
    let valid = false;
    let c;
    let dict = {
      '{': '}',
      '(': ')',
      '[': ']'
    };
    let stack = [];
    for (let i = 0; i < s.length; i++) {
      c = s[i];
      if (dict[c]) {
        stack.push(c);
      } else {
        if (dict[stack.pop()] !== c) {
          return false;
        }
      }
    }
    return (stack.length === 0);
  };
        ```
        
        > Reference: ..
        
        