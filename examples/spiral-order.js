
/*  
k - starting row index
m - ending row index
l - starting column index
n - ending column index
i - iterator
*/
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    var result = [];
    if (!matrix.length) {
        return result;
    }
    var i = 0,
        a = matrix,
        m = matrix.length,
        n = matrix[0].length,
        k = 0,
        l = 0;

    while (k < m && l < n) {
        //first row
        for (i = l; i < n; ++i) {
            result.push(a[k][i]);
        }
        k++;
        //last column
        for (i = k; i < m; ++i) {
            result.push(a[i][n - 1]);
        }
        n--;
        // Print the last row from the remaining rows 
        if (k < m) {
            for (i = n - 1; i >= l; --i) {
                result.push(a[m - 1][i]);
            }
            m--;
        }
        // Print the first column from the remaining columns 
        if (l < n) {
            for (i = m - 1; i >= k; --i) {
                result.push(a[i][l]);
            }
            l++;
        }
    }
    return result;
};

/** Directions */
// https://leetcode.com/problems/spiral-matrix/discuss/20573/A-concise-C++-implementation-based-on-Directions
//
// When traversing the matrix in the spiral order, at any time we follow one out of the following four directions: RIGHT DOWN LEFT UP. Suppose we are working on a 5 x 3 matrix as such:
// 0  1  2  3  4  5
//    6  7  8  9 10
//   11 12 13 14 15
//
// Imagine a cursor starts off at (0, -1), i.e. the position at '0', then we can achieve the spiral order by doing the following:
// 1. Go right 5 times
// 2. Go down 2 times
// 3. Go left 4 times
// 4. Go up 1 times.
// 5. Go right 3 times
// 6. Go down 0 times -> quit
//
// Notice that the directions we choose always follow the order 'right -> down -> left -> up', and for horizontal movements, 
//the number of shifts follows: { 5, 4, 3 }, and vertical movements follows { 2, 1, 0 }.
// Thus, we can make use of a direction matrix that records the offset for all directions, 
//then an array of two elements that stores the number of shifts for horizontal and vertical movements, respectively. 
//This way, we really just need one for loop instead of four.
function spiralOrder(matrix) {
    if (!matrix.length) return [];

    const dirs = [
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0]
    ]; // right, down, left, up
    const steps = [matrix[0].length, matrix.length - 1];

    let res = [];
    let dir = 0;
    let r = 0;
    let c = -1;

    while (steps[dir % 2] > 0) {
        for (let i = 0; i < steps[dir % 2]; i++) {
            r += dirs[dir][0];
            c += dirs[dir][1];

            res.push(matrix[r][c]);
        }

        steps[dir % 2]--;
        dir = (dir + 1) % 4;
    }

    return res;
}