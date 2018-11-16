/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    let map = {
        0: 0,
        1: 0,
        2: 0
    };
    let out = [];
    for (let i = 0; i < nums.length; i++) {
        map[nums[i]]++;
    }
    console.log(map);
    for (let k in map) {

        console.log(k);
    }
    return out;
};

var arr = [2, 0, 2, 1, 1, 0];

console.log(sortColors(arr));
console.log((arr));

/**
 * Given a string s, find the longest palindromic substring in s. 
 * You may assume that the maximum length of s is 1000.
 * @param s Input string
 */
var longestPalindrome = function (s) {
    let res = "";
    let cur = "";
    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < i + 2; j++) {
            let left = i;
            let right = j;
            while (s[left] && s[left] === s[right]) {
                cur = s.substring(left, right + 1);
                if (cur.length > res.length) res = cur;
                left--;
                right++;
            }
        }
    }
    return res;
};

//console.log(longestPalindrome('babad'))
//console.log(longestPalindrome('cbbd'))


// Complete the diagonalDifference function below.
function diagonalDifference(a) {
    // length of input matrix.
    const {
        length
    } = a;
    let diagonal1 = 0,
        diagonal2 = 0;

    // Looping through the array and summing the diagonals.
    for (let i = 0; i < length; i++) {
        let n1 = a[i][i];
        let n2 = a[length - 1 - i][i];
        // Calculating the primary diagonal.
        diagonal1 += n1;
        // Reversing the second dimension of array to calculate secondary diagonal.
        diagonal2 += n2;
    }

    // return absolute difference value.
    return diagonal1 - diagonal2;
}

var input = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
];
console.log(diagonalDifference(input));



let perfectSqures = {};
let count = 10;
for (let i = 1; i <= count; i++) {
    const n = i * i
    perfectSqures[i] = Math.round(n);

}
console.log(perfectSqures)
let perfectSquresNums = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100];
/**
Given a positive integer n, find the least number of perfect square numbers (for example, 1, 4, 9, 16, ...) which sum to n.

Example 1:

Input: n = 12
Output: 3 
Explanation: 12 = 4 + 4 + 4.

Example 2:

Input: n = 13
Output: 2
Explanation: 13 = 4 + 9. 
 
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
    //an array with index being  0 to n and the index in the min number of perf square
    var minNumOfPerfSquare = new Array(n + 1);

    for (var index = 0; index < n + 1; index++) { //this array is the number of perfSquare of size 1 needed to make up from 0 to n
        minNumOfPerfSquare[index] = index;
    }

    //find max size of perfectsquare that does not exceed n
    var maxSize = Math.floor(Math.sqrt(n));

    var arrayOfSizes = []; //since size 1 already taken care above, start with size of 2 to max size for perf squares
    var size = 2;
    while (size <= maxSize) {
        arrayOfSizes.push(size);
        size++;
    }
    //for each size, start filling in the minimum of perf square needed for value up until n
    for (let i = 0; i < arrayOfSizes.length; i++) {
        var eachSize = arrayOfSizes[i];
        var perfSquare = Math.pow(eachSize, 2);
        for (let j = perfSquare; j <= n; j++) {
            var currentMin = minNumOfPerfSquare[j];
            var newValue = 1 + minNumOfPerfSquare[j - perfSquare];
            minNumOfPerfSquare[j] = Math.min(currentMin, newValue);
        }
    }
    return minNumOfPerfSquare[n];
};

console.log(numSquares(12));
console.log(numSquares(13));





var temperatures = [73, 74, 75, 71, 69, 72, 76, 73]
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
    let res = Array.from({
        length: temperatures.length
    }, x => 0);
    let stack = [];
    for (let i = 0; i < temperatures.length; i++) {
        while (stack.length > 0 && temperatures[stack[stack.length - 1]] < temperatures[i]) {
            let j = stack.pop();
            res[j] = i - j;
        }
        stack.push(i);
    }
    return res;
};
console.log(dailyTemperatures(temperatures));

/**
 * @param {character[][]} grid
 * @return {number}
 */
function numIslands(grid) {
    let count = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === '1') {
                dfs(grid, i, j);
                count++;
            }
        }
    }
    return count;
}

function dfs(grid, row, col) {
    if (grid[row][col] === '1') {
        grid[row][col] = '*'; // mark land piece as visited
        if (row > 0) dfs(grid, row - 1, col); // up
        if (row < grid.length - 1) dfs(grid, row + 1, col); // down
        if (col > 0) dfs(grid, row, col - 1); // left
        if (col < grid[row].length - 1) dfs(grid, row, col + 1); // right
    }
}

console.log(numIslands([
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
]));