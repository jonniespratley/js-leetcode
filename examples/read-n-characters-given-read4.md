
        # read-n-characters-given-read4.js
        /**
 * Definition for read4()
 * 
 * @param {character[]} buf Destination buffer
 * @return {number} The number of characters read
 * read4 = function(buf) {
 *     ...
 * };
 *//**
 * @param {function} read4()
 * @return {function}
 *//**
     * @param {character[]} buf Destination buffer
     * @param {number} n Maximum number of characters to read
     * @return {number} The number of characters read
     */
        
        **Solution:**
        
        <!-- js-console -->
        ```javascript
            /**
 * Definition for read4()
 * 
 * @param {character[]} buf Destination buffer
 * @return {number} The number of characters read
 * read4 = function(buf) {
 *     ...
 * };
 */

/**
 * @param {function} read4()
 * @return {function}
 */
var solution = function (read4) {
    var internalBuf = [];

    /**
     * @param {character[]} buf Destination buffer
     * @param {number} n Maximum number of characters to read
     * @return {number} The number of characters read
     */
    return function (buf, n) {
        let readChars = 0;
        while (n > 0) {
            if (internalBuf.length === 0) {
                if (read4(internalBuf) === 0) {
                    return readChars;
                }
            }

            buf.push(internalBuf.shift());
            readChars++;
            n--;
        }
        return readChars;
    };
};
        ```
        
        > Reference: ..
        
        