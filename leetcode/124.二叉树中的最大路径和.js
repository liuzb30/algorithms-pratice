/*
 * @lc app=leetcode.cn id=124 lang=javascript
 *
 * [124] 二叉树中的最大路径和
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
var maxPathSum = function (root) {
    const help = (node) => {
        if (node == null) return 0
        let left = Math.max(help(node.left), 0)
        let right = Math.max(help(node.right), 0)
        max = Math.max(left + right + node.val, max)
        // 返回当前节点的最大路径
        return Math.max(left, right) + node.val
    }
    let max = Number.MIN_SAFE_INTEGER
    help(root)
    return max
};
// @lc code=end

