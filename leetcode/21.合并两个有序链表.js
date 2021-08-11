/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// var mergeTwoLists = function (l1, l2) {
//     let p = dummyHead = new ListNode()
//     while (l1 && l2) {
//         if (l1.val > l2.val) {
//             p.next = l2
//             p = p.next
//             l2 = l2.next
//         } else {
//             p.next = l1
//             p = p.next
//             l1 = l1.next
//         }
//     }
//     if (l2) p.next = l2
//     if (l1) p.next = l1
//     return dummyHead.next
// };

var mergeTwoLists = function (l1, l2) {
    if (l1 == null) return l2
    if (l2 == null) return l1
    if (l1.val > l2.val) {
        l2.next = mergeTwoLists(l1, l2.next)
        return l2
    } else {
        l1.next = mergeTwoLists(l1.next, l2)
        return l1
    }
}
// @lc code=end

