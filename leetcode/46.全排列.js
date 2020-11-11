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
function backtrack(list, temp, nums) {
  if (temp.length === nums.length) {
    list.push([...temp]);
    return;
  }
  for (let i = 0; i < nums.length; i++) {
    let item = nums[i];
    if (temp.includes(nums[i])) continue;
    temp.push(item);
    backtrack(list, temp, nums);
    temp.pop(item);
  }
}
var permute = function (nums) {
  let list = [],
    temp = [];
  backtrack(list, temp, nums);
  return list;
};
// @lc code=end
