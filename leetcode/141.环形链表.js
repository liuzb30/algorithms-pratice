/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
// 思路：循环一遍，用set数据结构来保存节点，利用节点的内存地址来进行判重，如果相同则表明有环
// var hasCycle = function (head) {
//   let p = head
//   let s = new Set()
//   while (p) {
//     if (s.has(p)) return true
//     s.add(p)
//     p = p.next
//   }
//   return false
// }
// 思路：利用快慢指针，快指针一次走两步，慢指针一次走一步，如果两者相遇则形成环。
var hasCycle = function (head) {
  if (head == null || head.next == null) return false
  let slow = head, fast = head.next
  while (fast.next && fast.next.next) {
    slow = slow.next
    fast = fast.next.next
    if (slow === fast) return true
  }
  return false
}
// @lc code=end
