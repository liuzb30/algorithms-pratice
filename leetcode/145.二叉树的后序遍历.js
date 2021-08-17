/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
var postorderTraversal = function (root) {
  const res = []
  const traverse = (node) => {
    if (node == null) return
    traverse(node.left)
    traverse(node.right)
    res.push(node.val)
  }
  traverse(root)
  return res
}
var postorderTraversal = function (root) {
  let res = [], stack = [], visited = new Set()
  let p = root
  while (p || stack.length) {
    while (p) {
      stack.push(p)
      p = p.left
    }
    // 获取栈顶元素
    let node = stack[stack.length - 1]
    // 判断是否有右节点且没访问过
    if (node.right && !visited.has(node.right)) {
      p = node.right
      visited.add(p)
    } else {
      node = stack.pop()
      res.push(node.val)
    }
  }
  return res
}
// @lc code=end
