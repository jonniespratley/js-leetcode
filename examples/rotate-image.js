// You are given an n x n 2D matrix representing an image.
//
// Rotate the image by 90 degrees (clockwise).
//
// Note:
//
// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.
//
// Example 1:
//
//   Given input matrix =
//   [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
//   ],
//
//   rotate the input matrix in-place such that it becomes:
//   [
//     [7,4,1],
//     [8,5,2],
//     [9,6,3]
//   ]
//
// Example 2:
//
//   Given input matrix =
//   [
//     [ 5, 1, 9,11],
//     [ 2, 4, 8,10],
//     [13, 3, 6, 7],
//     [15,14,12,16]
//   ],
//
//   rotate the input matrix in-place such that it becomes:
//   [
//     [15,13, 2, 5],
//     [14, 3, 4, 1],
//     [12, 6, 8, 9],
//     [16, 7,10,11]
//   ]

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

/** 1) Swap three times from outside to inside */
// https://youtu.be/Jtu6dJ0Cb94?t=2m20s
//
// Example
// Step 1: 1 -> 3 -> 9 -> 7, then 2 -> 6 -> 8 -> 4
// 1 2 3    3 2 1    9 2 1    7 2 1
// 4 5 6 -> 4 5 6 => 4 5 6 -> 4 5 6
// 7 8 9    7 8 9    7 8 3    9 8 3
//
// Step 2: from outside to inside
function rotate1(matrix) {
    const last = matrix.length - 1;

    for (let i = 0; i < matrix.length / 2; i++) { // i is layer level
        for (let j = i; j < last - i; j++) {
            swap(matrix, i, j, j, last - i);
            swap(matrix, i, j, last - i, last - j);
            swap(matrix, i, j, last - j, i);
        }
    }
}

function swap(m, x1, y1, x2, y2) {
    [m[x1][y1], m[x2][y2]] = [m[x2][y2], m[x1][y1]];
}

/** 2) Reverse up to down, then swap the symmetry */
// Idea
// To clockwise rotate, reverse up to down, then swap the symmetry
// (To anticlockwise rotate, reverse left to right, then swap the symmetry)
//
// Example
// 1 2 3    7 8 9    7 4 1
// 4 5 6 -> 4 5 6 -> 8 5 2
// 7 8 9    1 2 3    9 6 3
function rotate(matrix) {
    matrix.reverse();

    for (let i = 0; i < matrix.length; i++) {
        for (let j = i + 1; j < matrix[i].length; j++)
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
}