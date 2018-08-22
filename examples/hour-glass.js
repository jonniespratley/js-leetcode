let input = [
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 2, 4, 4, 0],
    [0, 0, 0, 2, 0, 0],
    [0, 0, 1, 2, 4, 0]
];

let input2 = [
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0]
];

function hourglassSum(arr) {
    let sum = 0;
    let maxSum = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < 4; i++) {
        const row = arr[i];
        for (let j = 0; j < 4; j++) {
            const col = row[j];
            sum = (
                arr[i][j] +
                arr[i][j + 1] +
                arr[i][j + 2] +
                arr[i + 1][j + 1] +
                arr[i + 2][j] +
                arr[i + 2][j + 1] +
                arr[i + 2][j + 2]
            );
            if (sum > maxSum) {
                maxSum = sum;
            }
        }

    }
    return maxSum
}

console.log(hourglassSum(input));
console.log(hourglassSum(input2));