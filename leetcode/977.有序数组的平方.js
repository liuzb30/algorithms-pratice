/*
 * @lc app=leetcode.cn id=977 lang=javascript
 *
 * [977] 有序数组的平方
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
    let len = nums.length
    let result = new Array(len)
    let left = 0, right = len - 1
    while (left <= right) {
        let i = nums[left] * nums[left], j = nums[right] * nums[right]
        if (i < j) {
            result[--len] = j
            right--
        } else {
            result[--len] = i
            left++
        }
    }
    return result
};
// @lc code=end

