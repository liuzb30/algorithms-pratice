/*
 * @lc app=leetcode.cn id=127 lang=javascript
 *
 * [127] 单词接龙
 */

// @lc code=start
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
    // 判断两个单词是否相邻
    var isSimilar = (a, b) => {
        let diff = 0
        for (let i = 0; i < a.length; i++) {
            if (a[i] !== b[i]) diff++
            if (diff > 1) return false
        }
        return true
    }
    let queue = [beginWord]
    // 如果单词列表有了则删除
    const index = wordList.indexOf(beginWord)
    if (index !== -1) {
        wordList.splice(index, 1)
    }
    let res = 1
    while (queue.length) {
        let size = queue.length
        while (size--) {
            const word = queue.shift()
            for (let i = 0; i < wordList.length; i++) {
                if (!isSimilar(wordList[i], word)) continue
                if (wordList[i] === endWord) return res + 1
                queue.push(wordList[i])
                wordList.splice(i, 1)
                i--
            }
        }
        res += 1
    }
    return 0


};
// @lc code=end

