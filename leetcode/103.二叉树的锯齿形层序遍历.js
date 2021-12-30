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
    let res = [], queue = [root], level = 0
    while (queue.length) {
        let len = queue.length, temp = []
        while (len--) {
            let node = queue.shift()
            temp.push(node.val)
            node.left && queue.push(node.left)
            node.right && queue.push(node.right)
        }
        if (level % 2 === 1) temp.reverse()
        res.push(temp)
        level++
    }
    return res
}
// @lc code=end

