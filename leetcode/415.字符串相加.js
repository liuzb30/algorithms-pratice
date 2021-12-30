/*
 * @lc app=leetcode.cn id=415 lang=javascript
 *
 * [415] 字符串相加
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
    let len1 = num1.length, len2 = num2.length
    let result = '', flag = 0
    while (len1 > 0 || len2 > 0) {
        len1--
        len2--
        let count1 = num1[len1] ? +num1[len1] : 0
        let count2 = num2[len2] ? +num2[len2] : 0
        let sum = count1 + count2 + flag
        result = sum % 10 + result
        flag = sum >= 10 ? 1 : 0
    }
    if (flag) {
        result = '1' + result
    }
    return result
};
// @lc code=end

