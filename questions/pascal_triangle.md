# Pascal's Triangle

Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it.

Example:

```
Input: 5
Output:
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]
```


```js

function pascalTriangle(lineNumber) {
  const currentLine = [1];
  const currentLineSize = lineNumber + 1;
  for (let numIndex = 1; numIndex < currentLineSize; numIndex += 1) {
    currentLine[numIndex] = currentLine[numIndex - 1] * (lineNumber - numIndex + 1) / numIndex;
  }
  return currentLine;
}

/**
 * @param {number} numRows
 * @return {number[][]}
 */
function generate(numRows){
  let result = [];
  for (let index = 0; index < numRows; index++) {
    result.push(pascalTriangle(index))
  }
  return result;
}
```