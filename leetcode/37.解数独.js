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
  function isConflict(row, col, num) {
    // 行列不能有相同的
    for (let i = 0; i < 9; i++) {
      if (board[row][i] === num || board[i][col] === num) {
        return true;
      }
    }
    // 3*3方格不能有相同的
    const subRow = Math.floor(row / 3) * 3;
    const subCol = Math.floor(col / 3) * 3;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[subRow + i][subCol + j] === num) {
          return true;
        }
      }
    }
    return false;
  }
  function fill(i, j) {
    // 结束条件
    if (j >= 9) {
      i++;
      j = 0;
      if (i >= 9) return true;
    }
    if (board[i][j] !== ".") return fill(i, j + 1);

    for (let num = 1; num <= 9; num++) {
      let item = String(num);
      if (isConflict(i, j, item)) continue;
      // 没冲突则填充当前数字，继续下一个
      board[i][j] = item;
      // 如果都找到了就不需要继续找了
      if (fill(i, j + 1)) return true;
      // 还原当前位置
      board[i][j] = ".";
    }
    return false;
  }

  fill(0, 0);
  return board;
};

// 怎么找：遍历1-9，如果可以设置，则继续下个位置，直到所有数字都已经设置。
// 递归函数的功能，给某个位置填一个数字
// 结束条件：
// 1.已经有的数字则跳过
// 2.当所有数字都被填满
// @lc code=end
