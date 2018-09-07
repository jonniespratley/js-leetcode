// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.
//
// A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.
//
// Example:
//
// Input: "23"
// Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
//
// Note:
//
// Although the above answer is in lexicographical order, your answer could be in any order you want.
/**
 * @param {string} digits
 * @return {string[]}
 */
function letterCombinations(digits) {
    const letters = {
        1: '',
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz'
    };
    let prefix = [];
    let res = [];

    function dfs(i) {
        if (i === digits.length) {
            return res.push(prefix.join(''));
        }
        for (let c of letters[digits[i]]) {
            
            prefix.push(c);
            dfs(i + 1);
            prefix.pop();
        }
    }
    if (digits.length) {
        dfs(0);
    }
    return res;
}

//["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
console.log(letterCombinations('23'));
console.log(letterCombinations('123'));
//console.log(letterCombinations('456'));
//console.log(letterCombinations('789'));