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
// 思路：利用set数据结构来保存节点，遍历节点，如果set已经存在了，则表示该节点为环的起点，不存在则无环。
// var detectCycle = function (head) {
//   const cache = new Set()
//   let p = head
//   while (p) {
//     if (cache.has(p)) return p
//     cache.add(p)
//     p = p.next
//   }
//   return null
// }
// 思路：利用快慢指针，当快慢指针相遇的时候，再弄一个新的指针从head开始走，慢指针也开始走，当新指针和慢指针相遇的时候就是环的起点。
// 设链表共有 a+b 个节点，其中 链表头部到链表入口 有 a 个节点（不计链表入口节点）， 链表环 有 b 个节点
// 设两指针分别走了 f，s 步，fast比slow多走了n个环
// f=2s  f=s+nb  s=nb
// 走到入口点的步数k = nb + a 
// 所以慢指针再走a步就到入口点
var detectCycle = function (head) {
  if (!head || !head.next) return null;
  let slow = head.next, fast = head.next.next;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (fast == slow) {
      slow = head;
      while (fast !== slow) {
        slow = slow.next;
        fast = fast.next;
      }
      return slow;
    }
  }
  return null;
}
var detectCycle = function (head) {
  let slow = fast = head
  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
    if (slow === fast) {
      slow = head
      while (fast !== slow) {
        slow = slow.next
        fast = fast.next
      }
      return slow
    }
  }
  return null
}
// @lc code=end
