/*
 * @lc app=leetcode.cn id=230 lang=javascript
 *
 * [230] 二叉搜索树中第K小的元素
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
 * @param {number} k
 * @return {number}
 */
// 递归
var kthSmallest1 = function (root, k) {
  // 用中序遍历，把元素都放到数组中，取第k个
  let arr = [];
  function inOrder(root) {
    if (!root) return;
    inOrder(root.left);
    arr.push(root.val);
    inOrder(root.right);
  }
  inOrder(root);
  console.log(arr);
  return arr[k - 1];
};
// 迭代
var kthSmallest = function (root, k) {
  let current = root;
  let stack = [];
  let index = 0;

  while (current || stack.length) {
    while (current) {
      stack.push(current);
      current = current.left;
    }
    current = stack.pop();
    console.log(current.val);
    index++;
    if (index === k) return current.val;
    current = current.right;
  }
};
// @lc code=end
