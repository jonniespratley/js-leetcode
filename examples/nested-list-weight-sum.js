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






