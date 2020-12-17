/*
 * @lc app=leetcode.cn id=997 lang=javascript
 *
 * [997] 找到小镇的法官
 */

// @lc code=start
/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
// let findJudge = function (N, trust) {
//   //构造0-N个节点的图
//   let graph = Array.from({ length: N + 1 }, () => ({
//     outDegree: 0,
//     inDegree: 0,
//   }));
//   trust.forEach(([a, b]) => {
//     graph[a].outDegree++;
//     graph[b].inDegree++;
//   });
//   return graph.findIndex(({ outDegree, inDegree }, index) => {
//     //剔除0
//     return index != 0 && outDegree === 0 && inDegree === N - 1;
//   });
// };
let findJudge = function (N, trust) {
  let graph = Array(N + 1).fill(0);
  // 出度加一
  // 入度减一
  trust.forEach(([a, b]) => {
    graph[a]--;
    graph[b]++;
  });
  return graph.findIndex((node, index) => {
    // 剔除0
    return index != 0 && node === N - 1;
  });
};
// @lc code=end
