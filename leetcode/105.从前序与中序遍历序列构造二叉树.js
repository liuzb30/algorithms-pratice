/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    // 第一步 判断数组是否为空
    let len = preorder.length
    if (!len) return null
    // 第二步 取前序数组第一个元素作为节点元素
    let root = new TreeNode(preorder[0])
    // 第三步 从中序数组找出节点元素的位置
    let index = inorder.indexOf(root.val)
    // 第四步 切割中序数组
    // 第五步 切割前序数组
    // 第六步 递归处理左区间和右区间
    root.left = buildTree(preorder.slice(1, index + 1), inorder.slice(0, index))
    root.right = buildTree(preorder.slice(index + 1, len), inorder.slice(index + 1, len))
    return root
};
// @lc code=end

