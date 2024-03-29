/*
 * @lc app=leetcode.cn id=530 lang=javascript
 *
 * [530] 二叉搜索树的最小绝对差
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
var getMinimumDifference = function (root) {
    let pre = null
    let min = Number.MAX_SAFE_INTEGER
    const inOrder = (root) => {
        if (!root) return
        inOrder(root.left)
        if (pre) {
            min = Math.min(min, root.val - pre.val)
        }
        pre = root
        inOrder(root.right)
    }
    inOrder(root)
    return min
};
// @lc code=end

