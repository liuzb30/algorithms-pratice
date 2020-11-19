/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let res = [];
  // 排序
  nums.sort((a, b) => a - b);
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    // 如果当前数字大于0，则三数之和一定大于0，所以结束循环
    if (nums[i] > 0) break;
    // 去重
    if (nums[i] === nums[i - 1]) continue;
    let l = i + 1;
    let r = len - 1;
    while (l < r) {
      let sum = nums[i] + nums[l] + nums[r];
      if (sum > 0) r--;
      else if (sum < 0) l++;
      else {
        res.push([nums[i], nums[l], nums[r]]);
        // 去重
        while (l < r && nums[l] === nums[++l]) {}
        while (l < r && nums[r] === nums[--r]) {}
      }
    }
  }
  return res;
};
// @lc code=end
