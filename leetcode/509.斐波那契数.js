/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} N
 * @return {number}
 */
var fib = function (N) {
  let dp = [0, 1]
  for (let i = 2; i <= N; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }
  return dp[N]
};
// @lc code=end
