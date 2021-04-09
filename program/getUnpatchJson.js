// 找出一个字符串中的不匹配括号（ {[()]} ）的位置，以json形式输出，位置index从0开始。

// 异常输入
// ${{(3+5)*2+(5/(24)}
// 输出
// {
//     1: '{',
//     11: '(',
// }
// 正常输入
// [a+b]/${x}
// 输出
// {}

// 解题思路：
// 遍历字符依次判断：

// 首先判断该元素是否括号，不是则遍历下一个字符
// 是 { 、 ( 、 [ ，直接入栈
// 否则该字符为 } 、 ) 、 ] 中的一种，
// 如果栈为空，则当前右括号无匹配左括号，直接写进结果数组，并遍历下一个字符
// 栈顶元素出栈，判断当前元素是否与出栈元素匹配，例如栈中元素有 ({， 如果继续遍历到的元素为 ), 那么当前元素序列为 ({) 是不可能有效的，所以此时与出栈元素匹配失败，将出栈元素写进结果数组，并继续匹配当前元素
// 当遍历完成时，所有已匹配的字符都已匹配出栈，如果栈不为空，说明字符串中还有未匹配的左括号字符，则将栈元素直接写进结果数组

const getUnpatchJson = (s) => {
  let map = {
    "{": "}",
    "(": ")",
    "[": "]",
  };
  let result = {};
  let stack = [];
  let brackets = "{[()]}";
  for (let i = 0; i < s.length; i++) {
    if (!brackets.includes(s[i])) continue;
    if (["(", "[", "{"].includes(s[i])) {
      stack.push({ key: i, value: s[i] });
    } else if ([")", "]", "}"].includes(s[i])) {
      if (!stack.length) {
        result[i] = s[i];
      } else {
        let top = stack.pop();
        if (map[top.value] !== s[i]) {
          result[top.key] = top.value;
          i--;
        }
      }
    }
  }
  while (stack.length) {
    let top = stack.pop();
    result[top.key] = top.value;
  }
  return result;
};

const result = getUnpatchJson("[a+b]/${x}");

console.log(result);
