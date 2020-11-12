/*
 * @lc app=leetcode.cn id=79 lang=javascript
 *
 * [79] 单词搜索
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

var exist = function (board, word) {
  let row = board.length;
  let col = board[0].length;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      let res = find(i, j, 0);
      if (res) return true;
    }
  }
  return false;
  function find(i, j, k) {
    //   终止条件
    if (i >= row || i < 0) return false;
    if (j >= col || j < 0) return false;
    let letter = board[i][j];
    if (letter !== word[k]) return false;
    if (k === word.length - 1) return true;
    // 把当前节点置空，防止重复执行
    board[i][j] = null;
    let ret =
      find(i - 1, j, k + 1) ||
      find(i + 1, j, k + 1) ||
      find(i, j - 1, k + 1) ||
      find(i, j + 1, k + 1);
    // 还原当前节点
    board[i][j] = letter;
    return ret;
  }
};
// 思路：
// 1.怎么找
// 2.什么时候结束
// 3.find内部 怎么找下一步 缓存中间过程
// @lc code=end
