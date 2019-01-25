// create a graph class 
class Graph {
  constructor(noOfVertices) {
    this.noOfVertices = noOfVertices;
    this.AdjList = new Map();
  }
  addVertex(v) {
    this.AdjList.set(v, []);
  }
  // addEdge(v, w) - add edge to the graph 
  addEdge(v, w) {
    // get the list for vertex v and put the 
    // vertex w denoting edge betweeen v and w 
    this.AdjList.get(v).push(w);
    // Since graph is undirected,  add an edge from w to v also 
    this.AdjList.get(w).push(v);
  }

  // printGraph() 
  // Prints the vertex and adjacency list 
  printGraph() {
    // get all the vertices 
    var get_keys = this.AdjList.keys();
    for (var i of get_keys) {
      var get_values = this.AdjList.get(i);
      var conc = "";
      for (var j of get_values) {
        conc += j + " ";
      }
      console.log(i + " -> " + conc);
    }
  }


  // bfs(v) 
  bfs(startingNode) {
    let visited = [];
  }
  // dfs(v) 
  dfs(v) {

  }
}

// Using the above implemented graph class 
var g = new Graph(6);
var vertices = ['A', 'B', 'C', 'D', 'E', 'F'];
for (var i = 0; i < vertices.length; i++) {
  g.addVertex(vertices[i]);
}

// adding edges 
g.addEdge('A', 'B');
g.addEdge('A', 'D');
g.addEdge('A', 'E');
g.addEdge('B', 'C');
g.addEdge('D', 'E');
g.addEdge('E', 'F');
g.addEdge('E', 'C');
g.addEdge('C', 'F');

// prints all vertex and 
// its adjacency list 
// A -> B D E 
// B -> A C 
// C -> B E F 
// D -> A E 
// E -> A D F C 
// F -> E C 
//g.printGraph(); 
console.log(g);


const myFunction = (x) => {
  if (x > 0) {
    return "ok"
  } else {
    throw "not ok"
  }
}
const flip = (x) => {
  if (x > 0) {
    return 0;
  } else {
    return 1;
  }
}


let a = 1,
  b = 2,
  c = 0;

console.log(a ^ b);
console.log(a ^ c);
console.log(b ^ c);

let d = [a, b] = [b, a];
console.log(d);

function oddManOut(nums) {
  return nums.reduce((sum, n) => (sum ^= n), 0);
}

console.log(oddManOut([2, 2, 4, 4, 6, 6, 8, 1, 1, 9, 9]));


function reverseInplace(arr) {
  let i = 0;
  let j = arr.length - 1;
  for (; i < j; i++, j--) {
    [arr[j], arr[i]] = [arr[i], arr[j]];
  }
  return arr;
}
console.log(reverseInplace([1, 2, 3, 4, 5]))

function removeDuplicates(arr) {
  return [...new Set(arr)];
}
console.log(removeDuplicates([1, 2, 3, 4, 4, 5, 6, 9, 10, 2, 4, ]))

function removeDuplicates2(arr) {
  let map = {};
  arr.forEach((val, i) => {
    map[val] = val;
  });
  return [...Object.values(map)];
  //return [...new Map(arr)]
}
console.log(removeDuplicates2([1, 2, 3, 4, 4, 5, 6, 9, 10, 2, 4, ]))


const makeFn = function (fn) {
  return function (t) {
    setTimeout(() => {
      fn.apply(fn, arguments);
    }, 1000);
  };
};

const myFun = makeFn(function (t) {
  console.log('Called', t);
});

myFun('Test');

var input = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

var output = null;

function addDiagonals(arr) {
  var out = [],
    count = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length) {
      for (var j = 0; j < arr[i].length; j++) {
        count += (arr[i][j + 1] ? arr[i][j + 1] : 0);
      }
      out.push(count);
    }
  }
  return out;
}

//console.log(addDiagonals(input));

function addDiagonals2(matrix) {
  let sum = 0;
  let j = matrix[0].length - 1;
  for (let i = 0; i < matrix.length; i++, j--) {
    sum += matrix[i][j];
    sum += matrix[i][i];
  }
  return sum;
}
/*
console.log(addDiagonals2([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]));
console.log(addDiagonals2([
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12]
]));
*/
/*

## Question 3
Given a multi-dimensional array, return an array containing the sum of the diagonals.

For example:

```
input:
  [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]

output:

[ 7, 12, 15, 8, 3 ]
```

*/
function diagonalSum(matrix) {
  const {
    length
  } = matrix;
  const initial = new Array(length * 2 - 1).fill(0);
  
  return input.reduce((a, subArr, y) => {
    subArr.forEach((item, x) => {
      const diagIndex = x - y + length - 1;
      a[diagIndex] += item;
    });
    return a;
  }, initial);
}
console.log(diagonalSum([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]));


var matrixExample = [
  [1, 2, 3, 4],
  [4, 5, 6, 5],
  [7, 8, 9, 7],
  [7, 8, 9, 7]
];

function sumUpDiagonals(matrix) {
  var sumDiagonals = {
      main: 0,
      second: 0
    },
    matrixLength = matrix.length;

  for (var i = 0; i < matrixLength; i++) {
    sumDiagonals.main += matrix[i][i];
    sumDiagonals.second += matrix[i][matrixLength - i - 1];
  }
  return sumDiagonals
}

//console.log(sumUpDiagonals(matrixExample))
/*

var array = ["ABCD", "EFGH", "IJKL"];

var Ylength = array.length;
var Xlength = array[0].length;
var maxLength = Math.max(Xlength, Ylength);
var temp;
for (var k = 0; k <= 2 * (maxLength - 1); ++k) {
  temp = [];
  for (var y = Ylength - 1; y >= 0; --y) {
    var x = k - y;
    if (x >= 0 && x < Xlength) {
      temp.push(array[y][x]);
    }
  }
  if (temp.length > 0) {
    console.log(temp.join(''))
  }
}
*/



function calculateDiagonals(matrix) {
  var n = matrix.length;
  var diag1 = 0;
  var diag2 = 0;
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      // an element from the main diagonal
      if (i === j) {
        diag1 += matrix[i][j];
      }
      // an element from the counterdiagonal
      if (i + j === n - 1) {
        diag2 += matrix[i][j];
      }
    }
  }
  return Math.abs(diag1 - diag2);
}
console.log(calculateDiagonals(input));