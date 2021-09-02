/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
// var preorderTraversal = function (root) {
//   let result = []
//   const dfs = (node) => {
//     if (node == null) return
//     result.push(node.val)
//     dfs(node.left)
//     dfs(node.right)
//   }
//   dfs(root)
//   return result
// }
// 迭代
// var preorderTraversal = function (root) {
//   if (root == null) return []
//   let res = [], stack = [root]
//   while (stack.length) {
//     let node = stack.pop()
//     res.push(node.val)
//     node.right && stack.push(node.right)
//     node.left && stack.push(node.left)
//   }
//   return res
// }
var preorderTraversal = function (root) {
  if (!root) return []
  const stack = [root]
  const res = []
  while (stack.length) {
    const node = stack.pop()
    if (!node) {
      res.push(stack.pop().val)
      continue
    }
    node.right && stack.push(node.right)
    node.left && stack.push(node.left)
    stack.push(node)
    stack.push(null)
  }
  return res
}

// @lc code=end
