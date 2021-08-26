/*
 * @lc app=leetcode.cn id=541 lang=javascript
 *
 * [541] 反转字符串 II
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
    let sArr = s.split('')
    for (let i = 0; i < sArr.length; i += 2 * k) {
        let l = i - 1, r = i + k
        while (++l < --r) {
            [sArr[l], sArr[r]] = [sArr[r], sArr[l]]
        }
    }
    return sArr.join('')
};
// @lc code=end

