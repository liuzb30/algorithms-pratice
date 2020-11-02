/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
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
var detectCycle1 = function (head) {
  let cache = new Set();
  while (head) {
    if (cache.has(head)) {
      return head;
    } else {
      cache.add(head);
    }
    head = head.next;
  }
  return null;
};
var detectCycle = function (head) {
  if (!head || !head.next) {
    return null;
  }
  let slow = head;
  let fast = head;
  let start = head;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
    if (fast === slow) {
      while (start && slow) {
        if (start === slow) {
          return start;
        }
        start = start.next;
        slow = slow.next;
      }
    }
  }

  return null;
};
// @lc code=end
