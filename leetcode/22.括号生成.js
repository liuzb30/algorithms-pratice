/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    const dfs = (curStr, left, right) => {
        if (left === 0 && right === 0) {
            res.push(curStr)
            return
        }
        if (right < left) return
        if (left > 0) dfs(curStr + '(', left - 1, right)
        if (right > 0) dfs(curStr + ')', left, right - 1)
    }
    let res = []
    dfs('', n, n)
    return res
};
// @lc code=end

