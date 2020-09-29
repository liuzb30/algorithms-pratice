// 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。

// 输入：n = 3
// 输出：[
//        "((()))",
//        "(()())",
//        "(())()",
//        "()(())",
//        "()()()"
//      ]

const generateParenthesis = (n) => {
  const result = [];
  const dfs = (path, left, right) => {
    // 不合法提前结束
    if (left > n || left < right) return;
    // 达到结束条件
    if (left + right === 2 * n) {
      result.push(path);
      return;
    }
    dfs(path + "(", left + 1, right);
    dfs(path + ")", left, right + 1);
  };

  dfs("", 0, 0);

  return result;
};

console.log(generateParenthesis(4));
