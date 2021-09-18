/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
// var maxProfit = function (prices) {
//     let result = 0
//     for (let i = 1; i < prices.length; i++) {
//         result += Math.max(prices[i] - prices[i - 1], 0)
//     }
//     return result
// }
var maxProfit = function (prices) {
    let len = prices.length
    let dp = new Array(len)
    dp[0] = [-prices[0], 0]
    for (let i = 1; i < len; i++) {
        dp[i] = [
            Math.max(dp[i - 1][0], dp[i - 1][1] - prices[i]),
            Math.max(dp[i - 1][1], dp[i - 1][0] + prices[i])
        ]
    }
    return dp[len - 1][1]
};
// @lc code=end

