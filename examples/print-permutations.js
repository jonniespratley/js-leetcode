var count = 0;

function printPermutations(s, openCnt, closeCnt) {
    count++;
    // console.log(count, s);
    if (openCnt === 0 && closeCnt === 0) {
        console.log(s);
        return;
    }

    if (openCnt > 0) {
        printPermutations(s + "(", openCnt - 1, closeCnt);
    }

    if (openCnt < closeCnt) {
        printPermutations(s + ")", openCnt, closeCnt - 1);
    }
}

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis2 = function (n) {
    let res = [];
    compose(n, n, '', res);
    return res;
}
// backtracking
function compose(left, right, s, res) { // left: left remaining, right: right remaining
    if (left > right) return; // e.g. ))(
    if (!left && !right) {
        res.push(s);
        return;
    }
    if (left) compose(left - 1, right, s + '(', res);
    if (right) compose(left, right - 1, s + ')', res);
}


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

    if (open < n) {
        createParenthesis(array, string + "(", open + 1, close, n)
    }
    if (close < open) {
        createParenthesis(array, string + ")", open, close + 1, n)
    }
};

//let num = 1 * 2;
var num = 1 * 2;
printPermutations('', num, num)
console.log(generateParenthesis(num));