/*
 * @lc app=leetcode.cn id=226 lang=javascript
 *
 * [226] 翻转二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
// var invertTree = function(root) {
//     // 边界条件：节点是空的则返回null
//     if(!root) return null
//     // 交换左右节点
//     const left = invertTree(root.right)
//     const right = invertTree(root.left)
//     root.left = left
//     root.right = right
//     return root
// };
// 思路：先把根节点入栈，然后对栈进行处理
// 栈为空则跳出循环，不为空则出栈
// 判断节点是否有左右节点，有则交换左右节点，并把左右节点入栈
// var invertTree = function(root) {
//     if(root==null) return root
//     const queue = [root]
//     while(queue.length){
//         const cur = queue.shift();
//         // 交换左右节点
//         [cur.left,cur.right] = [cur.right,cur.left]
//         cur.left && (queue.push(cur.left))
//         cur.right && (queue.push(cur.right))
//     }
//     return root
// }
var invertTree = function (root) {
    if (!root) return null
    const right = invertTree(root.right)
    const left = invertTree(root.left)
    root.left = right
    root.right = left
    return root
}
// 深度优先 前序遍历
var invertTree = function (root) {
    if (!root) return root
    function swap(node) {
        const right = node.right
        node.right = node.left
        node.left = right
    }
    const stack = [root]
    while (stack.length) {
        let node = stack.pop()
        swap(node)
        // 利用栈后进先出，先放入右节点
        node.right && stack.push(node.right)
        node.left && stack.push(node.left)
    }
    return root
}
// 广度优先 层序遍历
function swap(node) {
    const right = node.right
    node.right = node.left
    node.left = right
}
var invertTree = function (root) {
    if (!root) return root
    const queue = [root]
    while (queue.length) {
        let len = queue.length
        while (len--) {
            let node = queue.shift()
            swap(node)
            node.left && queue.push(node.left)
            node.right && queue.push(node.right)
        }

    }
    return root
}

// @lc code=end

