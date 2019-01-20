/*
Workday interview question for Software Engineer UI role.



*/


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

console.log(rotateArray([1, 2, 3, 4, 5, 6], 1));



const name = 'jonnie';


console.log(name);



function fn(nums){
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    
  }

  return sum;
}

console.log(fn([1,2,3]));

function fib(n){
  if(n === 1 || n === 2){
      return 1;
  }
  return fib(n - 1) + fib(n - 2); 
}

console.log(fib(4));


var maxSubArray2 = function(nums) {
  for (let i = 1; i < nums.length; i++){
      nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);
  }
  return Math.max(...nums);
};
console.log(maxSubArray2([-2, -1, 6, 2, -5]));
