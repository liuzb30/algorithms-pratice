/*
 * @lc app=leetcode.cn id=279 lang=javascript
 *
 * [279] 完全平方数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
    let cache = new Set()
    let queue = []
    queue.push({ num: n, step: 0 })
    while (queue.length) {
        const { num, step } = queue.shift()
        for (let i = 1; ; i++) {
            let nextNum = num - i * i
            if (nextNum < 0) break;
            if (nextNum === 0) return step + 1
            if (!cache.has(nextNum)) {
                cache.add(nextNum)
                queue.push({ num: nextNum, step: step + 1 })
            }
        }
    }
};
// @lc code=end

