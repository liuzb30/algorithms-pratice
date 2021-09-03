/*
 * @lc app=leetcode.cn id=113 lang=javascript
 *
 * [113] 路径总和 II
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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
    let paths = []
    const traversal = (root, target, path = []) => {
        if (!root) return
        if (!root.left && !root.right && target === root.val) {
            path.push(root.val)
            paths.push(path)
            return
        }
        traversal(root.left, target - root.val, [...path, root.val])
        traversal(root.right, target - root.val, [...path, root.val])
    }
    traversal(root, targetSum)
    return paths
};
// @lc code=end

