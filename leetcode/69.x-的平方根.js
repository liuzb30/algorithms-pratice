/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  if (x === 0) return 0;
  let left = 0;
  let right = 999999;
  while (left < right) {
    let mid = (left + right + 1) >> 1;
    let square = mid * mid;
    if (square > x) {
      right = mid - 1;
    } else {
      left = mid;
    }
  }
  return left;
};
// @lc code=end
