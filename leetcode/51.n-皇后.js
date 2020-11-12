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
  let ret = [];

  find(0);
  return ret;
  function find(row, tmp = []) {
    if (row === n) {
      ret.push(
        tmp.map((colIndex, rowIndex) => {
          let arr = new Array(n).fill(".");
          arr[colIndex] = "Q";
          return arr.join("");
        })
      );
    }

    for (let col = 0; col < n; col++) {
      // 不能存放
      let noset = tmp.some((colIndex, rowIndex) => {
        // 用列来遍历，就不需要判断行了
        return (
          colIndex === col ||
          rowIndex - colIndex === row - col ||
          rowIndex + colIndex === row + col
        );
      });
      if (noset) {
        continue;
      }
      find(row + 1, [...tmp, col]);
    }
  }
};
// 先分析结束条件
// 1.行不能一样
// 2.列不能一样
// 3.行-列不能一样
// 4.行+列不能一样

// 定义递归函数的功能
// 查找第n行的列数据
// tmp用数组表示，索引是行，索引的值是列
// @lc code=end
