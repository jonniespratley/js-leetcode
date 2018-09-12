
        # min-swaps.js
        /**
 * Create a pivot point and sort that way
 * @param {*} arr 
 *//*
    map[Symbol.iterator] = function* () {
        yield* [...this.entries()].sort((a, b) => a[1] - b[1]);
    }
    */undefinedundefined
        
        **Solution:**
        
        <!-- js-console -->
        ```javascript
            
function minSwaps2(arr) {
    let answer = 0;
    arr.sort((a, b) => {
        answer++;
        return a > b;
    })
    console.log(arr);
    return answer % arr.length + 1;
}
console.log(minSwaps2([4, 3, 1, 2]));



function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}


/**
 * Create a pivot point and sort that way
 * @param {*} arr 
 */
function minSwaps3(arr) {
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
            if (key !== arr[index]) {
                swap(arr, value, index);
                console.log('swap', key, index);
            }
            console.log(index);
        }

    }


    console.log(arr, map);
    return answer;
}

console.log(minSwaps3([4, 3, 1, 2]));
//console.log(minSwaps3([7, 1, 3, 2, 4, 5, 6]));


function swap2(arr, i) {
    let temp = arr[arr[i] - 1];
    arr[arr[i] - 1] = arr[i];
    arr[i] = temp;
}

function minimumSwaps(arr) {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        //CHeck if next number is 1
        console.log(i, arr[i])
        if (arr[i] !== i + 1) {
            console.log('Swap',i, i + 1);
            swap2(arr, i);
            count++;
        }
    }
    return count;
}

console.log(minimumSwaps([4, 3, 1, 2]));
        ```
        
        > Reference: ..
        
        