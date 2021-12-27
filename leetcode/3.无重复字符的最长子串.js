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
  // 用数组来缓存不重复子串
  let max = 0, cache = [];
  // 遍历字符串，如果字符不在数组中则放到数组里面，否则截取该字符和之前的字符从数组中删除，并把改字符push进去
  // 判断数组长度是否大于最大长度，是则更新
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
var lengthOfLongestSubstring = function (s) {
  let max = 0, map = {}, start = 0
  for (let i = 0; i < s.length; i++) {
    const key = s[i]
    if (map[key]) {
      start = Math.max(start, map[key] + 1)
    }
    max = Math.max(max, i - start + 1)
    map[key] = i
  }
  return max
}
// @lc code=end
