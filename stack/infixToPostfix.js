const { Stack } = require("./stack");

// 将算术表达式由中序转为后序表达式
function infixToPostfix(exp) {
  let stack = new Stack();
  let postfixList = [];
  const postfixMap = { "+": 1, "-": 1, "*": 2, "/": 2 };

  for (let i = 0; i < exp.length; i++) {
    let ele = exp[i];
    if (!isNaN(ele)) {
      postfixList.push(ele);
    } else if (ele === "(") {
      stack.push(ele);
    } else if (ele === ")") {
      while (stack.top() !== "(") {
        postfixList.push(stack.pop());
      }
      stack.pop();
    } else {
      while (!stack.isEmpty() && postfixMap[stack.top()] >= postfixMap[ele]) {
        postfixList.push(stack.pop());
      }
      stack.push(ele);
    }
  }
  while (!stack.isEmpty()) {
    postfixList.push(stack.pop());
  }
  console.log(postfixList);
}

// infixToPostfix("((1+2*3)*((3-4)*(5-6)))");
// 12+3
console.log(infixToPostfix(["12", "+", "3"]));
// 2-3+2
console.log(infixToPostfix(["2", "-", "3", "+", "2"]));
// (1+(4+5+3)-3)+(9+8)
var exp = [
  "(",
  "1",
  "+",
  "(",
  "4",
  "+",
  "5",
  "+",
  "3",
  ")",
  "-",
  "3",
  ")",
  "+",
  "(",
  "9",
  "+",
  "8",
  ")",
];
console.log(infixToPostfix(exp));

// (1+(4+5+3)/4-3)+(6+8)*3
var exp = [
  "(",
  "1",
  "+",
  "(",
  "4",
  "+",
  "5",
  "+",
  "3",
  ")",
  "/",
  "4",
  "-",
  "3",
  ")",
  "+",
  "(",
  "6",
  "+",
  "8",
  ")",
  "*",
  "3",
];
console.log(infixToPostfix(exp));

console.log(infixToPostfix(["12", "+", "3", "*", "5"]));
console.log(infixToPostfix(["12", "*", "3", "+", "5"]));
