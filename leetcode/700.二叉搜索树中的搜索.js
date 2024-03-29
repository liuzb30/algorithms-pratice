/*
 * @lc app=leetcode.cn id=700 lang=javascript
 *
 * [700] 二叉搜索树中的搜索
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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {
    if (!root || root.val === val) return root
    if (root.val < val) {
        return searchBST(root.right, val)
    }
    if (root.val > val) {
        return searchBST(root.left, val)
    }
};

var searchBST = function (root, val) {
    while (root != null) {
        if (root.val < val) root = root.right
        else if (root.val > val) root = root.left
        else return root
    }
    return null
}
// @lc code=end

