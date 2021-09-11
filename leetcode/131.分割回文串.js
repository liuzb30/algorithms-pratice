/*
 * @lc app=leetcode.cn id=131 lang=javascript
 *
 * [131] 分割回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
    let res = [], path = []
    backTracking(0)
    return res
    function backTracking(startIndex) {
        if (startIndex === s.length) {
            res.push([...path])
            return
        }

        for (let i = startIndex; i < s.length; i++) {
            let item = s.slice(startIndex, i + 1)
            if (!isValid(item)) continue
            path.push(item)
            backTracking(i + 1)
            path.pop()
        }
    }
    // 判断是否回文
    function isValid(s) {
        let left = -1, right = s.length
        while (++left < --right) {
            if (s[left] !== s[right]) {
                return false
            }
        }
        return true
    }
};
// @lc code=end

