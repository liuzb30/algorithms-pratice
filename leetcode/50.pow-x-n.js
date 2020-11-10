/*
 * @lc app=leetcode.cn id=50 lang=javascript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow2 = function (x, n) {
  let total = 1;
  for (let i = 0; i < n; i++) {
    total *= x;
  }
  return total;
};
var myPow = function (x, n) {
  let total = 1;
  let flag = 0;
  if (n < 0) {
    n = -n;
    flag = 1;
  }

  while (n) {
    if (n & 1) {
      total *= x;
    }
    x *= x;
    n >>>= 1;
  }
  return flag ? 1 / total : total;
};

// @lc code=end
