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
// var solveNQueens = function (n) {
//   let ret = [];

//   find(0);
//   return ret;
//   function find(row, tmp = []) {
//     // 结束条件
//     if (row == n) {
//       ret.push(
//         tmp.map((c, r) => {
//           let arr = new Array(n).fill(".");
//           arr[c] = "Q";
//           return arr.join("");
//         })
//       );
//     }

//     for (let col = 0; col < n; col++) {
//       // 判断是否冲突
//       let isConflict = tmp.some((c, r) => {
//         return c === col || c + r === row + col || r - c === row - col;
//       });
//       if (isConflict) continue;
//       // 没冲突则缓存数据
//       find(row + 1, [...tmp, col]); //解构赋值，不要影响其他的tmp
//     }

//     return false;
//   }
// };
var solveNQueens = function (n) {
  let res = []
  const generateStr = arr => {
    return arr.map((col) => {
      const tmp = new Array(n).fill('.')
      tmp[col] = 'Q'
      return tmp.join('')
    })
  }
  const isValid = (row, col, arr) => {
    return !arr.some((c, r) => {
      return c === col || r + c === row + col || r - c === row - col
    })
  }
  const find = (row, tmp = []) => {
    // 结束条件
    if (row === n) {
      console.log(row);
      res.push(generateStr(tmp))
      return
    }
    for (let col = 0; col < n; col++) {
      // 判断是否有效
      if (isValid(row, col, tmp)) {
        find(row + 1, [...tmp, col])
      }
    }
  }
  find(0)
  return res
}
// 先分析结束条件
// 1.行不能一样
// 2.列不能一样
// 3.行-列不能一样
// 4.行+列不能一样

// 定义递归函数的功能
// 查找第n行的列数据
// tmp用数组表示，索引是行，索引的值是列
// @lc code=end
