/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    function dfs(grid, i, j) {
        if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] === '0') return
        grid[i][j] = '0'
        dfs(grid, i - 1, j)
        dfs(grid, i + 1, j)
        dfs(grid, i, j - 1)
        dfs(grid, i, j + 1)
    }
    let count = 0
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === '1') {
                dfs(grid, i, j)
                count++
            }
        }
    }
    return count
};
// var numIslands = function (grid) {
//     function bfs(grid, i, j) {
//         let queue = [[i, j]]
//         while (queue.length) {
//             let [i, j] = queue.shift()
//             if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] === '0') continue
//             grid[i][j] = '0'
//             queue.push([i, j - 1])
//             queue.push([i, j + 1])
//             queue.push([i - 1, j])
//             queue.push([i + 1, j])
//         }
//     }
//     let count = 0
//     for (let i = 0; i < grid.length; i++) {
//         for (let j = 0; j < grid[i].length; j++) {
//             if (grid[i][j] === '1') {
//                 bfs(grid, i, j)
//                 count++
//             }
//         }
//     }
//     return count
// }
// @lc code=end

