/*
 * @lc app=leetcode.cn id=513 lang=javascript
 *
 * [513] 找树左下角的值
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
 * @return {number}
 */
var findBottomLeftValue = function (root) {
    let maxLeftVal = root.val, maxDepth = Number.MIN_SAFE_INTEGER
    const find = (node, depth) => {
        if (!node.left && !node.left) {
            if (depth > maxDepth) {
                maxDepth = depth
                maxLeftVal = node.val
            }
        }
        node.left && find(node.left, depth + 1)
        node.right && find(node.right, depth + 1)
    }
    find(root, 0)
    return maxLeftVal
};
var findBottomLeftValue = function (root) {
    let maxLeftVal = Number.MIN_SAFE_INTEGER, queue = [root]
    while (queue.length) {
        let len = queue.length
        for (let i = 0; i < len; i++) {
            let node = queue.shift()
            if (i === 0) {
                maxLeftVal = node.val
            }
            node.left && queue.push(node.left)
            node.right && queue.push(node.right)
        }
    }
    return maxLeftVal
}
// @lc code=end

