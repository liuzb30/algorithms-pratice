/*
 * @lc app=leetcode.cn id=188 lang=javascript
 *
 * [188] 买卖股票的最佳时机 IV
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (k, prices) => {
    let len = prices.length
    if (!k || !len) return 0
    let dp = new Array(len).fill(0).map(item => new Array(2 * k + 1).fill(0))
    // 初始化第一行的数据
    for (let i = 1; i <= len; i += 2) {
        dp[0][i] = -prices[0]
    }
    for (let i = 1; i < prices.length; i++) {
        // 处理第k次买入卖出的状态
        for (let j = 1; j < 2 * k + 1; j += 2) {
            dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - 1] - prices[i])
            dp[i][j + 1] = Math.max(dp[i - 1][j + 1], dp[i - 1][j] + prices[i])
        }
    }
    return dp[len - 1][2 * k]
};
// @lc code=end

