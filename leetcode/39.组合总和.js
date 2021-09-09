/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    let res = []
    const backTracking = (startIndex, path = [], sum = 0) => {
        if (sum > target) return
        if (sum === target) {
            res.push([...path])
            return
        }
        for (let i = startIndex; i < candidates.length; i++) {
            sum += candidates[i]
            path.push(candidates[i])
            backTracking(i, path, sum)
            sum -= candidates[i]
            path.pop(candidates[i])
        }
    }
    backTracking(0)
    return res
};
// @lc code=end

