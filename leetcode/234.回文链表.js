/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
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
 * @return {boolean}
 */
var isPalindrome = function (head) {
    if (head == null || head.next == null) return true
    let fast = slow = head
    let prev
    while (fast && fast.next) {
        prev = slow
        slow = slow.next
        fast = fast.next.next
    }
    // 断开链表
    prev.next = null
    // 反转链表
    let head2 = null
    while (slow) {
        const next = slow.next
        slow.next = head2
        head2 = slow
        slow = next
    }
    // 比较
    while (head && head2) {
        if (head.val !== head2.val) return false
        head = head.next
        head2 = head2.next
    }
    return true
};
// @lc code=end

