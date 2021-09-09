/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
    let res = [], path = [], len = candidates.length;
    // 对数组进行排序
    candidates.sort((a, b) => a - b)
    backTracking(0, 0)
    return res
    function backTracking(sum, startIndex) {
        // 终止条件
        if (sum === target) {
            res.push([...path])
            return
        }
        for (let i = startIndex; i < len && candidates[i] + sum <= target; i++) {
            const item = candidates[i]
            // 去重
            if (i > startIndex && item === candidates[i - 1]) continue
            sum += item
            path.push(item)
            backTracking(sum, i + 1)
            // 回溯
            sum -= item
            path.pop()
        }
    }
};
// @lc code=end

