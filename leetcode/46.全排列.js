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
  let ret = [];
  let len = nums.length;
  backtrack();
  return ret;
  function backtrack(tmp = []) {
    if (tmp.length === len) {
      ret.push([...tmp]);
      return;
    }
    for (let i = 0; i < len; i++) {
      let item = nums[i];
      if (tmp.includes(item)) continue;
      tmp.push(item);
      backtrack(tmp);
      tmp.pop(item);
    }
  }
};
// @lc code=end
