/*
 * @lc app=leetcode.cn id=543 lang=javascript
 *
 * [543] 二叉树的直径
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
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
    const help = (node) => {
        if (node == null) return 0
        let left = help(node.left)
        let right = help(node.right)
        max = Math.max(left + right, max)
        return Math.max(left, right) + 1
    }
    let max = 0
    help(root)
    return max
};
// @lc code=end

