/*
 * @lc app=leetcode.cn id=93 lang=javascript
 *
 * [93] 复原 IP 地址
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
    let res = [], path = [], len = s.length
    backTracking(0)
    return res

    function backTracking(startIndex) {
        if (path.length === 4) {
            if (startIndex === len) {
                res.push(path.join('.'))
            }
            return
        }
        for (let i = startIndex; i < len; i++) {
            let ip = s.slice(startIndex, i + 1)
            if (!isValid(ip)) continue
            path.push(ip)
            backTracking(i + 1)
            path.pop()
        }
    }
    // 是否有效ip
    function isValid(ip) {
        if (ip.length > 1 && ip[0] === '0') return false
        if (+ip > 255) return false
        return true
    }
}
// @lc code=end

