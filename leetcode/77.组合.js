/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
// var combine = function (n, k) {
//     let res = []
//     const backTracking = (startIndex, path = []) => {
//         if (path.length === k) {
//             res.push(path)
//             return
//         }
//         for (let j = startIndex; j <= n - (k - path.length) + 1; j++) {
//             backTracking(j + 1, [...path, j])
//         }
//     }
//     backTracking(1)
//     return res
// };
var combine = function (n, k) {
    let res = [], path = []
    const backTracking = (startIndex) => {
        if (path.length === k) {
            res.push([...path])
            return
        }
        for (let j = startIndex; j <= n - (k - path.length) + 1; j++) {
            path.push(j)
            // 递归
            backTracking(j + 1)
            // 回溯
            path.pop(j)
        }
    }
    backTracking(1)
    return res
}
// @lc code=end

