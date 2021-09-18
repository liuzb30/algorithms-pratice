/*
 * @lc app=leetcode.cn id=279 lang=javascript
 *
 * [279] 完全平方数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
    let dp = new Array(n + 1).fill(Number.MAX_SAFE_INTEGER)
    dp[0] = 0
    let len = Math.sqrt(n)
    for (let i = 0; i <= len; i++) {
        for (let j = i * i; j <= n; j++) {
            dp[j] = Math.min(dp[j], dp[j - i * i] + 1)
        }
    }
    if (dp[n] === Number.MAX_SAFE_INTEGER) return -1
    return dp[n]
};
// @lc code=end

