/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  let memo = {};
  function dp(n) {
    if (memo[n]) return memo[n];
    if (n === 0) return 0;
    if (n < 0) return -1;
    let res = Infinity;
    for (let i = 0; i < coins.length; i++) {
      let subProblem = dp(n - coins[i]);
      if (subProblem === -1) continue;
      res = Math.min(res, 1 + subProblem);
    }
    memo[n] = res === Infinity ? -1 : res;
    return memo[n];
  }
  return dp(amount);
};
// 迭代
var coinChange = function (coins, amount) {
  let dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;
  for (let i = 0; i < dp.length; i++) {
    for (let j = 0; j < coins.length; j++) {
      let coin = coins[j];
      if (i - coin < 0) continue;
      dp[i] = Math.min(dp[i], 1 + dp[i - coin]);
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount];
};
// @lc code=end
