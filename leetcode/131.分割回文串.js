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
    const res = [], path = []
    backTracking(0)
    return res
    function backTracking(startIndex) {
        if (startIndex === s.length) {
            res.push([...path])
            return
        }
        for (let i = startIndex; i < s.length; i++) {
            let item = s.slice(startIndex, i + 1)
            // 判断是否回文
            if (!isValid(item)) continue
            path.push(item)
            backTracking(i + 1)
            path.pop(item)
        }
    }

    function isValid(s) {
        let left = 0, right = s.length - 1
        while (left <= right) {
            if (s[left] !== s[right]) return false
            left++
            right--
        }
        return true
    }
};
// @lc code=end

