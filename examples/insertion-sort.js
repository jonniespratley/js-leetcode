/*

*/
const insert = function (array, rightIndex, value) {
    let i = rightIndex;
    let j = i - 1;
    for (; j >= 0 && array[j] > value; j--) {
        array[j + 1] = array[j];
    }
    array[j + 1] = value;
    return array;
};


const insertionSort = function (array) {
    for (let i = 0; i < array.length; i++) {
        insert(array, i, array[i]);
    }
    return array;
};

console.log(insertionSort([4, 2, 1, 3]));
console.log(insertionSort([4, 3, 2, 1, 0, -1, -99]));



function insertionSort2(items) {
    for (var i = 0; i < items.length; i++) {
        let value = items[i]
        // store the current item value so it can be placed right
        for (var j = i - 1; j > -1 && items[j] > value; j--) {
            // loop through the items in the sorted array (the items from the current to the beginning)
            // copy each item to the next one
            items[j + 1] = items[j]
        }
        // the last item we've reached should now hold the value of the currently sorted item
        items[j + 1] = value
    }

    return items;
}

console.log(insertionSort2([4, 2, 1, 3]));
console.log(insertionSort2([4, 3, 2, 1, 0, -1, -99]));

function qSort(arr) {
    if (arr.length === 0) {
        return [];
    }
    let leftArr = [];
    let rightArr = [];
    let pivot = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            leftArr.push(arr[i]);
        } else {
            rightArr.push(arr[i])
        }
    }
    return qSort(leftArr).concat(pivot, qSort(rightArr));
}

console.log(qSort([5, 2, 3, 1, -5]));