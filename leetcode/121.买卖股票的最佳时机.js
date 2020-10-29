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
var maxProfit = function (prices) {
  let max = 0;
  let min = 9999;
  //   找出最小值
  for (let i = 0; i < prices.length; i++) {
    if (min > prices[i]) {
      min = prices[i];
    } else if (prices[i] - min > max) {
      max = prices[i] - min;
    }
  }
  //   for (let i = 0; i < prices.length; i++) {
  //     for (let j = i + 1; j < prices.length; j++) {
  //       max = Math.max(max, prices[j] - prices[i]);
  //     }
  //   }
  return max;
};
// @lc code=end
