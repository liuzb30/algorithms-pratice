/*
 * @lc app=leetcode.cn id=90 lang=javascript
 *
 * [90] 子集 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
    let res = [], path = []
    // 排序
    nums.sort((a, b) => a - b)
    backTracking(0)
    return res
    function backTracking(startIndex) {
        res.push([...path])
        for (let i = startIndex; i < nums.length; i++) {
            if (i > startIndex && nums[i] === nums[i - 1]) continue;
            path.push(nums[i])
            backTracking(i + 1)
            path.pop()
        }
    }
};
// @lc code=end

