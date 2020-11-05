/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
 * @return {number}
 */
// 递归
var maxDepth1 = function (root) {
  if (!root) {
    return 0;
  }
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};
// 广度优先
var maxDepth = function (root) {
  if (!root) {
    return 0;
  }
  let queue = [];
  queue.push(root);
  let result = 0;
  while (queue.length) {
    let size = queue.length;
    // 遍历当前队列的节点，并把节点出队列，把子节点入队列
    while (size > 0) {
      let node = queue.shift();
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
      size--;
    }
    result++;
  }
  return result;
};
// @lc code=end
