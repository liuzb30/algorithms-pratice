/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// 中序遍历
//  var isValidBST = function (root) {
//   let prev == null
//   const help = (node) => {
//     if (node == null) return true
//     if (!help(node.left)) return false
//     if (prev != null && prev.val >= node.val) return false
//     prev = node
//     return help(node.right)
//   }
//   return help(root)
// }
// 限定上下界进行DFS
// var isValidBST = function (root) {
//   const help = (node, max, min) => {
//     if (node == null) return true
//     if (node.val <= min || node.val >= max) return false
//     return help(node.left, node.val, min) && help(node.right, max, node.val)
//   }
//   return help(root, Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER)
// };
var isValidBST = function (root) {
  if (root == null) return true
  let max = Number.MAX_SAFE_INTEGER, min = Number.MIN_SAFE_INTEGER
  let stack = [root]
  root.max = max
  root.min = min
  while (stack.length) {
    const node = stack.pop()
    if (node.val <= node.min || node.val >= node.max) return false
    if (node.left) {
      stack.push(node.left)
      node.left.min = node.min
      node.left.max = node.val
    }
    if (node.right) {
      stack.push(node.right)
      node.right.min = node.val
      node.right.max = node.max
    }
  }
  return true
}
// @lc code=end
