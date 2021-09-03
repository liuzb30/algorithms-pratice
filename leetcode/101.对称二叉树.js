/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
 * @return {boolean}
 */
// 递归
var isSymmetric = function (root) {
    const compare = (node1, node2) => {
        if (!node1 && !node2) return true
        if (!node1 || !node2 || node1.val !== node2.val) return false
        return compare(node1.left, node2.right) && compare(node1.right, node2.left)
    }
    return compare(root.left, root.right)
}
// 迭代
var isSymmetric = function (root) {
    if (!root) return true
    const queue = [root.left, root.right]
    while (queue.length) {
        let node1 = queue.shift()
        let node2 = queue.shift()
        if (!node1 && !node2) continue
        if (!node1 || !node2 || node1.val !== node2.val) return false
        queue.push(node1.left)
        queue.push(node2.right)
        queue.push(node1.right)
        queue.push(node2.left)
    }
    return true
}
// @lc code=end

