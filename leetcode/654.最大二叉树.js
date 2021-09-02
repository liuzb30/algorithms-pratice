/*
 * @lc app=leetcode.cn id=654 lang=javascript
 *
 * [654] 最大二叉树
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function (nums) {
    if (!nums.length) return null
    let maxVal = Number.MIN_SAFE_INTEGER
    let index = -1
    nums.forEach((n, i) => {
        if (maxVal < n) {
            maxVal = n
            index = i
        }
    })
    let root = new TreeNode(maxVal)
    root.left = constructMaximumBinaryTree(nums.slice(0, index))
    root.right = constructMaximumBinaryTree(nums.slice(index + 1, nums.length))
    return root
};

var constructMaximumBinaryTree = function (nums) {
    const buildTree = (arr, left, right) => {
        if (left > right) return null
        let maxValue = -1
        let maxIndex = -1
        for (let i = left; i <= right; ++i) {
            if (arr[i] > maxValue) {
                maxValue = arr[i]
                maxIndex = i
            }
        }
        let root = new TreeNode(maxValue)
        root.left = buildTree(arr, left, maxIndex - 1)
        root.right = buildTree(arr, maxIndex + 1, right)
        return root
    }

    return buildTree(nums, 0, nums.length - 1)

}
// @lc code=end

