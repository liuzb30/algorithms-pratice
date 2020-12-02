/*
 * @lc app=leetcode.cn id=59 lang=javascript
 *
 * [59] 螺旋矩阵 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
// var generateMatrix = function (n) {
//   // 用一个变量flag表示移动的方向
//   // 向左0 j++
//   // 向下1 i++
//   // 向右2 j--
//   // 向上3 i--
//   // 用一个函数fill来填充数据
//   let arr = [];
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       if (!arr[i]) {
//         arr[i] = [];
//       }
//       arr[i][j] = "";
//     }
//   }

//   let flag = 0;
//   //   console.log(arr);
//   //   arr[0][0] = 0;

//   function fill(i, j, k) {
//     if (k > n * n) return;
//     arr[i][j] = k;
//     console.log(arr, i, j, k);
//     k++;

//     // flag = flag%3
//     if (flag === 0) {
//       if (arr[i][j + 1] !== "") {
//         flag = 1;
//         i++;
//       } else {
//         j++;
//       }
//     } else if (flag === 1) {
//       if (arr[i + 1] && arr[i + 1][j] === "") {
//         i++;
//       } else {
//         flag = 2;
//         j--;
//       }
//     } else if (flag === 2) {
//       if (arr[i][j - 1] !== "") {
//         flag = 3;
//         i--;
//       } else {
//         j--;
//       }
//     } else {
//       if (arr[i - 1][j] !== "") {
//         flag = 0;
//         j++;
//       } else {
//         i--;
//       }
//     }
//     fill(i, j, k);
//   }
//   fill(0, 0, 1);
//   return arr;
// };
// 边界控制
var generateMatrix = function (n) {
  let arr = new Array(n).fill("").map(() => new Array(n).fill(""));
  //   定义四个边界
  let l = 0,
    r = n - 1,
    t = 0,
    b = n - 1,
    num = 1,
    tar = n * n;
  while (num <= tar) {
    for (let i = l; i <= r; i++) arr[t][i] = num++; // left to right.
    t++;
    for (let i = t; i <= b; i++) arr[i][r] = num++; // top to bottom.
    r--;
    for (let i = r; i >= l; i--) arr[b][i] = num++; // right to left.
    b--;
    for (let i = b; i >= t; i--) arr[i][l] = num++; // bottom to top.
    l++;
  }
  console.log(arr);
  return arr;
};
// @lc code=end
