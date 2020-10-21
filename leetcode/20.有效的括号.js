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
var isValid = function (s) {
  if (s.length % 2 !== 0 || s.length === 0) {
    return false;
  }
  let stack = [];
  // 遇到([{则入栈，遇到)]}则判断栈顶是否对应的左括号
  const map = {
    ")": "(",
    "]": "[",
    "}": "{",
  };
  const lq = ["(", "{", "["];
  for (let i = 0; i < s.length; i++) {
    const element = s[i];
    if (lq.indexOf(element) !== -1) {
      stack.push(element);
    } else {
      if (map[element] !== stack[stack.length - 1]) {
        return false;
      }
      stack.pop();
    }
  }

  // 最后判断栈是否为空
  return stack.length === 0 ? true : false;
};
// @lc code=end
