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
// var restoreIpAddresses = function (s) {
//     const res = [], path = []
//     backTracking(0)
//     return res
//     function backTracking(i) {
//         const len = path.length
//         if (len > 4) return
//         if (len === 4 && i === s.length) {
//             res.push(path.join('.'))
//             return
//         }
//         for (let j = i; j < s.length; j++) {
//             const str = s.substr(i, j - i + 1)
//             if (str.length > 3 || +str > 255) break;
//             if (str.length > 1 && str[0] == '0') break;
//             path.push(str)
//             backTracking(j + 1)
//             path.pop()
//         }
//     }
// };
var restoreIpAddresses = function (s) {
    let path = [], res = []
    backTracking(0)
    return res
    function backTracking(k) {
        if (path.length === 3) {
            let temp = s.slice(k)
            if (isValid(temp)) {
                res.push([...path, temp].join('.'))
            }
            return
        }
        for (let i = 1; i <= 3; i++) {
            let temp = s.substr(k, i)
            if (!isValid(temp)) break;
            path.push(temp)
            backTracking(k + i)
            path.pop(temp)
        }
    }
    function isValid(s) {
        if (!s.length) return false
        if (s.length > 1 && s[0] === '0') return false
        if (Number(s) > 255) return false
        return true
    }
}
// @lc code=end

