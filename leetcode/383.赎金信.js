/*
 * @lc app=leetcode.cn id=383 lang=javascript
 *
 * [383] 赎金信
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    const arr = new Array(26).fill(0), base = 'a'.charCodeAt()
    for (const s of magazine) {
        arr[s.charCodeAt() - base]++
    }
    for (const s of ransomNote) {
        if (!arr[s.charCodeAt() - base]) return false
        arr[s.charCodeAt() - base]--
    }
    return true
};
// @lc code=end

