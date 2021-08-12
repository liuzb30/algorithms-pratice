/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
// 思路：用栈来存储数据，当遇到[({则入栈，遇到]})则判断栈顶是否对应的符号，是则出栈，不是则返回false。最后再判断栈是否为空
var isValid = function (s) {
  const charMap = { '{': '}', '[': ']', '(': ')' }
  const stack = []
  for (let i = 0; i < s.length; i++) {
    let item = s[i]
    if (charMap[item]) {
      stack.push(item)
    } else if (item === ')' || item === '}' || item === ']') {
      if (charMap[stack.pop()] !== item) return false
    }
  }
  return stack.length ? false : true
}
// @lc code=end
