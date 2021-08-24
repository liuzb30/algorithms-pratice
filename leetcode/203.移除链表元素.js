/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
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
 * @param {number} val
 * @return {ListNode}
 */
// 设置一个虚拟头结点
var removeElements = function (head, val) {
    if (!head) return null
    let cur = dummyHead = new ListNode(0, head)
    while (cur && cur.next) {
        if (cur.next.val === val) {
            cur.next = cur.next.next
        } else {
            cur = cur.next
        }
    }
    return dummyHead.next
};

// 在原来链表操作
var removeElements = function (head, val) {
    while (head && head.val === val) {
        head = head.next
    }
    let cur = head
    while (cur && cur.next) {
        if (cur.next.val === val) {
            cur.next = cur.next.next
        } else {
            cur = cur.next
        }
    }
    return head
}
// @lc code=end

