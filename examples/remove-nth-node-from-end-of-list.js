/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    if (!head) return head;

    let p1 = head;
    let p2 = head
    while (n--) {
        if (p2 === null) return null
        p2 = p2.next
    }
    while (p1 && p2.next) {
        p1 = p1.next
        p2 = p2.next
    }
    let removed = p1.next
    p1.next = removed.next
    removed.next = null
    return head
};

const removeNthFromEnd2 = function (head, n) {
    if (!head) return head;

    let prev = head;
    let curr = head.next;

    while (curr) {
        if (n > 0) {
            n -= 1;
        } else {
            prev = prev.next;
        }
        curr = curr.next;
    }

    if (n === 1) return head.next;

    prev.next = prev.next.next || null;
    return head;
};