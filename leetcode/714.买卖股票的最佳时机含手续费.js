/*
 * @lc app=leetcode.cn id=714 lang=javascript
 *
 * [714] 买卖股票的最佳时机含手续费
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
const maxProfit = (prices, fee) => {
    let len = prices.length
    let dp = new Array(len)
    dp[0] = [-prices[0], 0]
    for (let i = 1; i < len; i++) {
        dp[i] = [
            Math.max(dp[i - 1][0], dp[i - 1][1] - prices[i]),
            Math.max(dp[i - 1][1], dp[i - 1][0] + prices[i] - fee)
        ]
    }
    return Math.max(dp[len - 1][0], dp[len - 1][1])
}
// @lc code=end

