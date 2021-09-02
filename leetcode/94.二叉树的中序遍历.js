/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// 递归
var inorderTraversal = function (root) {
  const result = []
  const traverse = (node) => {
    if (node == null) return
    traverse(node.left)
    result.push(node.val)
    traverse(node.right)
  }
  traverse(root)
  return result
}

// 迭代
// var inorderTraversal = function (root) {
//   const res = [], stack = []
//   let p = root
//   while (p || stack.length) {
//     while (p) {
//       stack.push(p)
//       p = p.left
//     }
//     let node = stack.pop()
//     res.push(node.val)
//     p = node.right
//   }
//   return res
// }
// var inorderTraversal = function (root) {
//   let res = [], stack = []
//   let cur = root
//   while (cur || stack.length) {
//     if (cur) {
//       stack.push(cur)
//       cur = cur.left
//     } else {
//       cur = stack.pop()
//       res.push(cur.val)
//       cur = cur.right
//     }
//   }
//   return res
// }
var inorderTraversal = function (root) {
  if (!root) return []
  const res = [], stack = [root]
  while (stack.length) {
    const node = stack.pop()
    if (!node) {
      res.push(stack.pop().val)
      continue
    }
    node.right && stack.push(node.right)
    stack.push(node)
    stack.push(null)
    node.left && stack.push(node.left)
  }
  return res
}
// @lc code=end
