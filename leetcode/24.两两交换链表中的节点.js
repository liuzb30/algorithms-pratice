/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
    if (head == null || head.next == null) return head
    let node1 = head, node2 = head.next
    node1.next = swapPairs(node2.next)
    node2.next = node1
    return node2
};

// var swapPairs = function (head) {
//     if (head == null || head.next == null) return head
//     let node1, node2
//     let p = dummyHead = new ListNode()
//     p.next = head

//     while ((node1 = p.next) && (node2 = p.next.next)) {
//         node1.next = node2.next
//         node2.next = node1
//         p.next = node2
//         p = node1
//     }

//     return dummyHead.next

// };
// @lc code=end

