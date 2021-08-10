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
// 递归思路:判断长度是否大于k，如果没有则返回head，有则反转，把head节点指向下一组的head节点，然后返回当前组的尾节点。
var reverseKGroup = function (head, k) {
    let pre = null, cur = head
    // 判断长度
    let p = head
    for (let i = 0; i < k; i++) {
        if (p == null) return head
        p = p.next
    }
    // 反转
    for (let i = 0; i < k; i++) {
        let next = cur.next
        cur.next = pre
        pre = cur
        cur = next
    }
    head.next = reverseKGroup(cur, k)
    return pre
}

// 循环思路：先算出总长度，如果长度小于k，则直接返回head；如果长度大于k，则算出需要循环的次数。在循环每个组的最后，要把首尾节点连接起来。
var reverseKGroup = function (head, k) {

    // 判断长度
    let count = 0
    for (let p = head; p != null; p = p.next) {
        if (p == null && count < k) return head
        count++
    }
    const loopCount = Math.floor(count / k)
    let p = dummyHead = new ListNode()
    dummyHead.next = head
    // 反转
    for (let i = 0; i < loopCount; i++) {
        let pre = p, cur = p.next
        for (let j = 0; j < k; j++) {
            let next = cur.next
            cur.next = pre
            pre = cur
            cur = next
        }
        let start = p.next
        p.next = pre
        start.next = cur
        p = start
    }

    return dummyHead.next

}
// @lc code=end

