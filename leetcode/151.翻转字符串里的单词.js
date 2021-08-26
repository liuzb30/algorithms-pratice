/*
 * @lc app=leetcode.cn id=151 lang=javascript
 *
 * [151] 翻转字符串里的单词
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    // 转成数组
    let sArr = Array.from(s)
    // 移除多余的空格
    reverseExtraSpaces(sArr)
    // 反转整个数组
    reverse(sArr, 0, sArr.length)
    // 反转每个单词
    let start = 0
    for (let i = 0; i <= sArr.length; i++) {
        if (sArr[i] === ' ' || i === sArr.length) {
            reverse(sArr, start, i - 1)
            start = i + 1
        }
    }
    return sArr.join('')
    function reverseExtraSpaces(sArr) {
        // 移除开始和中间的空格
        let slow = fast = 0
        let len = s.length
        while (fast < len) {
            if (sArr[fast] === ' ' && (fast === 0 || sArr[fast - 1] === ' ')) {
                fast++
            } else {
                sArr[slow++] = sArr[fast++]
            }
        }
        // 移除结尾的空格
        sArr.length = sArr[slow - 1] === ' ' ? slow - 1 : slow
    }
    function reverse(sArr, start, end) {
        let l = start, r = end
        while (l < r) {
            [sArr[l], sArr[r]] = [sArr[r], sArr[l]]
            l++; r--;
        }
    }
};

// @lc code=end

