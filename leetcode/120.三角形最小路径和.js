/*
 * @lc app=leetcode.cn id=120 lang=javascript
 *
 * [120] 三角形最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} triangle
 * @return {number}
 */
// 确定问题类型 动态规划
// 思考如何列出正确的状态
// 确定base  找到最下面那层，返回结果
// 确定状态 也就是原问题和子问题会变化的变量 第n层
// 确定选择 导致状态变化的行为 相邻的节点
// 明确 dp函数和数组的定义
// 找出第n成到最后一层的最小路径和

var minimumTotal = function (triangle) {
  let len = triangle.length - 1;
  let temp = [];
  function dp(n) {
    if (n === len) {
      temp = triangle[n];
      return;
    }
    dp(n + 1);
    console.log(temp);
    for (let i = 0; i < triangle[n].length; i++) {
      temp[i] = triangle[n][i] + Math.min(temp[i], temp[i + 1]);
    }
  }
  dp(0);
  return temp[0];
};
var minimumTotal = function (triangle) {
  let len = triangle.length - 1;
  let temp = triangle[len];
  for (let i = len - 1; i >= 0; i--) {
    let item = triangle[i];
    for (let j = 0; j < item.length; j++) {
      temp[j] = item[j] + Math.min(temp[j], temp[j + 1]);
    }
  }
  return temp[0];
};

// @lc code=end
