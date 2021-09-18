/*
 * @lc app=leetcode.cn id=123 lang=javascript
 *
 * [123] 买卖股票的最佳时机 III
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = prices => {
    let len = prices.length
    let dp = new Array(len)
    dp[0] = [0, -prices[0], 0, -prices[0], 0]
    for (let i = 1; i < len; i++) {
        dp[i] = [
            0,
            Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i]),
            Math.max(dp[i - 1][2], dp[i - 1][1] + prices[i]),
            Math.max(dp[i - 1][3], dp[i - 1][2] - prices[i]),
            Math.max(dp[i - 1][4], dp[i - 1][3] + prices[i])
        ]
    }
    return dp[len - 1][4]
};
// @lc code=end

