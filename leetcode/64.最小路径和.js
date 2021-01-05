/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  // 遍历网格，计算每个格子的最小距离，保存起来
  //   const minSumGrid = [];
  let row = grid.length;
  let col = grid[0].length;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (i === 0 && j === 0) continue;
      else if (i === 0) {
        grid[i][j] = grid[i][j] + grid[i][j - 1];
      } else if (j === 0) {
        grid[i][j] = grid[i][j] + grid[i - 1][j];
      } else {
        grid[i][j] = grid[i][j] + Math.min(grid[i - 1][j], grid[i][j - 1]);
      }
    }
  }
  return grid[row - 1][col - 1];
};
// @lc code=end
