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



const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * 
Sum of 1 to N = (n+1) * n/2
Sum of GP = 2⁰ + 2¹ + 2² + 2³ + … 2^n = 2^(n+1)-1
Permutations of N = N! / (N-K)!
Combinations of N = N! / (K! * (N-K)!)
 */
nums.forEach((val, i) => {
  console.log(i + 1 * i / 2)
  console.log(val % 10)
  console.log(val % 20)
});

/**
 * Given a set of distinct integers, nums, return all possible subsets (the power set).
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  let res = [
    []
  ];
  let len = nums.length;

  function fn(i, arr) {
    for (; i < len; i++) {
      let a = arr.slice(0);
      a.push(nums[i]);
      res.push(a);
      if (i + 1 < len) {
        fn(i + 1, a);
      }
    }
  }

  fn(0, []);
  return res;
};
console.log(subsets([1, 2, 3]));


function subsets2(nums) {
  const sets = [
    []
  ];
  const {
    length
  } = nums;

  function fn(i, array) {
    for (; i < length; i++) {
      const set = array.slice(0);
      set.push(nums[i]);
      sets.push(set);
      if (i + 1 < length) {
        fn(i + 1, set);
      }
    }
  };
  fn(0, []);
  return sets;
}
console.log(subsets2([1, 2, 3]));





function twoSum(nums, target) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    let sum = target - nums[i];
    if (map[sum] !== undefined) {
      return [map[sum], i];
    }
    map[nums[i]] = i;

  }
}
console.log(twoSum([1, 2, 3], 4))
console.log(twoSum([2, 3, 3, 5, 10, 7, 11, 15], 9))

function threeSum(nums, target) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    let j = i + 1;
    let sum = target - nums[i] + nums[j];
    console.log(sum);
    if (map[sum] !== undefined) {
      return [map[sum], i, j];
    }
    map[nums[i] + nums[j]] = i;

  }
}
console.log(threeSum([1, 2, 1, 1], 3))
console.log(threeSum([2, 3, 3, 5, 10, 7, 11, 15], 15))

var containsDuplicate = function (nums) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) return true;
    map.set(nums[i], i);
  }
  return false;
};

console.log(containsDuplicate([1, 2, 3, 4, 1]));
console.log(containsDuplicate([1, 2, 3]));


var maxProfit = function (prices) {
  let min = Infinity;
  let max = 0;

  for (let i = 0; i < prices.length - 1; i++) {
    min = Math.min(min, prices[i]);
    max = Math.max(max, prices[i + 1] - min);
  }

  return max;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([1, 2, 3, 4, 5]));
console.log(maxProfit([7, 6, 4, 3, 1]));


/**
 * @param {number[]} nums
 * @return {number[]}
 * O(n2)
 * O(n)
 */
var productExceptSelf = function (nums) {
  const out = [];
  for (let i = 0; i < nums.length; i++) {
    let sum = 1;
    for (let j = 0; j < nums.length; j++) {
      if (i !== j) {
        sum *= nums[j];
      }
    }
    out.push(sum);
  }
  return out;
};

console.log(productExceptSelf([1, 2, 3, 4]));

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let answer = nums[0];
  let sum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    sum = Math.max(nums[i], sum + nums[i]);
    answer = Math.max(answer, sum);
  }
  return answer;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// Idea
// Select a first, move b to right, and move c to left
//
// Complexity
// time O(n^2)
//
// Example
// -1, 0, 1, 2, -1, -4
//  a  b             c
var threeSum = function (nums) {
  let res = [];
  let k = nums.length - 1;
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) { // nums.length - 2 because 3 pointers a, b, c
    const a = nums[i];

    if (i > 0 && a === nums[i - 1]) continue; // move a to next different one to avoid duplicate results

    let l = i + 1;
    let r = nums.length - 1;

    while (l < r) {
      const b = nums[l];
      const c = nums[r];
      const sum = a + b + c;

      if (sum < 0) l++;
      else if (sum > 0) r--;
      else if (sum === 0) {
        res.push([a, b, c]);
        l++;

        while (l < r && nums[l] === nums[l - 1]) l++; // move b to next different one

        r--;
        while (l < r && nums[r] === nums[r + 1]) r--; // move c to previous different one
      }
    }
  }

  return res;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]))



function fn1(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
}
fn1(5);

function fn2(n) {
  let steps = 0;
  for (let i = 0; i < n; i++) {
    steps++;
    for (let j = 0; j < n; j++) {
      steps++;

    }
  }
  console.log(steps);
}
fn2(5);


function fn3(n) {
  let steps = 0;
  for (let i = 0; i < n; i++) {
    steps++;
    for (let j = i + 1; j < n; j++) {
      steps++;
      console.log(i + '-' + j);
    }
  }
  console.log(steps);
}
fn3(5);


// Time: 0(log n)
// Space: 0(1)
function fn4(n) {
  let steps = 0;
  for (let i = 1; i <= n; i *= 2) {
    steps++;
    console.log(i);
  }
  console.log(steps);
}
fn4(100);

// Time: 0n
// Space: 0(1)
function fn5(n) {
  if (n === 0) return;
  console.log(n);
  fn5(n - 1);
}

function fn6(n) {
  if (n === 0) return;
  console.log(n);
  fn6(n - 1);
  fn6(n - 1);
}

function fn7(n) {
  if (n === 0) return;
  console.log(n);
  fn7(n / 2);
}





// fn5(5);
// fn6(5);
// fn7(2);




function permutation(str, prefix = '', array) {
  if (str.length == 0) {
    array.push(prefix);
    console.log(prefix);
  } else {
    for (let i = 0; i < str.length; i++) {
      const rem = str.substring(0, i) + str.substring(i + 1);
      permutation(rem, prefix + str.charAt(i), array);
    }
  }
}

function permutations(str) {
  let res = []
  permutation(str, '', res);
  return res;
}
console.log(permutations('abc'));

var car = {
  registrationNumber: "GA12345",
  brand: "Toyota",

  displayDetails: function () {
    console.log(this.registrationNumber + " " + this.brand);
  }
}

car.displayDetails();

var myCarDetails = car.displayDetails.bind(car);
myCarDetails();


function bubbleSort(arr) {
  let endPos = arr.length - 1;
  let swapPos = 0;
  while (endPos > 0) {
    for (let i = 0; i < endPos; i++) {
      console.log('i=', i, swapPos);
      if (arr[i] > arr[i + 1]) {
        //swap i and i + 1;
        let tmp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = tmp;
        swapPos = i;
      }

    }
    endPos = swapPos;
  }
  console.log('sorted', arr);
  return arr;
}
//console.log(bubbleSort([4, 3, 6, 5, 2, 1]))

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  const romans = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };
  let result = '';
  for (i = 1; i <= num; i++) {
    console.log(i);
    if (i <= 4) {
      result += 'I';
    } else if (i > 5) {
      result += 'V'
    }
  }

  return result;
};

console.log(intToRoman(4));
console.log(intToRoman(5));
console.log(intToRoman(9));
console.log(intToRoman(10));






