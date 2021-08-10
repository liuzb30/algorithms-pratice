/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
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
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
// var reverseBetween = function (head, left, right) {
//     //  递归反转函数
//     let reverse = (pre, cur) => {
//         if (!cur) return pre
//         let next = cur.next
//         cur.next = pre
//         return reverse(cur, next)
//     }
//     let count = right - left
//     let start, end, front, tail
//     let p = dummyHead = new ListNode()
//     p.next = head
//     for (let i = 0; i < left - 1; i++) {
//         p = p.next
//     }

//     front = p
//     start = p.next
//     for (let i = left - 1; i < right; i++) {
//         p = p.next
//     }
//     end = p
//     tail = end.next
//     end.next = null
//     front.next = reverse(null, start)
//     start.next = tail
//     return dummyHead.next

// };

// 思路：先不考虑边界问题，首先遍历到left的前一个节点，把它赋值给front，然后把left节点赋值给pre和tail,为什么要赋值给tail，因为第一个节点反转后是最后一个节点，需要跟后面的节点连接起来。最后就是正常的反转流程。
// 边界问题，当left是1的时候，就不能返回head，需要返回right节点。所以，我们可以考虑用一个假的head，让它的next指向head，这样就可以解决边界问题了
var reverseBetween = function (head, left, right) {
    const count = right - left
    let pre, cur, front, tail
    let p = dummyHead = new ListNode()
    p.next = head
    // 遍历
    for (let i = 0; i < left - 1; i++) {
        p = p.next
    }
    front = p
    pre = tail = p.next
    cur = pre.next
    // 反转
    for (let i = 0; i < count; i++) {
        let next = cur.next
        cur.next = pre
        pre = cur
        cur = next
    }
    // 当前pre指向right节点，cur指向right的下一个节点
    front.next = pre
    tail.next = cur
    return dummyHead.next
};
// @lc code=end

