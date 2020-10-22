/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let max = 0;
  let cache = [];

  for (let i = 0; i < s.length; i++) {
    let element = s[i];
    if (cache.indexOf(element) === -1) {
      cache.push(element);
    } else {
      let index = cache.indexOf(element);
      cache = cache.slice(index + 1);
      cache.push(element);
    }
    max = Math.max(max, cache.length);
  }
  return max;
};
// @lc code=end
