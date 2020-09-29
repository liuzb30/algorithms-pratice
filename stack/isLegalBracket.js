// 请编写一个函数判断字符串中的括号是否合法，所谓合法，就是括号成对出现
// sdf(ds(ew(we)rw)rwqq)qwewe 合法
// (sd(qwqw)sd(sd)) 合法
// ()()sd()(sd()fw))( 不合法

const { Stack } = require("./stack");

// 思路：利用栈来实现，当遇到左括号则入栈，遇到右括号，判断栈顶是否左括号，是的话则出栈，不是则返回false，最后判断栈顶是否为空，是则为true
const isLegalBracket = (str) => {
  const stack = new Stack();
  for (let i = 0; i < str.length; i++) {
    let item = str[i];
    if (item === "(") {
      stack.push(item);
    } else if (item === ")") {
      if (stack.top() === "(") {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.size() === 0;
};

console.log(isLegalBracket("sdf(ds(ew(we)rw)rwqq)qwewe"));
console.log(isLegalBracket("(sd(qwqw)sd(sd))"));
console.log(isLegalBracket("()()sd()(sd()fw))("));
