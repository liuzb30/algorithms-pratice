/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
 * @return {number[][]}
 */
// 思路：用队列来保存当前层的数据，那如何区分每一层的数据，我想到了用一个特殊字符来区分，用一个临时数组来保存当前层的数据，当遇到这个特殊字符，则把当前层的数据放到结果中，清空临时数组，如果队列还有数据，则需要在队尾加入这个特殊字符。如果不是特殊字符，则把数据保存到临时数组中，并把它的左右节点入栈。
var levelOrder = function (root) {
    if (!root) return []
    const res = []
    let temp = []
    let queue = [root]
    queue.push('\n')
    while (queue.length) {
        const top = queue.shift()
        if (top === '\n') {
            res.push(temp)
            temp = []
            queue.length && queue.push('\n')
        } else {
            temp.push(top.val)
            if (top.left) queue.push(top.left)
            if (top.right) queue.push(top.right)
        }
    }
    return res
};
// 思路2：不用特殊字符，而是在每一层遍历开始时获取队列的长度，长度遍历完则表示当前层已经遍历结束。
var levelOrder = function (root) {
    if (!root) return []
    const queue = [root]
    const result = []
    let level = 0
    while (queue.length) {
        result.push([])
        let size = queue.length
        while (size--) {
            const top = queue.shift()
            result[level].push(top.val)
            if (top.left) queue.push(top.left)
            if (top.right) queue.push(top.right)
        }
        level++
    }
    return result
}
// @lc code=end

