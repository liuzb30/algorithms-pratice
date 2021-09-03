/*
 * @lc app=leetcode.cn id=637 lang=javascript
 *
 * [637] 二叉树的层平均值
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
var averageOfLevels = function (root) {
    const res = [], queue = [root]
    while (queue.length) {
        let size = len = queue.length
        let sum = 0
        while (len--) {
            const node = queue.shift()
            node.left && queue.push(node.left)
            node.right && queue.push(node.right)
            sum += node.val
        }
        res.push(sum / size)
    }
    return res
};
// @lc code=end

