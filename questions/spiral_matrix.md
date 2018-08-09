# Spiral Matrix

Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.

Example 1:

```
Input:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
Output: [1,2,3,6,9,8,7,4,5]
```

Example 2:

```
Input:
[
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9,10,11,12]
]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]
```

```js
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
```