function bind(func, thisValue, ...boundArgs) {
  return (...args) =>
    func.call(thisValue, ...boundArgs, ...args);
}

/*  My implementation. */
Function.prototype.fbind = function (context) {
  const that = this;
  return function (...args) {
    return that.apply(context, [].slice.apply(args));
  }
}

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

let list = {
  value: 1
};
list.next = {
  value: 2
};
list.next.next = {
  value: 3
};
list.next.next.next = {
  value: 4,
  next: null
};

let current = list;
let tail = null;
while (current) {
  console.log(current.value);
  current = current.next;
  if (current && current.next) {
    tail = current.next;
  }
}
console.log(tail);


function findLast(head) {
  var currNode = head;
  while (!(currNode.next == null)) {
    currNode = currNode.next;
  }
  return currNode;
}

function insert(val, head){
  let last = findLast(head);
  let item = {
    value: val,
    next: null
  };
  last.next = item;
  return last;
}

//console.log(insert(5, list));
console.log(findLast(list));


function appendToTail(head, data){
  let tail = {
    next: null,
    value: data
  };
  let n = head;
  while(n.next !== null){
    n = n.next;
  }
  n.next = tail;
  return head;
}
console.log(appendToTail(list, 5))

// prepend the new value to the list
list = {
  value: "new item",
  next: list
};

// Complete the reverseArray function below.
function reverseArray(a) {
  let len = a.length - 1;
  let res = [];
  for (let i = len; i >= 0; i--) {
    res.push(a[i]);
  }
  return res;
}

let a = [1, 2, 3, 4, 5];
console.log(reverseArray(a))

let seqList = new Array(2).fill([]);
console.log(seqList);
console.log(2 ^ 5 % 3);