/*
 * @lc app=leetcode.cn id=216 lang=javascript
 *
 * [216] 组合总和 III
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
    let res = []
    const backTracking = (startIndex, path = [], sum = 0) => {
        if (sum > n) return
        if (path.length === k) {
            if (sum === n) res.push([...path])
            return
        }
        for (let i = startIndex; i <= 9; i++) {
            sum += i
            path.push(i)
            backTracking(i + 1, path, sum)
            sum -= i
            path.pop(i)
        }
    }
    backTracking(1)
    return res
};
// @lc code=end

