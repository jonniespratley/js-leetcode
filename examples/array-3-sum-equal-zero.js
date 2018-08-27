function sumToZero(arr) {
    if (!arr) return false

    arr.sort();
    let n = arr.length - 1;
    let sum = 0;
    let count = 0;

    //loop each item
    for (let i = 0; i < arr.length; i++) {
        let j = i + 1; //right of i
        let k = n; //end of arr
        while (k > j) {
            count++;
            sum = arr[i] + arr[j] + arr[k];
            console.log(i, j, k, sum);
            
            //found match...done
            if (sum === 0) {
                console.log('Found sum at', i, j, k, `(${arr[i]} + ${arr[j]} + ${arr[k]})`);
                return true;
            }
            // We didn't match. Let's try to get a little closer:
            //   If the sum was too big, decrement k.
            //   If the sum was too small, increment j.
            sum > 0 ? k-- : j++;
        }
    }

    return false;
}


//console.log(sumToZero([1, 1, 2, -1]));
//console.log(sumToZero([1, 2, 3, -3]));
//console.log(sumToZero([2, 1, -3, 3]));
console.log(sumToZero([3, 2, 1, 7, 9, 0, -4, 6]));






function threeSum(arr) {
    arr.sort();
    let k = arr.length - 1;
    for (let i = 0; i < arr.length; i++) {
        const a = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            const b = arr[j];
            console.log(a, b);
        }
    }
    
    
}
console.log(threeSum([2, 1, -3, 3]));