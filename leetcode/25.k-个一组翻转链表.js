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
    // 从后往前处理，所以要找到下一组的头节点
    let cur = head
    let count = 0
    while (cur && count !== k) {
        cur = cur.next
        count++
    }
    // 有下一组才处理
    if (count === k) {
        cur = reverseKGroup(cur, k)
        // 反转当前组
        while (count) {
            let tmp = head.next
            head.next = cur
            cur = head
            head = tmp
            count--
        }
        head = cur
    }
    return head
};
// @lc code=end

