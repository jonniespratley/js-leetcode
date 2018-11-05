// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
//
// For example, given n = 3, a solution set is:
//
//   [
//     "((()))",
//     "(()())",
//     "(())()",
//     "()(())",
//     "()()()"
//   ]
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    let result = [];
    createParenthesis(result, "", 0, 0, n);
    return result
};

var createParenthesis = function (array, string, open, close, n) {
    if (n === 0) return;
    if (string.length == n * 2) {
        array.push(string);
        return;
    }

    if (open < n) createParenthesis(array, `${string}(`, open + 1, close, n)
    if (close < open) createParenthesis(array, `${string})`, open, close + 1, n)
};

console.log(generateParenthesis(3));