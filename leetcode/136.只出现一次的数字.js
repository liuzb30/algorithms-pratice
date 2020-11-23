/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

var singleNumber = function (nums) {
  for (let i = 1; i < nums.length; i++) {
    nums[i] = nums[i] ^ nums[i - 1];
  }
  return nums[nums.length - 1];
};
var singleNumber = function (nums) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    let item = nums[i];
    if (map[item]) {
      map[item] = map[item] + 1;
    } else {
      map[item] = 1;
    }
  }
  for (let key in map) {
    console.log(map[key]);
    if (map[key] === 1) {
      return key;
    }
  }
};
// @lc code=end
