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
// var inorderTraversal = function (root) {
//   let result = [];
//   let stack = [];
//   let cur = root;
//   while (cur || stack.length) {
//     while (cur) {
//       stack.push(cur);
//       cur = cur.left;
//     }
//     cur = stack.pop();
//     result.push(cur.val);
//     cur = cur.right;
//   }
//   return result;
// };
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
var inorderTraversal = function (root) {
  const res = [], stack = []
  let p = root
  while (p || stack.length) {
    while (p) {
      stack.push(p)
      p = p.left
    }
    let node = stack.pop()
    res.push(node.val)
    p = node.right
  }
  return res
}
// @lc code=end
