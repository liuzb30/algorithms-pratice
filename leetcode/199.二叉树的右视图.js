/*
 * @lc app=leetcode.cn id=199 lang=javascript
 *
 * [199] 二叉树的右视图
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
 * @return {number[]}
 */
var rightSideView = function (root) {
    if (!root) return [];
    let queue = [];
    let res = [];
    queue.push(root);
    while (queue.length) {
        console.log(queue[0].val);
        res.push(queue[0].val);
        let size = queue.length;
        while (size--) {
            // 一个size的循环就是一层的遍历，在这一层只拿最右边的结点
            let front = queue.shift();
            if (front.right) queue.push(front.right);
            if (front.left) queue.push(front.left);
        }
    }
    return res;
};
// @lc code=end

