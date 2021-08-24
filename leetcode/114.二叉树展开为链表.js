/*
 * @lc app=leetcode.cn id=114 lang=javascript
 *
 * [114] 二叉树展开为链表
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
// var flatten = function (root) {
//     if (root == null) return
//     flatten(root.left)
//     flatten(root.right)
//     if (root.left) {
//         let p = root.left
//         while (p.right) {
//             p = p.right
//         }
//         p.right = root.right
//         root.right = root.left
//         root.left = null
//     }
// };
var flatten = function (root) {
    let stack = [], set = new Set()
    let p = root
    while (stack.length || p) {
        while (p) {
            stack.push(p)
            p = p.left
        }
        const node = stack[stack.length - 1]
        if (node.right && !set.has(node.right)) {
            p = node.right
            set.add(p)
        } else {
            // 以下为思路图中关键逻辑
            if (node.left) {
                let p = node.left;
                while (p.right) {
                    p = p.right;
                }
                p.right = node.right;
                node.right = node.left;
                node.left = null;
            }
            stack.pop()
        }
    }
}

// @lc code=end

