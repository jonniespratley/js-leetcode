function ListNode(val) {
    this.val = val;
    this.next = null;
}
/*
## Add Two Numbers

You are given two non-empty linked lists representing two non-negative integers. 
The digits are stored in reverse order and each of their nodes contain a single digit.
Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example:
```
Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
```

*/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {

    function listToArray(list){
        let out = [];
        let thisNode = list.head || list;
        while (thisNode) {
            out.push(thisNode.val);
            thisNode = thisNode.next;
        }
        return out;
    }
    let array1 = listToArray(l1);
    let array2 = listToArray(l2);
    let sumArray = [];
    
    for (let i = 0; i < array1.length; i++) {
        const n1 = array1[i];
        const n2 = array2[i];
        let sum = Math.floor((n1 + n2));
        let carry = (sum > 9);
        sumArray[i] = Math.floor((sum) % 10) + (carry ? 1 : 0);
        //sumArray[i] = `${Math.floor(n1 + n2)}`.replace(/0+/, '');
    }
    console.log(sumArray);
    return sumArray;
};

var addTwoNumbers2 = function(listOne, listTwo, addOne = false) {
    if (!listOne && !listTwo) {
        return addOne ? new ListNode(1) : null;
    }
    const sum = (listOne ? listOne.val : 0) + (listTwo ? listTwo.val : 0) + (addOne ? 1 : 0);
    const node = new ListNode(sum % 10);
    node.next = addTwoNumbers(listOne ? listOne.next : null, listTwo ? listTwo.next : null, sum > 9);
    return node;
};

const list1 = {
    val: 2,
    next: {
        val: 4,
        next: {
            val: 3,
            next: null
        }
    }
};
const list2 = {
    val: 5,
    next: {
        val: 6,
        next: {
            val: 4,
            next: null
        }
    }
}

console.log(addTwoNumbers(list1, list2));
console.log(addTwoNumbers2(list1, list2));





class LinkedList {
    constructor(...values) {
        this.head = null;
        this.length = 0;
        this.addToHead(...values);
    }
    _addSingleItemToHead(value) {
        const newNode = { value };
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }
    addToHead(...values) {
        values.forEach(value => this._addSingleItemToHead(value));
        return this;
    }
    find(val) {
        let thisNode = this.head;
        while (thisNode) {
            if (thisNode.value === val) {
                return thisNode;
            }
            thisNode = thisNode.next;
        }

        return thisNode;
    }
    remove(val) {
        if(this.length === 0) {
            return undefined;
        }
        
        if (this.head.value === val) {
            this.removeFromHead();
            return this;
        }
        
        let previousNode = this.head;
        let thisNode = previousNode.next;
        
        while(thisNode) {
            if(thisNode.value === val) {
                break;
            }
            
            previousNode = thisNode;
            thisNode = thisNode.next;
        }
        
        if (thisNode === null) {
            return undefined;
        }
        
        previousNode.next = thisNode.next;
        this.length--;
        return this;
    }
}
const list = new LinkedList(1, 2, 3, 4);
console.log(list)
console.log(list.find(2));