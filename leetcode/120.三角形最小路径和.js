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
var minimumTotal1 = function (triangle) {
  let tmp = [];
  for (let i = triangle.length - 1; i >= 0; i--) {
    const item = triangle[i];
    if (tmp[i + 1]) {
      tmp[i] = [];
      for (let j = 0; j < item.length; j++) {
        tmp[i][j] = item[j] + Math.min(tmp[i + 1][j], tmp[i + 1][j + 1]);
      }
    } else {
      tmp[i] = [...triangle[i]];
    }
    console.log(tmp);
  }
  return tmp[0];
};

var minimumTotal = function (triangle) {
  let len = triangle.length - 1;
  let tmp = triangle[len];
  for (let i = len - 1; i >= 0; i--) {
    for (let j = 0; j < triangle[i].length; j++) {
      tmp[j] = triangle[i][j] + Math.min(tmp[j], tmp[j + 1]);
    }
  }
  return tmp[0];
};

// @lc code=end
