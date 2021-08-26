/*
 * @lc app=leetcode.cn id=459 lang=javascript
 *
 * [459] 重复的子字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
    // 构建next数组
    let len = s.length
    let next = [0]
    for (let i = 1, j = 0; i < len; i++) {
        while (j > 0 && s[i] !== s[j]) j = next[j - 1]
        if (s[i] === s[j]) j++
        next[i] = j
    }
    // 如果next最后一个值不为0，说明有相同的前后缀；如果len % (len - (next[len - 1] + 1)) == 0 ，则说明 (数组长度-最长相等前后缀的长度) 正好可以被 数组的长度整除，说明有该字符串有重复的子字符串。
    if (next[len - 1] !== 0 && len % (len - next[len - 1]) === 0) {
        return true
    }
    return false
};
// @lc code=end

