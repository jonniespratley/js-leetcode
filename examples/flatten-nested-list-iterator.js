/*
Given a nested list of integers, implement an iterator to flatten it.

Each element is either an integer, or a list -- whose elements may also be integers or other lists.

Example 1:

```
Input: [[1,1],2,[1,1]]
Output: [1,1,2,1,1]
Explanation: By calling next repeatedly until hasNext returns false, 
             the order of elements returned by next should be: [1,1,2,1,1].

```

Example 2:

```
Input: [1,[4,[6]]]
Output: [1,4,6]
Explanation: By calling next repeatedly until hasNext returns false, 
             the order of elements returned by next should be: [1,4,6].
```
*/
/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */

/**
 * @constructor
 * @param {NestedInteger[]} nestedList
 */
var NestedIterator = function (nestedList) {
    this.stack = [];

    for (var i = nestedList.length; i--;) {
        this.stack.push(nestedList[i]);
    }
};


/**
 * @this NestedIterator
 * @returns {boolean}
 */
NestedIterator.prototype.hasNext = function () {
    // keep looping until we found insert an integer in the stack
    while (this.stack.length > 0) {
        var next = this.stack[this.stack.length - 1];
        if (next.isInteger()) {
            return true;
        }

        this.stack.pop();
        var list = next.getList();
        for (var i = list.length; i--;) {
            this.stack.push(list[i]);
        }
    }

    return false;
};

/**
 * @this NestedIterator
 * @returns {integer}
 */
NestedIterator.prototype.next = function () {
    return this.stack.pop();
};


var NestedIterator2 = function (nestedList) {
    var list = [];
    this.curr = 0;
    var flattenList = function (nestedList) {
        for (var i = 0; i < nestedList.length; i++) {
            if (nestedList[i].isInteger()) {
                list.push(nestedList[i].getInteger());
            } else {
                flattenList(nestedList[i].getList());
            }
        }
    }
    flattenList(nestedList);
    this.list = list;
};


/**
 * @this NestedIterator
 * @returns {boolean}
 */
NestedIterator.prototype.hasNext = function () {
    if (this.list[this.curr] !== undefined) return true;
    return false;
};

/**
 * @this NestedIterator
 * @returns {integer}
 */
NestedIterator.prototype.next = function () {
    if (this.curr < this.list.length) return this.list[this.curr++];
    return null;
};





/**
 * Your NestedIterator will be called like this:
 
*/
let nestedList = [
    [1, 1], 2, [1, 1]
];
var i = new NestedIterator(nestedList),
    a = [];
while (i.hasNext()) a.push(i.next());

console.log(a);