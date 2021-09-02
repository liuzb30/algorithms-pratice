/*
 * @lc app=leetcode.cn id=106 lang=javascript
 *
 * [106] 从中序与后序遍历序列构造二叉树
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
    let len = postorder.length
    // 第一步 如果数组大小为0，说明是空节点
    if (!len) return null
    // 第二步 如果不为空，则取后序数组最后一个元素为节点的元素
    let root = new TreeNode(postorder[len - 1])
    // 第三步 找到节点元素在中序数组中的位置，作为切割点
    let index = inorder.indexOf(root.val)
    // 第四步 切割中序数组,切成中序左数组和中序右数组
    // 第五步 切割后序数组
    // 第六步 递归处理左区间和右区间
    root.left = buildTree(inorder.slice(0, index), postorder.slice(0, index))
    root.right = buildTree(inorder.slice(index + 1, inorder.length), postorder.slice(index, len - 1))
    return root
};
// @lc code=end

