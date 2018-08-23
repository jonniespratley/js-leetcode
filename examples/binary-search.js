function binarySearch(arr, val) {
    let lower_bound = 0;
    let upper_bound = arr.length - 1;

    while (lower_bound <= upper_bound) {
        let midpoint = Math.floor(upper_bound + lower_bound / 2);
        let value_at_midpoint = arr[midpoint];

        console.log(midpoint, value_at_midpoint);

        if (val < value_at_midpoint) {
            upper_bound = midpoint - 1;
        } else if (val > value_at_midpoint) {
            lower_bound = midpoint + 1;
        } else if (val == value_at_midpoint) {
            return midpoint;
        }
    }
    return null;
}

//console.log(binarySearch([1, 3, 4, 5, 6, 21, 43, 54, 86], 21));
//console.log(binarySearch([1, 3, 4, 5, 6, 21, 43, 54, 86], 1));

/**
 * 
 * Given two unsorted arrays of distinct elements, 
 * the task is to find all pairs from both arrays whose sum is equal to x.
 */

function findPairs(arr1, arr2, x) {
    let map = {};
    for (let i = 0; i < arr1.length; i++) {
        map[arr1[i]] = 0;
    }
    for (let j = 0; j < arr2.length; j++) {
        console.log(x - arr2[j]);
        if (map[x - arr2[j]]) {
            console.log('Found pair');
        }
    }

}
console.log(findPairs([1, 0, -4, 7, 6, 4], [0, 2, 4, -3, 2, 1], 8))