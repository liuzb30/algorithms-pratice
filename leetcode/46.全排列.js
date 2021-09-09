/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var permute = function (nums) {
  let res = [], path = []
  backTracking()
  return res
  function backTracking() {
    if (path.length === nums.length) {
      res.push([...path])
      return
    }
    for (let i = 0; i < nums.length; i++) {
      // 如果路径已经包含了当前值，则跳过
      if (path.includes(nums[i])) continue
      path.push(nums[i])
      backTracking()
      path.pop()
    }
  }
};
// @lc code=end
