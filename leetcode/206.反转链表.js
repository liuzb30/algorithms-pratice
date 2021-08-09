/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
 * @return {ListNode}
 */
// var reverseList = function (head) {
//   if (head == null || head.next == null) return head
//   let next = reverseList(head.next)
//   head.next.next = head
//   head.next = null
//   return next
// }

var reverseList = function (head) {
  let reverse = function (pre, cur) {
    if (!cur) return pre
    let next = cur.next
    cur.next = pre
    return reverse(cur, next)
  }
  return reverse(null, head)
};





// var reverseList = function (head) {
//   let pre = null
//   let current = head
//   while (current) {
//     let next = current.next
//     current.next = pre
//     pre = current
//     current = next
//   }
//   return pre
// };

// var reverseList = function (head) {
//   function reverse(node) {
//     if (!node || !node.next) {
//       return node
//     }
//     let next = reverse(node.next)
//     node.next.next = node
//     node.next = null
//     return next
//   }
//   return reverse(head)
// }
// @lc code=end
