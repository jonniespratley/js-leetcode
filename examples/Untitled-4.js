/* Returns either the index of the location in the array,
  or -1 if the array did not contain the targetValue */
function doSearch(array, targetValue) {
  let min = 0;
  let max = array.length - 1;
  let guess;
  array.sort((a, b) => a - b);

  while (min <= max) {
    let mid = Math.floor(max + min / 2);
    guess = array[mid];
    if (targetValue < guess) {
      max = mid - 1;
    } else if (targetValue > guess) {
      min = mid + 1;
    } else if (targetValue === guess) {
      return mid;
    }
  }
  return -1;
};


let testArray = [7, 4, 2, 8, 1, 3, 9, 5];

console.log(doSearch(testArray, 5));
console.log(doSearch(testArray, 4));
console.log(doSearch(testArray, 8));
console.log(doSearch(testArray, 11));


//[9, 9, 4]
const swap = function (array, firstIndex, secondIndex) {
  let temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
  return array;
};

console.log(swap([7, 9, 4], 0, 2));


const indexOfMinimum = function (array, startIndex = 0) {
  let minValue = array[startIndex];
  let minIndex = startIndex;
  for (let i = minIndex + 1; i < array.length; i++) {
    if (array[i] < minValue) {
      minIndex = i;
      minValue = array[i];
    }
  }
  return minIndex;
};

const testArray2 = [18, 6, 66, 44, 9, 22, 14, 5];

console.log(indexOfMinimum([5, 6, 2, 1]));
console.log(indexOfMinimum(testArray2));

/**
 * Selection sort loops over positions in the array. 
 * For each position, it finds the index of the minimum value in the subarray starting at that position. 
 * Then it swaps the values at the position and at the minimum index. 
 * Write selection sort, making use of the swap and indexOfMinimum functions. 
 * @param array 
 * 
 */
const selectionSort = function (array) {
  for (let i = 0; i < array.length; i++) {
    let minIndex = indexOfMinimum(array, i);
    let minVal = array[minIndex];
    console.log('minVal', array[i], minVal);
    if (array[i] > minVal) {
      swap(array, i, minIndex);
    }
  }
  return array;
};

console.log(selectionSort([4, 2, 1, 3]));
//console.log(selectionSort(testArray2));
console.log(selectionSort([4, 3, 2, 1, 0, -1, -99]));

function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

console.log(factorial(5));
console.log(factorial(4));
console.log(factorial(3));
console.log(factorial(2));
console.log(factorial(1));
console.log(factorial(0));

function factorialRecursive(n) {
  if (n === 0) return 1;
  return n * factorialRecursive(n - 1);
}

console.log(factorialRecursive(5));
console.log(factorialRecursive(4));
console.log(factorialRecursive(3));
console.log(factorialRecursive(2));
console.log(factorialRecursive(1));
console.log(factorialRecursive(0));



/**
Base case #1
Start by implementing the first base case: if the length of the string is 0 or 1, isPalindrome() should return true.

Base case #2 - 
If the first and last characters of the string are different, then we know immediately that the string is not a palindrome. 

Recursive case
Finally, write the recursive case. Remove the first and last characters from the string and call isPalindrome 
function with the remaining string.
 * 
 */
var isPalindrome = function (str) {
  // base case #1
  if (str.length <= 1) {
    return true;
  }

  // base case #2
  if (str.charAt(0) !== str.charAt(str.length - 1)) {
    return false;
  }

  // recursive case
  let s = str.substring(1, str.length - 1);
  return isPalindrome(s);
  
  return undefined;
};

var str = 'Mozilla';

console.log(str.substring(0, 6));
// expected output: "oz"


console.log(isPalindrome('car'));
console.log(isPalindrome('dad'));

console.log(isPalindrome('racecar'));

console.log(Math.pow(1, 2));
console.log(Math.pow(2, 2));
console.log(Math.pow(4, 2));
console.log(Math.pow(5, 2));
console.log(Math.pow(6, 2));
console.log(Math.pow(7, 2));
console.log(Math.pow(8, 2));
console.log(Math.pow(9, 2));

console.log(1 % 2)
console.log(2 % 2)
console.log(4 % 2)
console.log(5 % 2)
console.log(6 % 2)
console.log(7 % 2)

function power(x, n){
  // base case
  
  // recursive case: n is negative 
  if(n < 0){

  }

  // recursive case: n is odd
  if ( n % 2 === 1){

  }

  // recursive case: n is even
  if ( n % 2 === 0){
    
  }

  return undefined;
}