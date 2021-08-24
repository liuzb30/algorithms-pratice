/*
 * @lc app=leetcode.cn id=95 lang=javascript
 *
 * [95] 不同的二叉搜索树 II
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
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function (n) {
    if (n === 0) return []
    const help = (start, end) => {
        if (start > end) return [null]
        if (start === end) return [new TreeNode(start)]
        let res = []
        for (let i = start; i <= end; i++) {
            let leftNodes = help(start, i - 1)
            let rightNodes = help(i + 1, end)
            for (let j = 0; j < leftNodes.length; j++) {
                for (let k = 0; k < rightNodes.length; k++) {
                    let node = new TreeNode(i)
                    node.left = leftNodes[j]
                    node.right = rightNodes[k]
                    res.push(node)
                }
            }
        }
        return res
    }
    return help(1, n)
};
// @lc code=end

