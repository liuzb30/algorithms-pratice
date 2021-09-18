/*
 * @lc app=leetcode.cn id=337 lang=javascript
 *
 * [337] 打家劫舍 III
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
var rob = function (root) {
    function postOrder(node) {
        if (!node) return [0, 0]
        let left = postOrder(node.left)
        let right = postOrder(node.right)
        // 不偷当前节点
        let val1 = Math.max(left[0], left[1]) + Math.max(right[0], right[1])
        // 偷当前节点
        let val2 = node.val + left[0] + right[0]
        return [val1, val2]
    }
    const res = postOrder(root)
    return Math.max(...res)
};
// @lc code=end

