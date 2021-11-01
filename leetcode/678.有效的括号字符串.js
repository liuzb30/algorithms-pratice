/*
 * @lc app=leetcode.cn id=678 lang=javascript
 *
 * [678] 有效的括号字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function (s) {
    let leftStack = [], starStack = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            leftStack.push(i)
        } else if (s[i] === '*') {
            starStack.push(i)
        } else if (s[i] === ')') {
            if (leftStack.length) {
                leftStack.pop()
            } else if (starStack.length) {
                starStack.pop()
            } else {
                return false
            }
        }
    }
    while (leftStack.length && starStack.length) {
        if (leftStack.pop() > starStack.pop()) {
            return false
        }
    }
    return leftStack.length === 0
};
// @lc code=end

