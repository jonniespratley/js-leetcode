/*
## Delete Node in a Linked List

Write a function to delete a node (except the tail) in a singly linked list, given only access to that node.

Given linked list -- head = [4,5,1,9], which looks like following:
```
    4 -> 5 -> 1 -> 9
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
 * // Since we do not have access to the node before the one we want to delete, we cannot modify the next pointer of that node in any way.
// Instead, we have to replace the value of the node we want to delete with the value in the node after it, and then delete the node after it.
// Because we know that the node we want to delete is not the tail of the list, we can guarantee that this approach is possible.

 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function (node) {
    node.val = node.next.val;
    node.next = node.next.next;
};