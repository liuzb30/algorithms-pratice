/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    let map = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz'
    }
    let res = []
    const backTracking = (startIndex, path = []) => {
        if (path.length === digits.length) {
            res.push(path.join(''))
            return
        }
        let chars = map[digits[startIndex]]
        for (const value of chars) {
            path.push(value)
            backTracking(startIndex + 1, path)
            path.pop(value)
        }
    }

    if (digits.length === 0) return []
    backTracking(0)
    return res
};
// @lc code=end

