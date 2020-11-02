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
var reverseList = function (head) {
  function reverse(node) {
    if (!node || !node.next) {
      return node;
    }
    // 找到最终的节点
    let next = reverse(node.next);
    // 把下个节点的next指向当前节点，当前节点的next指向null
    node.next.next = node;
    node.next = null;
    return next;
  }

  return reverse(head);
};
// @lc code=end
