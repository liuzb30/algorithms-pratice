/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N 皇后
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */

var solveNQueens = function (n) {
  let res = [], path = []
  backTracking(0)
  return res
  function backTracking(row) {
    if (path.length === n) {
      res.push(generate(path))
      return
    }
    for (let i = 0; i < n; i++) {
      // 判断是否符合条件
      if (isConfilt(row, i)) continue
      path.push(i)
      backTracking(row + 1)
      path.pop()
    }
  }

  function generate(path) {
    return path.map(i => {
      let arr = new Array(n).fill('.')
      arr[i] = 'Q'
      return arr.join('')
    })
  }

  function isConfilt(row, col) {
    return path.some((c, r) => {
      // 列是否一样，是否在一个斜线上
      if (c === col || c + r === col + row || r - c === row - col) {
        return true
      }
    })
  }
}
// 先分析结束条件
// 1.行不能一样
// 2.列不能一样
// 3.行-列不能一样
// 4.行+列不能一样

// @lc code=end
