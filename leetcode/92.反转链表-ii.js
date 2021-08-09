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


var reverseBetween = function (head, left, right) {
    let pre, cur, front, tail;
    let p = dummyHead = new ListNode()
    let count = right - left

    p.next = head
    for (let i = 0; i < left - 1; i++) {
        p = p.next
    }
    // 保存首节点
    front = p
    pre = tail = p.next
    cur = pre.next

    for (let i = 0; i < count; i++) {
        let next = cur.next
        cur.next = pre
        pre = cur
        cur = next
    }

    front.next = pre
    tail.next = cur

    return dummyHead.next
};
// @lc code=end

