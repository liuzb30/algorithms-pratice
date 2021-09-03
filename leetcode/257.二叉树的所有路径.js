/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
// var binaryTreePaths = function (root) {
//     let path = [], res = []
//     const dfs = (node) => {
//         if (node == null) return
//         path.push(node)
//         dfs(node.left)
//         dfs(node.right)
//         if (!node.left && !node.right) {
//             res.push(path.map(item => item.val).join('->'))
//         }
//         // 注意每访问完一个节点记得把它从path中删除，达到回溯效果
//         path.pop()
//     }
//     dfs(root)
//     return res
// }
var binaryTreePaths = function (root) {
    let stack = [], res = [], set = new Set()
    let p = root
    while (stack.length || p) {
        while (p) {
            stack.push(p)
            p = p.left
        }
        const node = stack[stack.length - 1]
        if (!node.left && !node.right) {
            res.push(stack.map(item => item.val).join('->'))
        }
        if (node.right && !set.has(node.right)) {
            set.add(node.right)
            p = node.right
        } else {
            stack.pop()
        }
    }
    return res
}
// var binaryTreePaths = function (root) {
//     const res = []
//     const getPath = (node, path = '') => {
//         path += node.val
//         if (!node.left && !node.right) {
//             res.push(path)
//             return
//         }
//         node.left && getPath(node.left, path + '->')
//         node.right && getPath(node.right, path + '->')
//     }
//     getPath(root)
//     return res
// }
// var binaryTreePaths = function (root) {
//     let res = [], stack = [root], pathSt = [root.val.toString()]
//     while (stack.length) {
//         const node = stack.pop()
//         console.log(pathSt);
//         const path = pathSt.pop()
//         if (!node.left && !node.right) {
//             res.push(path)
//         }
//         if (node.right) {
//             stack.push(node.right)
//             pathSt.push(path + '->' + node.right.val)
//         }
//         if (node.left) {
//             stack.push(node.left)
//             pathSt.push(path + '->' + node.left.val)
//         }
//     }
//     return res
// }
// @lc code=end

