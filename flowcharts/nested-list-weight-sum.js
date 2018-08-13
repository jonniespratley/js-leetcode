function depthSumHelper(list, depth) {
    let sum = 0;
    for (let n in list) {
        console.log(n);
        if (n.isInteger()) {
            sum += n.getInteger() * depth;
        } else {
            sum += depthSumHelper(n.getList(), depth + 1);
        }
    }
    return sum;
}

function depthSum(nestedList) {
    return depthSumHelper(nestedList, 1);
}

function swap(array, index1, index2) {
    var aux = array[index1];
    array[index1] = array[index2];
    array[index2] = aux;
}

function bubbleSort(array) {
    let length = array.length;
    for (let i = 0; i < length; i++) {
        console.log(i, array)
        for (let j = 0; j < length - 1; j++) {
            if (array[j] > array[j + 1]) {
                swap(array, j, j + 1);
            }
        }
    }
    return array;
}

function bubbleSort2(array) {
    var length = array.length;
    var cost = 0;
    for (var i = 0; i < length; i++) { //{1} 
        cost++;
        for (var j = 0; j < length - 1; j++) { //{2} 
            cost++;
            if (array[j] > array[j + 1]) {
                swap(array, j, j + 1);
            }
        }
    }
    console.log(`cost for bubbleSort with input size ${length} is ${cost}`);
}

//console.log(bubbleSort([7, 2, 4, 5, 9, 8, 1, 3, 6]));


//imperative:
const mergeArrays_ = function (arrays) {
    let count = arrays.length;
    let newArray = [];
    let k = 0;
    for (let i = 0; i < count; i++) {
        for (let j = 0; j < arrays[i].length; j++) {
            newArray[k++] = arrays[i][j];
        }
    }
    return newArray;
};
console.log(mergeArrays_([
    [1, 2, 3],
    [4, 5],
    [6]
]));

// function-oriented
const mergeArrays = (...arrays) => [].concat(...arrays); 
//console.log(mergeArrays([1, 2, 3], [4, 5], [6])); 




/**
 * 

 ## Single Number
Given a non-empty array of integers, every element appears twice except for one. Find that single one.

> Note: Your algorithm should have a linear runtime complexity O(n). 

#### Example 1:

```
Input: [2,2,1]
Output: 1
```

#### Example 2:

```
Input: [4,1,2,1,2]
Output: 4
```
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        let n1 = nums[i];
        if (nums.indexOf(n1) === nums.lastIndexOf(n1)) {
            return n1;
        }
    }
};

console.log(singleNumber([2, 2, 1]));
//console.log(singleNumber([4,1,2,1,2]));
console.log(singleNumber([1,1,1,1,1,5]));