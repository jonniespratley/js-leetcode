/**
 * Distinguishing Syntax:
 * Initial Condition: left = 0, right = length-1
 * Termination: left > right
 * Searching Left: right = mid-1
 * Searching Right: left = mid+1
 * @param {*} arr 
 * @param {*} target 
 */
function binarySearch(arr, target) {
  arr.sort((a, b) => a - b);
  let right = arr.length - 1;
  let left = 0;

  while (left <= right) {
    let mid = Math.floor(right - left / 2);
    let val = arr[mid];

    let mid2 = Math.floor(right - left / 2);
    console.log(mid);
    console.log(mid2);

    if (target === val) {
      return mid;
    }

    if (target > val) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }

  }
  return -1;
}

const testArray = [6, 3, 1, 8, 21, 45, 64, 2, 67, 4, 5]
console.log(binarySearch([5, 4, 3, 2, 1], 4));
console.log(binarySearch(testArray, 64));




function reposition(arr, indices) {
  var newArr = []; // I'm not sure if extra space is allowed. If it is, the solution should be this simple.

  for (var i = 0; i < arr.length; ++i) {
    var newIndex = indices[i];
    newArr[newIndex] = arr[i];
  }

  return newArr;
}

var arr = ["a", "b", "c", "d", "e", "f"];
var indices = [2, 3, 4, 0, 5, 1];

console.log(reposition(arr, indices))
// returns: ["d", "f", "a", "b", "c", "e"]

var arr = ["a", "b", "c", "d", "e", "f"];
var indices = [2, 3, 4, 0, 5, 1];

arr = indices.map(function (item, index) {
  return arr[indices.indexOf(index)];
});
console.log(arr)

function swap(arr, idx1, idx2) {
  var temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

function reposition2(input, indices) {
  indices.forEach(function (newIdx, i) {
    if (indices.indexOf(i) > i) {
      swap(input, i, newIdx)
    }
  });
  return input
}


console.log(reposition2(arr, indices))



let matrix = [
  [1, 3, 5],
  [4, 7, 3],
  [
    [2, 3], 4
  ]
];

let flat = matrix.reduce((arr, item, index, src) => {
  console.log(arr, item);
  if (item.length) {

  }

  return arr;
}, [])

console.log(flat);

function isLetter(character) {
  return character >= 'a' && character <= 'z';
}

const str = 'abcdefghijklmnopqrstuvvwxyz'
if (Array.prototype.every.call(str, isLetter)) {
  console.log("The string '" + str + "' contains only letters!");
}


class Emitter {
  constructor() {
    this.events = {};
  }

  subscribe(eventName, callback) {
    this.events[eventName] = this.events[eventName] || [];
    const id = this.events[eventName].length + 1;
    this.events[eventName].push({
      id: id,
      fn: callback
    });

    //[callback, callback]

    return {
      release: () => {
        for (let i = 0; i < this.events[eventName].length; i++) {
          if (this.events[eventName][i].id === id) {
            this.events[eventName].splice(i, 1);
            break;
          }
        }
      }
    };
  }

  emit(eventName, ...data) {
    // data = ['foo', 'bar']
    if (this.events[eventName]) {
      this.events[eventName].forEach((obj) => {
        obj.fn(...data);
      });
    }
  }

}

function callback(...d) {

  console.log(d);
}

const emitter = new Emitter();

// 1. Support subscribing to events.
const sub = emitter.subscribe('event_name', callback);
const sub2 = emitter.subscribe('event_name', callback);
console.log(emitter);
// 2. Support emitting events.
// This particular example should lead to the `callback` above being invoked with `foo` and `bar` as parameters.
emitter.emit('event_name', 'foo', 'bar');

// 3. Support unsubscribing existing subscriptions by releasing them.
sub.release(); // `sub` is the reference returned by `subscribe` above
sub.release(); // `sub` is the reference returned by `subscribe` above



function doesOverlap(e1, e2) {
  if (e1.start > e2.start) {
    [e1, e2] = [e2, e1];
  }
  if (e1.end <= e2.start) {
    return false;
  }
  return true;
}

var e1 = {
  start: 40,
  end: 50
};

var e2 = {
  start: 55,
  end: 60
};

var e3 = {
  start: 45,
  end: 55
};

console.log(doesOverlap(e1, e2))
console.log(doesOverlap(e1, e3))
console.log(doesOverlap(e2, e3))


function bfs(root, target){
  let step = 0;
  let queue = [];
  queue.push(root);
  while(queue.length > -1){
    step++;
    let size = queue.length;
    //
  }
}