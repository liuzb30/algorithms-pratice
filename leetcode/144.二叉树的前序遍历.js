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
var preorderTraversal = function (root) {
  let result = []
  const preorder = (node) => {
    if (node == null) return
    result.push(node.val)
    preorder(node.left)
    preorder(node.right)
  }
  preorder(root)
  return result
}
// 迭代
var preorderTraversal = function (root) {
  if (root == null) return []
  let res = [], stack = []
  stack.push(root)
  while (stack.length) {
    let node = stack.pop()
    res.push(node.val)
    // 利用栈后进先出的特点，右孩子先进栈
    if (node.right) stack.push(node.right)
    if (node.left) stack.push(node.left)
  }
  return res
}

// @lc code=end
