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
      if (find(i, j, 0)) return true;
    }
  }
  return false;
  function find(r, c, cur) {
    // 结束条件
    // 是否越界
    if (r >= row || r < 0) return false;
    if (c >= col || c < 0) return false;
    // 是否要查找的值
    let letter = board[r][c];
    if (letter !== word[cur]) return false;
    // 是否最后一个值
    if (cur === word.length - 1) return true;
    // 把当前值置空，避免重复查找
    board[r][c] = null;
    // 查找下一个
    const ret =
      find(r + 1, c, cur + 1) ||
      find(r - 1, c, cur + 1) ||
      find(r, c + 1, cur + 1) ||
      find(r, c - 1, cur + 1);
    board[r][c] = letter;
    return ret;
  }
};
// 思路：
// 1.怎么找
// 2.什么时候结束
// 3.find内部 怎么找下一步 缓存中间过程
// @lc code=end
