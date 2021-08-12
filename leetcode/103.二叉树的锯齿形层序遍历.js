/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层序遍历
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
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
    if (!root) return []
    const queue = [root]
    const result = []
    let level = 0
    while (queue.length) {
        result.push([])
        let size = queue.length
        while (size--) {
            let top = queue.shift()
            result[level].push(top.val)
            if (top.left) queue.push(top.left)
            if (top.right) queue.push(top.right)
        }
        if (level % 2) result[level].reverse();
        level++
    }
    return result
};
// @lc code=end

