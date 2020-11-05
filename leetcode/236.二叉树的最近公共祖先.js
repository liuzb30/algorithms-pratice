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
// 这个函数的功能是
// 给定两个节点 p 和 q
// 如果 p 和 q 都存在，则返回它们的公共祖先；
// 如果只存在一个，则返回存在的一个；
// 如果 p 和 q 都不存在，则返回NULL
var lowestCommonAncestor = function (root, p, q) {
  if (!root || root === p || root === q) {
    return root;
  }
  let left = lowestCommonAncestor(root.left, p, q);
  let right = lowestCommonAncestor(root.right, p, q);
  if (!left) {
    return right;
  } else if (!right) {
    return left;
  }
  return root;
};
// @lc code=end
