/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let i = 0,
    j = height.length - 1;
  res = 0;
  while (i < j) {
    let width = j - i;
    res =
      height[i] < height[j]
        ? Math.max(res, height[i++] * width)
        : Math.max(res, height[j--] * width);
  }
  return res;
};
// 设置双指针i,j 分别位于容器壁两端，根据规则移动指针（后续说明），并且更新面积最大值 res，直到 i == j 时返回 res。
// 每次移动短板，可以找到更大面积的可能。
// 因为移动长板，短板已经固定，长度变小，面积只会越来越小
// @lc code=end
