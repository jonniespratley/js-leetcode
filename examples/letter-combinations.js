const mappings = {
    1: "",
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz"
};

var letterCombinations = function (digits) {
    if (digits == null || digits === "") {
        return [];
    }
    let res = []; // initialize the result array
    let currIdx = 0; // keep track of the current index of digit we are looking at
    let currStr = ""; // keep track of the current substring we are exploring
    backtracking(res, digits, currIdx, currStr); // start recursion
    return res;
};

var backtracking = function (res, digits, currIdx, currStr) {
    if (currIdx === digits.length) {
        return res.push(currStr); // one of the solution now is complete, push it to the array
    }

    const c = digits[currIdx]; // get the current character    
    const mapping = mappings[c]; // get its mapping

    for (const s of mapping) { // iterate through every character in the mapping
        currStr += s;
        backtracking(res, digits, currIdx + 1, currStr); // recursion
        currStr = currStr.slice(0, -1); // revert currStr back
    }
};

//["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
console.log(letterCombinations('23'));