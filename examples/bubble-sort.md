
        # bubble-sort.js
        
        
        **Solution:**
        
        <!-- js-console -->
        ```javascript
            
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
console.log(bubbleSort([5,4,3,2,1]));
        ```
        
        > Reference: ..
        
        