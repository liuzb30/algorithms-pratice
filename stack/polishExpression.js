// 计算逆波兰表达式
// ["4", "13", "5", "/", "+"] 等价于(4 + (13 / 5)) = 6
// ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"] 等价于((10 *
// (6 / ((9 + 3) * -11))) + 17) + 5

const { Stack } = require("./stack");

// 思路：遇到+、-、*、/等符号，则取出栈顶两个元素进行计算，计算完把结果入栈
const calc_exp = (exp) => {
  const stack = new Stack();
  exp.forEach((item) => {
    if (["+", "-", "*", "/"].indexOf(item) > -1) {
      const a = stack.pop();
      const b = stack.pop();
      const expStr = b + item + a;
      stack.push(parseInt(eval(expStr)));
    } else {
      stack.push(item);
    }
  });
  console.log(stack.top());
  return stack.top();
};

calc_exp(["4", "13", "5", "/", "+"]);
calc_exp(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]);
