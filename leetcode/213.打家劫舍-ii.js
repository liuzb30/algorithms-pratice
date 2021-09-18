/*
 * @lc app=leetcode.cn id=213 lang=javascript
 *
 * [213] 打家劫舍 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    let len = nums.length
    if (len === 0) return 0
    if (len === 1) return nums[0]
    let result1 = robRange(nums, 0, len - 2)
    let result2 = robRange(nums, 1, len - 1)
    return Math.max(result1, result2)
    function robRange(nums, start, end) {
        if (start === end) return nums[start]
        let dp = new Array(nums.length).fill(0)
        dp[start] = nums[start]
        dp[start + 1] = Math.max(nums[start], nums[start + 1])
        for (let i = start + 2; i <= end; i++) {
            dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1])
        }
        return dp[end]
    }

};
// @lc code=end

