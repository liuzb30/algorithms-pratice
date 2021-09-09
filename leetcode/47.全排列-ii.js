/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
    let res = [], path = []
    nums.sort((a, b) => a - b)
    backTracking()
    return res
    function backTracking(used = []) {
        if (path.length === nums.length) {
            res.push([...path])
            return
        }
        for (let i = 0; i < nums.length; i++) {
            if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) continue
            // 通过索引来判断是否访问过
            if (used[i]) continue
            used[i] = true
            path.push(nums[i])
            backTracking(used)
            used[i] = false
            path.pop()

        }
    }
};
// var permuteUnique = function (nums) {
//     let res = new Set(), path = []
//     backTracking()
//     return Array.from(res).map(item => JSON.parse(item))
//     function backTracking(used = []) {
//         if (path.length === nums.length) {
//             res.add(JSON.stringify(path))
//             return
//         }
//         for (let i = 0; i < nums.length; i++) {
//             if (used[i]) continue
//             used[i] = true
//             path.push(nums[i])
//             backTracking(used)
//             used[i] = false
//             path.pop()
//         }
//     }
// }
// @lc code=end

