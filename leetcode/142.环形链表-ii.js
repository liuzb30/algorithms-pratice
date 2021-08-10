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
// 假设快慢指针在x秒相遇，此时快指针：2x - l =  m*s + y,慢指针：x - l = n*s + y。 l = (m-2n)s - y 。而慢指针从这时开始走l步，相当于走了m-2n圈，再减掉y刚好是环起点的位置。
var detectCycle = function (head) {
  if (head == null || head.next == null) return null

  let slow = head, fast = head.next
  while (fast.next && fast.next.next) {
    slow = slow.next
    fast = fast.next.next
    if (slow === fast) {
      let p = new ListNode()
      p.next = head
      while (p !== slow) {
        slow = slow.next
        p = p.next
      }
      return p
    }
  }
  return null
}
// @lc code=end
