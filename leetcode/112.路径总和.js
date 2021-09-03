/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
    if (!root) return false
    const traversal = (root, target) => {
        // 如果是叶子节点，并且计数器为0则返回true
        if (!root.left && !root.right && target === 0) return true
        if (!root.left && !root.right) return false
        // 如果有左节点，并且找到路径则返回true
        if (root.left && traversal(root.left, target - root.left.val)) return true
        // 如果有右节点，并且找到路径则返回true
        if (root.right && traversal(root.right, target - root.right.val)) return true
        return false
    }
    return traversal(root, targetSum - root.val)
};

var hasPathSum = function (root, targetSum) {
    if (!root) return false
    let res = false, stack = [[root, root.val]]
    while (stack.length) {
        let item = stack.pop()
        let [node, sum] = item
        if (!node.left && !node.right && sum === targetSum) {
            return true
        }
        node.right && stack.push([node.right, sum + node.right.val])
        node.left && stack.push([node.left, sum + node.left.val])
    }
    return res
}
// @lc code=end

