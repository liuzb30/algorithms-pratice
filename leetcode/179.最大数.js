/*
 * @lc app=leetcode.cn id=179 lang=javascript
 *
 * [179] 最大数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
  nums.sort((a, b) => {
    const combine1 = String(a) + String(b);
    const combine2 = String(b) + String(a);
    return combine1 > combine2 ? -1 : 1;
  });
  console.log(nums.join(""));
  let str = nums.join("");
  if (str[0] === "0") {
    return "0";
  }
  return str;
};
// @lc code=end
