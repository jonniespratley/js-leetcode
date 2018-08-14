/*
## Count and Say

The count-and-say sequence is the sequence of integers with the first five terms as following:

```
1.     1
2.     11
3.     21
4.     1211
5.     111221
```

- 1 is read off as "one 1" or 11.
- 11 is read off as "two 1s" or 21.
- 21 is read off as "one 2, then one 1" or 1211.

Given an integer n, generate the nth term of the count-and-say sequence.

Note: Each term of the sequence of integers will be represented as a string.

Example 1:

```
Input: 1
Output: "1"
```

Example 2:

```
Input: 4
Output: "1211"
```
*/
var countAndSay = function (n) {
    if (n === 1) {
        return '1';
    }
    var say = function (str) {
        let idx = 0;
        let newStr = '';
        while (idx < str.length) {
            let occurrences = 1;
            while (str[idx + 1] && str[idx + 1] === str[idx]) {
                idx++;
                occurrences++;
            }
            newStr += occurrences + str[idx];
            idx++;
        }
        return newStr;
    }
    return say(countAndSay(n - 1));
};

//console.log(countAndSay(1));
//console.log(countAndSay(4));




/**
## Shuffle an Array
  
Shuffle a set of numbers without duplicates.

Example:

// Init an array with set 1, 2, and 3.
int[] nums = {1,2,3};
Solution solution = new Solution(nums);

// Shuffle the array [1,2,3] and return its result. Any permutation of [1,2,3] must equally likely to be returned.
solution.shuffle();

// Resets the array back to its original configuration [1,2,3].
solution.reset();

// Returns the random shuffling of array [1,2,3].
solution.shuffle();
 */
