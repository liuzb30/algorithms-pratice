/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
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
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
    let count = 0;
    // 看能否构成一组，并统计链表元素个数
    for (let p = head; p != null; p = p.next) {
        if (p == null && count < k) return head
        count++
    }

    let loopCount = Math.floor(count / k)
    let p = dummyHead = new ListNode()
    dummyHead.next = head

    for (let i = 0; i < loopCount; i++) {
        let pre = null, cur = p.next
        for (let j = 0; j < k; j++) {
            let next = cur.next
            cur.next = pre
            pre = cur
            cur = next
        }
        // 当前pre为该组的尾节点，cur为下一组首节点
        let start = p.next;
        p.next = pre
        start.next = cur
        p = start
    }
    return dummyHead.next
}
// var reverseKGroup = function (head, k) {
//     let pre = null, cur = head;
//     let p = head;
//     // 检验后面的元素能否组成一组
//     for (let i = 0; i < k; i++) {
//         if (p == null) return head
//         p = p.next
//     }
//     // 翻转当前组
//     for (let i = 0; i < k; i++) {
//         let next = cur.next
//         cur.next = pre
//         pre = cur
//         cur = next
//     }
//     // pre为本组最后一个节点，cur为下一组的起点
//     head.next = reverseKGroup(cur, k)
//     return pre
// };
// var reverseKGroup = function (head, k) {
//     // 从后往前处理，所以要找到下一组的头节点
//     let cur = head
//     let count = 0
//     while (cur && count !== k) {
//         cur = cur.next
//         count++
//     }
//     // 有下一组才处理
//     if (count === k) {
//         cur = reverseKGroup(cur, k)
//         // 反转当前组
//         while (count) {
//             let tmp = head.next
//             head.next = cur
//             cur = head
//             head = tmp
//             count--
//         }
//         head = cur
//     }
//     return head
// };
// @lc code=end

