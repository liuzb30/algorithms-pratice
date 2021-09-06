/*
 * @lc app=leetcode.cn id=501 lang=javascript
 *
 * [501] 二叉搜索树中的众数
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
var findMode = function (root) {
    let res = [], pre = null, count = 0, maxCount = 0
    const inOrder = (root) => {
        if (!root) return
        inOrder(root.left)

        if (!pre || pre.val !== root.val) {
            count = 1
        } else {
            count++
        }
        pre = root
        if (count === maxCount) {
            res.push(root.val)
        }
        if (count > maxCount) {
            maxCount = count
            res = [root.val]
        }
        inOrder(root.right)
    }
    inOrder(root)
    return res
};
// @lc code=end

