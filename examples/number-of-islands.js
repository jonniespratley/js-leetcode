/*
Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. 
An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. 

> You may assume all four edges of the grid are all surrounded by water.

Example 1:

```
Input:
11110
11010
11000
00000

Output: 1
```

Example 2:

```
Input:
11000
11000
00100
00011
['1', '1', '1', '0', '0'],
['0', '0', '1', '0', '0'],
['0', '0', '0', '1', '1']
Output: 3
```

*/
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    let count = 0;
    const height = grid.length;
    const width = grid[0].length;
    const visited = Array(height * width).fill(false);

    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            const col = grid[i][j];
            //console.log(col);
            if (!visited[i * width + j] && grid[i][j] === 1) {
                count++;
                dfs(i, j);
            }
        }

    }

    function dfs(r, c) {
        visited[r * width + c] = true;
        let dr = [r - 1, r + 1, r, r];
        let dc = [c, c, c - 1, c + 1];
        for (let i = 0; i < 4; i++) {
            if (dr[i] >= 0 && dr[i] < height && dc[i] >= 0 && dc[i] < width && grid[dr[i]][dc[i]] === 1 && !visited[dr[i] * width + dc[i]]) {
                dfs(dr[i], dc[i]);
            }
        }
        return;
    }

    return count;
};


console.log(numIslands([
    [1, 1, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 1, 1]
]));