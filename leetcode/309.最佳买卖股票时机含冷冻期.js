/*
 * @lc app=leetcode.cn id=309 lang=javascript
 *
 * [309] 最佳买卖股票时机含冷冻期
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices) => {
    let len = prices.length
    let dp = new Array(len)
    dp[0] = [-prices[0], 0, 0, 0]
    for (let i = 1; i < len; i++) {
        dp[i] = [
            Math.max(dp[i - 1][0], Math.max(dp[i - 1][3], dp[i - 1][1]) - prices[i]),
            Math.max(dp[i - 1][1], dp[i - 1][3]),
            dp[i - 1][0] + prices[i],
            dp[i - 1][2]
        ]
    }
    return Math.max(dp[len - 1][1], dp[len - 1][2], dp[len - 1][3])

};
// @lc code=end

