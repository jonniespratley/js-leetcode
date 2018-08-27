/*
## Set Matrix Zeroes

Given a m x n matrix, if an element is 0, set its entire row and column to 0. Do it in-place.

Example 1:

```
Input: 
[
  [1,1,1],
  [1,0,1],
  [1,1,1]
]
Output: 
[
  [1,0,1],
  [0,0,0],
  [1,0,1]
]
```

*/
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
    let rowHasZero = false;
    let colHasZero = false;

    let rows = [];
    let cols = [];

    function nullifyRow(matrix, row) {
        for (let index = 0; index < matrix.length; index++) {
            matrix[row][index] = 0;
        }
    }

    function nullifyCol(matrix, col) {
        for (let index = 0; index < matrix.length; index++) {
            matrix[index][col] = 0;
        }
    }

    //check if first row has 0
    for (let j = 0; j < matrix[0].length; j++) {
        if (matrix[0][j] === 0) {
            rowHasZero = true;
            break;
        }
    }
    //check if first col has 0
    for (let i = 0; i < matrix.length; i++) {
        if (matrix[i][0] === 0) {
            colHasZero = true;
            break;
        }
    }

    // check for zeros in rest of array
    for (let i = 1; i < matrix.length; i++) {
        for (let j = 1; j < matrix[0].length; j++) {
            if (matrix[i][j] === 0) {
                rows[i] = true;
                cols[j] = true;
            } 
        }    
    }
    
      // Nullify rows
      for (let i = 1; i < matrix.length; i++) {
        if (matrix[i][0] === 0) {
            nullifyRow(matrix, i);
        }
    }
    // Nullify cols
    for (let j = 1; j < matrix[0].length; j++) {
        if (matrix[0][j] === 0) {
            nullifyCol(matrix, j);
        }
    }

    if(rowHasZero){
        nullifyRow(matrix, 0)
    }
    if(colHasZero){
        nullifyCol(matrix, 0)
    }
    return matrix;
};

console.log(
    setZeroes([
        [1, 1, 1],
        [1, 0, 1],
        [1, 1, 1]
    ])
);
console.log(
    setZeroes([
        [0,1,2,0],
        [3,4,5,2],
        [1,3,1,5]
      ])
);
var solution = function(isBadVersion) {
    /**
      * @param {integer} n Total versions
      * @return {integer} The first bad version
      */
     return function(n) {
         var min = 1;
         var max = n;
         var bad = -1;
         while (min <= max) {
             var mid = Math.floor((min+max)/2);
             if (isBadVersion(mid)) {
                 bad = mid;
                 max = mid-1;
             }
             else {
                 min = mid+1;
             }
         }
         return bad;
     };
 };

 console.log(solution(5)())