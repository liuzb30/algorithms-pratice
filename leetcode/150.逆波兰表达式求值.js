/*
 * @lc app=leetcode.cn id=150 lang=javascript
 *
 * [150] 逆波兰表达式求值
 */

// @lc code=start
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    let stack = []
    const calc = {
        '+': (a, b) => a * 1 + b * 1,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b | 0
    }
    for (let i = 0; i < tokens.length; i++) {
        if ('+-/*'.indexOf(tokens[i]) > -1) {
            let val1 = stack.pop()
            let val2 = stack.pop()
            stack.push(calc[tokens[i]](val2, val1))
        } else {
            stack.push(tokens[i])
        }
    }
    return stack.pop()
};
// @lc code=end

