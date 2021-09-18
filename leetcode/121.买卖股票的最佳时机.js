/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
// 贪心算法
// var maxProfit = function (prices) {
//   let result = 0, min = prices[0]
//   for (let i = 1; i < prices.length; i++) {
//     min = Math.min(min, prices[i])
//     result = Math.max(prices[i] - min, result)
//   }
//   return result
// };
var maxProfit = function (prices) {
  let len = prices.length
  let dp = new Array(len).fill([0, 0])
  dp[0] = [-prices[0], 0]
  for (let i = 1; i < len; i++) {
    dp[i] = [
      Math.max(dp[i - 1][0], -prices[i]),
      Math.max(dp[i - 1][1], dp[i - 1][0] + prices[i])
    ]
  }
  return dp[len - 1][1]
}

// @lc code=end
