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
//   let pre = null, cur = head
//   while (cur) {
//     let next = cur.next
//     cur.next = pre
//     pre = cur
//     cur = next
//   }
//   return pre
// }

var reverseList = function (head) {
  const reverse = (pre, cur) => {
    if (!cur) return pre
    let next = cur.next
    cur.next = pre
    return reverse(cur, next)
  }
  return reverse(null, head)
}

var reverseList = function (head) {
  const reverse = (node) => {
    if (!node || !node.next) return node
    // 找到尾节点
    let tail = reverse(node.next)
    // 修改节点的next指向
    node.next.next = node
    node.next = null
    return tail
  }
  return reverse(head)
}


// @lc code=end
