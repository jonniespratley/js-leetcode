/**
 * Diagonal Traverse
 * Given a matrix of M x N elements (M rows, N columns),
 * return all elements of the matrix in diagonal order as shown in the below image.
 *
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDiagonalOrder = function (matrix) {
    if (matrix.length === 0) {
        return [];
    }
    let len = matrix.length;
    let len2 = matrix[0].length;
    let len3 = len * len2;
    let res = [];
    let i = 0,
        j = 0,
        k = 0;

    while (k < len3) {
        res.push(matrix[i][j]);
        if ((i + j) % 2 === 1) {
            if (i === len - 1) {
                j++;
            } else if (j === 0) {
                i++;
            } else {
                i++;
                j--;
            }
        } else {
            if (j === len2 - 1) {
                i++;
            } else if (i === 0) {
                j++;
            } else {
                i--;
                j++;
            }
        }
        k++;
    }
    return res;
};