/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// 遍历
var removeDuplicates2 = function (nums) {
  let cur = nums[0];
  let i = 1;
  while (i < nums.length) {
    if (nums[i] === cur) {
      nums.splice(i, 1);
    } else {
      cur = nums[i];
      i++;
    }
  }
  return nums.length;
};
// 双指针
var removeDuplicates = function (nums) {
  let p = 0;
  let q = 1;
  while (q < nums.length) {
    if (nums[q] !== nums[p]) {
      p++;
      if (q - p > 0) {
        nums[p] = nums[q];
      }
    }
    q++;
  }
  return p + 1;
};
// @lc code=end
