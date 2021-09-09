/*
 * @lc app=leetcode.cn id=491 lang=javascript
 *
 * [491] 递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function (nums) {
    let res = [], path = []
    backTracking(0)
    return res
    function backTracking(startIndex) {
        if (path.length >= 2) {
            res.push([...path])
        }
        let uset = {}
        for (let i = startIndex; i < nums.length; i++) {
            // 当值比path最后一个元素小，或者已经存在uset里面则走下一步
            if (path.length && nums[i] < path[path.length - 1] || uset[nums[i]]) continue
            uset[nums[i]] = true
            path.push(nums[i])
            backTracking(i + 1)
            path.pop(nums[i])
        }
    }
};
// @lc code=end

