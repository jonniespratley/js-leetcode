function swap(array, index1, index2) {
    var aux = array[index1];
    array[index1] = array[index2];
    array[index2] = aux;
    //[index1, index2] = [index2, index1]
}

function bubbleSort(array) {
    let count = 0;
    let length = array.length;
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - 1; j++) {
            if (array[j] > array[j + 1]) {
                count++;
                swap(array, j, j + 1);
            }
        }
    }
    console.log(count);
    return array;
}
console.log(bubbleSort([4, 3, 2, 1]));

function minSwaps(arr) {
    let swaps = 0;
    let i = 0;
    let j = arr.length - 1;
    for (; i < arr.length; i++) {
        const n = arr[i];
        for (; j >= i; j--) {
            console.log(i, j)
            const n2 = arr[j];
            console.log(n, n2, n > n2)  
        }
        console.log(n);
    }
    return swaps;
}
console.log(minSwaps([4, 3, 1, 2]));







function minSwaps2(arr){
    let answer = 0;
    arr.sort((a, b) => {
        answer++;
        return a > b;
    })
    console.log(arr);
    return answer % arr.length + 1;
}
console.log(minSwaps2([4,3,1,2]));







function swap(arr, i, j){
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
 }


/**
 * Create a pivot point and sort that way
 * @param {*} arr 
 */
function minSwaps3(arr){
    let map = new Map();
    let answer = 0;
    let i = 0;
    arr.map((val, index) => map.set(val, index));
    
    /*
    map[Symbol.iterator] = function* () {
        yield* [...this.entries()].sort((a, b) => a[1] - b[1]);
    }
    */

    for (let [key, value] of map) {
        console.log(key + ' ' + value);
        
        for (let index = 0; index < arr.length; index++) {
            if(key !== arr[index]){
                swap(arr, value, index);
                console.log('swap', key, index);
            }
            console.log(index);   
        }
        
    }
    

    console.log(arr, map);
    return answer;
}

console.log(minSwaps3([4,3,1,2]));
//console.log(minSwaps3([7, 1, 3, 2, 4, 5, 6]));
