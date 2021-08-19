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
// var isSymmetric = function (root) {
//     const help = (node1, node2) => {
//         if (!node1 && !node2) return true
//         if (!node1 || !node2 || node1.val !== node2.val) return false
//         return help(node1.left, node2.right) && help(node1.right, node2.left)
//     }
//     if (root == null) return true
//     return help(root.left, root.right)
// };

var isSymmetric = function (root) {
    if (root == null) return true
    let queue = [root.left, root.right]
    let node1, node2
    while (queue.length) {
        node1 = queue.shift()
        node2 = queue.shift()
        if (!node1 && !node2) continue
        if (!node1 || !node2 || node1.val !== node2.val) return false
        // 把子节点压入队列
        queue.push(node1.left)
        queue.push(node2.right)
        queue.push(node1.right)
        queue.push(node2.left)
    }
    return true

}
// @lc code=end

