var rotate = function (nums, k) {
    nums.unshift.apply(nums, nums.splice(nums.length - k, k))

};
//console.log(rotate([-1], 2))
//console.log(rotate([1,2,3], 4))






/**
 * Input: "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"
*/


let n = 0;
let d = 0;
let data = [];
//console.log(reverseWords2("Let's take LeetCode contest"));

//Solution using array.shift()
function getResultsUsingArrayShift(data, d) {
    let temp = data.slice(0);
    for (let i = 0; i < d - 1; i++) {
        let first = temp.shift();
        temp.push(first);
    }
    return temp;
}

function rotateArray(a, d) {
    let i = 0;
    let size = a.length;
    let rotations = d - 1;
    return a.reduce((arr, number) => {
        arr[(i + (size - rotations)) % size] = number;
        i++;
        return arr;
    }, [])
}
console.log(rotateArray([1, 2, 3, 4, 5], 5));
console.log(rotateArray([1, 2], 2));