/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
    this.initialVal = [].concat(nums);
    this.nums = nums;
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function () {
    return this.initialVal;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
    let temp = [];
    this.nums.forEach((val, key) => temp[key] = val);
    for (let i = 0; i < temp.length; i++) {
        let rand = Math.floor(Math.random() * (temp.length - i))
        //console.log(rand);
        let n = temp[i];
        temp[i] = temp[rand];
        temp[rand] = n;
    }

    return temp;
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = Object.create(Solution).createNew(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 * 
 */
var obj = new Solution([1, 2, 3])
var param_1 = obj.reset()
var param_2 = obj.shuffle()

console.log(param_1, param_2);
/**
 * 
//Variables to manage the queue.
Data: Queue[<queue size>]
Integer: Next = 0
Integer: Last = 0

// Enqueue an item.
Enqueue(Data: value)
    // Make sure there's room to add an item.
    If ((Next + 1) Mod <queue size> == Last) Then <throw an exception>

    Queue[Next] = value
    Next = (Next + 1) Mod <queue size>
End Enqueue


 */



/**
 * 
 * Initialize your data structure here. Set the size of the queue to be k.
 * @param {number} k
 */
var MyCircularQueue = function (k) {
    this.queue = [];
    this.reset = function () {
        this.tail = -1;
        this.head = -1;
    };
    this.reset();
    this.maxSize = k || Queue.MAX_SIZE;
    this.increment = function (number) {
        return (number + 1) % this.maxSize;
    };
};

MyCircularQueue.MAX_SIZE = Math.pow(2, 53) - 1;
/**
 * Insert an element into the circular queue. Return true if the operation is successful. 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function (value) {
    if (this.isFull()) {
        return false;
        // throw new Error("Queue is full can't add new records");
    }

    if (this.isEmpty()) {
        this.head = this.increment(this.head);
    }
    this.tail = this.increment(this.tail);
    this.queue[this.tail] = value;

    return true;
};

/**
 * Delete an element from the circular queue. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function () {
    if (this.isEmpty()) {
        //throw new Error("Can't remove element from an empty Queue");
        return false;
    }

    // removing from the begining of the head
    var removedRecord = this.queue[this.head];
    this.queue[this.head] = null;

    if (this.tail === this.head) {
        this.reset();
    } else {
        // if there are more records increase head.	
        this.head = this.increment(this.head);
    }

    return removedRecord;
};

/**
 * Get the front item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Front = function () {
    //return this.queue[this.head] || 0;
    return this.isEmpty() ? -1 : this.queue[this.head];
};

/**
 * Get the last item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function () {
    //return this.queue[this.tail] || 0;
    return this.isEmpty() ? -1 : this.queue[this.tail];
};

/**k
 * Checks whether the circular queue is empty or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function () {
    return this.tail === -1 && this.head === -1;
};

/**
 * Checks whether the circular queue is full or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function () {
    return this.increment(this.tail) === this.head;
};


MyCircularQueue.prototype.print = function () {
    for (var i = this.head; i <= this.tail; i++) {
        console.log(i, this.queue[i]);
    }
};

/** 
 * Your MyCircularQueue object will be instantiated and called as such:
 */
var obj = new MyCircularQueue(5);

console.log(obj.enQueue(1));
console.log(obj.enQueue(2));
console.log(obj.enQueue(3));

console.assert(obj.Rear() === 3, 'returns last item');
console.log(obj.data);




console.assert(obj.enQueue(4));
console.assert(obj.enQueue(5));
obj.print();

console.assert(!obj.isEmpty());
console.assert(obj.isFull());


//console.assert(obj.Rear() === 4, 'returns last item');
console.log(obj.data);

obj.deQueue();
obj.deQueue();
obj.deQueue();
obj.deQueue();
obj.deQueue();

obj.print();

console.log(obj.Front());
console.log(obj.Rear());


class Stack {
    constructor() {
        this._size = 0;
        this._storage = {};
    }
    size() {
        return this._size;
    }
    peek() {
        return this._storage[this._size - 1];
    }
    isEmpty() {
        return this._size === -1;
    }
    push(data) {
        const size = ++this._size;
        this._storage[size] = data;
    }
    pop() {
        const size = this._size;
        let deletedData;

        if (size) {
            deletedData = this._storage[size];

            delete this._storage[size];
            this._size--;


            return deletedData;
        }
    }
}



const s = new Stack();
s.push(1);
s.push(2);
s.push(3);
s.push(4);
s.push(5);
s.push(6);
console.assert(s.size() === 6);

console.log(s);

s.pop();
s.pop();
s.pop();
s.pop();
console.log(s);
//console.log(s.size());
//console.log(s.peek());
//console.log(s.isEmpty());

/**
 ReverseArray(Data: values[])
    // Push the values from the array onto the stack.
    Stack: stack = New Stack
    For i = 0 To <length of values> - 1
        stack.Push(values[i])
    Next i


    // Pop the items off the stack into the array.
    For i = 0 To <length of values> - 1
        values[i] = stack.Pop()
    Next i
End ReverseArray
 */

function reverseArray(arr) {
    //push values onto stack
    let stack = new Stack();
    let len = arr.length;

    arr.forEach((item, index) => {
        stack.push(item);
    });
    console.log(stack);


    //pop the items off stack into the array

    for (let i = 0; i < stack.size() - 1; i++) {
        arr[i] = stack.pop();
    }


    console.log(stack.size());
    console.log(stack);
    return arr;
}




console.log(reverseArray([1, 2, 3]));



function reverseArray2(array) {
    let i = 0;
    let j = array.length - 1;
    for (; i < array.length; i++) {
        const val = array[i];
        const val2 = array[j];
        [array[j]] = [array[i]]

        console.log(val, i, j);
        j--;

    }

    return array;
}


let testArray = [9, 3, 5, 7, 4, 8, 6, 2, 1, 10, 0, 4, 123, 4, 4, 8, 7];


let j = testArray.length - 1;
for (let i = 0; i < testArray.length; i++) {
    const v1 = testArray[i];
    const v2 = testArray[j];
    let tmp = testArray[i];
    //console.log(i, v1, j, v2);
    testArray[j] = v2
    testArray[i] = tmp;
    j--;
}


//Find min value
let minVal = testArray[0];
console.log(testArray.length);
for (let index = 0; index < testArray.length; index++) {
    console.log(index)
    if (testArray[index] <= minVal) {
        minVal = testArray[index];
    }
}
console.log(minVal);


//Find Max
let maxVal = testArray[0];
console.log(testArray.length);
for (let index = 0; index < testArray.length; index++) {
    console.log(index)
    if (testArray[index] > maxVal) {
        maxVal = testArray[index];
    }
}
console.log(maxVal);


//Find average
let sum = 0;
for (let index = 0; index < testArray.length; index++) {
    sum = sum + testArray[index];
}
let average = Math.floor(sum / testArray.length);
console.log(average);


console.log(testArray.length);
console.log(testArray);
//console.log(reverseArray2([1, 2, 3]));