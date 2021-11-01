/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let result, len = nums.length
    let dp = new Array(len)
    dp[0] = nums[0]
    result = dp[0]
    for (let i = 1; i < len; i++) {
        dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
        result = Math.max(result, dp[i])
    }
    return result
};
// @lc code=end

