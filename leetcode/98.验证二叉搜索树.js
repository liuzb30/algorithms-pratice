/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
 * @return {boolean}
 */
// var isValidBST = function (root) {
//   let pre = null
//   const inOrder = (root) => {
//     if (root == null) return true
//     let left = inOrder(root.left)
//     if (pre != null && pre.val >= root.val) return false
//     pre = root
//     let right = inOrder(root.right)
//     return left && right
//   }
//   return inOrder(root)
// }

var isValidBST = function (root) {
  let stack = []
  let cur = root
  let pre = null
  while (cur || stack.length) {
    if (cur) {
      stack.push(cur)
      cur = cur.left
    } else {
      cur = stack.pop()
      if (pre && pre.val >= cur.val) return false
      pre = cur
      cur = cur.right
    }
  }
  return true
}

// @lc code=end
