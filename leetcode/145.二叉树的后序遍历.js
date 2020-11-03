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
class Tag {
  constructor(node, status) {
    this.node = node;
    this.status = status; // 0表示左边已经遍历结束,1表示右边已经遍历结束
  }
}
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {
  let cur = root;
  let stack = [];
  let result = [];

  while (cur || stack.length) {
    while (cur) {
      let tag = new Tag(cur, 0);
      stack.push(tag);
      cur = cur.left;
    }
    tag = stack.pop();
    if (tag.node.right && tag.status === 0) {
      tag.status = 1; // 标记已经访问
      stack.push(tag);
      cur = tag.node.right;
    } else {
      result.push(tag.node.val);
    }
  }
  return result;
};
// @lc code=end
