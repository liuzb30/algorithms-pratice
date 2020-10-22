/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let prev = 0,
    cur = 1,
    temp;

  while (n--) {
    temp = prev;
    prev = cur;
    cur += temp; // 当前项 = 当前项 + 上项（使用temp作中间状态存储）
  }

  return cur;
};
// @lc code=end
