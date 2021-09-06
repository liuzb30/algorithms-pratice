/*
 * @lc app=leetcode.cn id=108 lang=javascript
 *
 * [108] 将有序数组转换为二叉搜索树
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
// var sortedArrayToBST = function (nums) {
//     const traversal = (nums, left, right) => {
//         // 1.确定入参和返回值
//         // 2.确定终止条件
//         if (left > right) return null
//         // 3.确定单层逻辑
//         let mid = (left + right) >> 1
//         let root = new TreeNode(nums[mid])
//         root.left = traversal(nums, left, mid - 1)
//         root.right = traversal(nums, mid + 1, right)
//         return root
//     }
//     return traversal(nums, 0, nums.length - 1)
// };
var sortedArrayToBST = function (nums) {
    const len = nums.length
    if (!len) return null
    let mid = len >> 1
    const root = new TreeNode(nums[mid])
    root.left = sortedArrayToBST(nums.slice(0, mid))
    root.right = sortedArrayToBST(nums.slice(mid + 1, len))
    return root
}

// @lc code=end

