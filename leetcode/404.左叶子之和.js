/*
 * @lc app=leetcode.cn id=404 lang=javascript
 *
 * [404] 左叶子之和
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
var sumOfLeftLeaves = function (root) {
    // 1.确定入参和返回值
    // 2.确定终止条件
    if (!root) return 0
    // 3.确定单层逻辑
    const leftVal = sumOfLeftLeaves(root.left)
    const rightVal = sumOfLeftLeaves(root.right)
    let minVal = 0
    if (root.left && !root.left.left && !root.left.right) {
        minVal = root.left.val
    }
    return minVal + leftVal + rightVal
};
var sumOfLeftLeaves = function (root) {
    if (!root) return 0
    let stack = [root], sum = 0
    while (stack.length) {
        let node = stack.pop()
        // 处理当前节点
        if (node.left && !node.left.left && !node.left.right) {
            sum += node.left.val
        }
        // 因为栈后进先出的特点，先压入右节点
        node.right && stack.push(node.right)
        node.left && stack.push(node.left)
    }
    return sum
}
// @lc code=end

