/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    if (needle.length === 0) return 0
    // 构建next数组
    let hLen = haystack.length, nLen = needle.length
    let next = [0]
    // 从1开始
    for (let i = 1, j = 0; i < nLen; i++) {
        // 前后缀不相同，则向前回退
        while (j > 0 && needle[i] !== needle[j]) j = next[j - 1]
        // 找到相同的前后缀
        if (needle[i] === needle[j]) j++
        // 将前缀的长度赋值给next[i]
        next.push(j)
    }

    for (let i = 0, j = 0; i < hLen; i++) {
        // 当匹配的字符不相同，j要回到前一位对应值的回退位置
        while (j > 0 && haystack[i] !== needle[j]) j = next[j - 1]
        if (haystack[i] === needle[j]) j++
        if (j === nLen) return i - nLen + 1
    }
    return -1
};
// @lc code=end

