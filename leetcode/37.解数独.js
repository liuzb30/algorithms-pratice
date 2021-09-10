/*
 * @lc app=leetcode.cn id=37 lang=javascript
 *
 * [37] 解数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const solveSudoku = (board) => {
  let len = board.length
  backTracking(0, 0)
  return board
  function backTracking(row, col) {
    if (row >= len) return true
    if (col === len) return backTracking(row + 1, 0)
    if (board[row][col] !== '.') return backTracking(row, col + 1)
    for (let i = 1; i <= len; i++) {
      // 判断条件
      let item = String(i)
      if (isConfilt(row, col, item)) continue
      board[row][col] = item
      if (backTracking(row, col + 1)) return true
      board[row][col] = '.'
    }
    return false
  }

  function isConfilt(row, col, val) {
    // 行不能一样
    if (board[row].includes(val)) return true
    // 列不能一样
    for (let i = 0; i < len; i++) {
      if (board[i][col] === val) return true
    }
    // 3*3不能一样
    let r = Math.floor(row / 3) * 3
    let c = Math.floor(col / 3) * 3
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[r + i][c + j] === val) {
          return true
        }
      }
    }
    return false

  }
}

// @lc code=end
