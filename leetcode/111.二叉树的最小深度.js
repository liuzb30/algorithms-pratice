/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
// 递归
var minDepth = function (root) {
    if (root == null) return 0
    if (root.left && root.right) {
        return Math.min(minDepth(root.left), minDepth(root.right)) + 1
    } else if (root.left) {
        return minDepth(root.left) + 1
    } else if (root.right) {
        return minDepth(root.right) + 1
    } else {
        return 1
    }
};
// 迭代
var minDepth = function (root) {
    if (root == null) return 0
    let depth = 0
    let queue = [root]
    while (queue.length) {
        let size = queue.length
        while (size--) {
            const node = queue.shift()
            if (!node.left && !node.right) return depth + 1
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
        depth++
    }
    return depth
}
// @lc code=end

