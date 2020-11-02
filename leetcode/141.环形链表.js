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
// var hasCycle1 = function (head) {
//   let cache = new Set();
//   while (head) {
//     if (cache.has(head)) {
//       return true;
//     } else {
//       cache.add(head);
//     }
//     head = head.next;
//   }
//   return false;
// };
var hasCycle = function (head) {
  if (!head || !head.next) {
    return false;
  }
  let fast = head.next.next;
  let slow = head.next;
  while (fast && fast.next) {
    if (slow.val === fast.val) {
      return true;
    }
    slow = slow.next;
    fast = fast.next.next;
  }
  return false;
};
// @lc code=end
