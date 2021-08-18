/*
 * @lc app=leetcode.cn id=236 lang=javascript
 *
 * [236] 二叉树的最近公共祖先
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
// 祖先节点集合法
var lowestCommonAncestor = function (root, p, q) {
  let stack = [root], parentsMap = new WeakMap(), pSet = new Set()
  // 遍历二叉树获取所有节点的父节点
  while (stack.length) {
    const node = stack.pop()
    if (node.left) {
      stack.push(node.left)
      parentsMap.set(node.left, node)
    }
    if (node.right) {
      stack.push(node.right)
      parentsMap.set(node.right, node)
    }
  }
  // 获取p节点的祖先集合
  while (p) {
    pSet.add(p, 1)
    p = parentsMap.get(p)
  }
  while (q) {
    if (pSet.has(q)) return q
    q = parentsMap.get(q)
  }
}
// 递归
var lowestCommonAncestor = function (root, p, q) {
  if (root == null || root == p || root == q) return root
  let left = lowestCommonAncestor(root.left, p, q)
  let right = lowestCommonAncestor(root.right, p, q)
  if (left == null) return right
  if (right == null) return left
  return root
}
// @lc code=end
