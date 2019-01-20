let arr = ['1', '2', '3', '4', '1'];
let index = arr.lastIndexOf('1');
//console.log(index);


function binarySearch(arr, key) {
  let low = 0;
  let high = arr.length - 1;
  arr.sort((a, b) => a - b);

  while (low <= high) {
    let mid = Math.floor(high - low / 2);
    if (arr[mid] === key) {
      return key;
    }
    if (arr[mid] < key) {
      low = mid + 1;
    } else if (arr[mid] > key) {
      high = mid - 1;
    }
  }
  return -1;
}


console.log(binarySearch(arr, '3'));
console.log(binarySearch(arr, '7'));

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

let j = matrix.length - 1;

for (let i = 0; i < matrix.length; i++, j--) {

  //First row
  console.log(matrix[0][i]); // 1, 2, 3

  //Last row
  console.log(matrix[matrix.length - 1][i]); // 7, 8, 9

  //Diag row
  console.log(matrix[i][j]); // 3, 5, 7

  //First col
  console.log(matrix[i][0]); // 1, 4, 7

  //Last col
  console.log(matrix[i][matrix.length - 1]); // 3, 6, 9

}

var containsDuplicate = function (nums) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      return true;
    }
    map.set(nums[i], i);
  }
  return false;
};

console.log(containsDuplicate([1, 2, 3, 4, 1]));
console.log(containsDuplicate([1, 2, 3]));


Function.prototype.fbind = function (context) {
  const that = this;
  return function (...args) {
    return that.apply(context, [].slice.apply(args));
  }
}
/*
this.apply is not a function
Function.prototype.fbind2 = (context) => {
  return (...args) => {
    return this.apply(context, [].slice.apply(args));
  }
}*/

/**
 * Real Implementation
 * // Does not work with `new funcA.bind(thisArg, args)`
if (!Function.prototype.bind) (function(){
  var ArrayPrototypeSlice = Array.prototype.slice;
  Function.prototype.bind = function(otherThis) {
    var thatFunc = this, thatArg = arguments[0];
    var args = ArrayPrototypeSlice.call(arguments, 1);
    var argLen = args.length;
    if (typeof thatFunc !== 'function') {
      // closest thing possible to the ECMAScript 5
      // internal IsCallable function
      throw new TypeError('Function.prototype.bind - ' +
             'what is trying to be bound is not callable');
    }
    return function(){
      args.length = argLen;
      args.push.apply(args, arguments);
      return thatFunc.apply(thatArg, args);
    };
  };
})();
 */

/*  Valid implementation. */
Function.prototype.fbind2 = function (context) {
  const that = this;
  if (typeof that !== 'function') {
    throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
  }
  return (...args) => {
    return this.apply(context, [].slice.apply(args));
  }
};

let args = [1, 2, 3];

//func.call(context, ...args); // pass an array as list with spread operator
//func.apply(context, args);   // is same as using apply

let wrapper = function () {
  return anotherFunction.apply(this, arguments);
};

function partial(func, ...argsBound) {
  return function (...args) { // (*)
    return func.call(this, ...argsBound, ...args);
  }
}


const movie = {
  title: 'Elf',
  setTitle: function (t, arg) {
    this.title = `${t} - ${arg}`;
    return this;
  },
  getTitle: function () {
    return this.title;
  }
};

const getNewTitle = movie.getTitle.fbind(this);
const setNewTitle = movie.setTitle.fbind('test');
console.log(setNewTitle(123));
console.log(getNewTitle());

const getNewTitle2 = movie.getTitle.fbind2(this);
const setNewTitle2 = movie.setTitle.fbind2(this, 'test');
console.log(setNewTitle2('test', 456));
console.log(getNewTitle2());


/**
 Netflix Onsite Question 2
 How many ways can you flip

 return x === 1 ? 0 : 1;
 if (x === 1) return 0;
 */
function flip(x) {
  return x === 1 ? 0 : 1;
}
console.assert(!flip(1))
console.assert(flip(0))

function flip2(x) {
  return !x;
}
console.assert(!flip2(1))
console.assert(flip2(0))


console.log(Boolean(0)) // false
console.log(Boolean(1)) // true