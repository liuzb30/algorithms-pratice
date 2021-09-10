/*
 * @lc app=leetcode.cn id=332 lang=javascript
 *
 * [332] 重新安排行程
 */

// @lc code=start
/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function (tickets) {
    let res = ['JFK']
    let map = {}
    // 构造map
    for (const ticket of tickets) {
        const [from, to] = ticket
        map[from] = map[from] || []
        map[from].push(to)
    }
    // 排序
    for (let city in map) {
        map[city].sort()
    }

    backTracking()

    return res

    function backTracking() {
        if (res.length === tickets.length + 1) return true
        let citys = map[res[res.length - 1]]
        if (!citys || !citys.length) return false
        for (let i = 0; i < citys.length; i++) {
            const city = citys[i]
            res.push(city)
            // 移除city
            citys.splice(i, 1)
            if (backTracking()) return true
            citys.splice(i, 0, city)
            res.pop()
        }
    }

};
// @lc code=end

