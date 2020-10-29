/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let dp = [];
  const len = s.length;
  // 初始化状态
  for (let i = 0; i < len; i++) {
    if (!dp[i]) {
      dp[i] = [];
    }
    dp[i][i] = true;
  }
  let max = 1;
  let begin = 0;
  let result = "";

  for (let j = 1; j < len; j++) {
    for (i = 0; i < j; i++) {
      if (s[i] !== s[j]) {
        dp[i][j] = false;
      } else {
        if (j - i < 3) {
          dp[i][j] = true;
        } else {
          dp[i][j] = dp[i + 1][j - 1];
        }

        if (dp[i][j] && j - i + 1 > max) {
          max = j - i + 1;
          begin = i;
        }
      }
    }
  }
  result = s.substr(begin, max);
  return result;
};
// @lc code=end
